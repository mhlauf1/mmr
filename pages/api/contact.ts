import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

const resend = new Resend(process.env.RESEND_API_KEY!);
let lastTs = 0;

function parseForm(req: NextApiRequest) {
    return new Promise<{ fields: formidable.Fields; files: formidable.Files }>(
        (resolve, reject) => {
            const form = formidable({ multiples: false });
            form.parse(req, (err, fields, files) => {
                if (err) return reject(err);
                resolve({ fields, files });
            });
        }
    );
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).end("Method Not Allowed");
    }

    // rate-limit
    const now = Date.now();
    if (now - lastTs < 3000) {
        return res.status(429).json({ success: false, error: "Rate limit" });
    }
    lastTs = now;

    try {
        const { fields, files } = await parseForm(req);
        const {
            helpHiring = "false",
            helpJob = "false",
            fullName,
            email,
            phoneNumber,
            extraText,
        } = fields as Record<string, string>;

        if (!fullName || !email || !phoneNumber || !extraText) {
            return res
                .status(400)
                .json({ success: false, error: "Missing required fields" });
        }

        let attachments;
        if (files.resume) {
            const f = Array.isArray(files.resume) ? files.resume[0] : files.resume;
            const buffer = await fs.promises.readFile(f.filepath);
            attachments = [
                {
                    filename: f.originalFilename || "resume",
                    content: buffer.toString("base64"),
                    contentType: f.mimetype || "application/octet-stream",
                },
            ];
        }

        await resend.emails.send({
            from: "MN MFG Recruiting <no-reply@mnmfgrecruiting.com>",
            // to: ["Adam@MNmfgRecruiting.com"],
            to: ["mhlauf1@gmail.com"],
            subject: `New Inquiry from ${fullName}`,
            replyTo: email,
            text: `
Type: ${helpHiring === "true" ? "Hiring" : "Job seeker"}

Name: ${fullName}
Email: ${email}
Phone: ${phoneNumber}

Message:
${extraText}
      `,
            attachments,
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error("Contact API error:", err);
        return res
            .status(500)
            .json({ success: false, error: "Internal server error" });
    }
}
