import ResumeAnimation from "./ResumeAnimation";

const JobBoardsSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="md:w-3/5">
              <h2 className="text-2xl font-bold mb-3">
                Why Traditional Job Boards{" "}
                <span className="text-red-500">Fail</span> Manufacturing
                Professionals
              </h2>
              <p className="text-gray-700 mb-4">
                Ever wonder what happens to your job application after you click
                submit? On typical job boards:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">✕</span>
                  <span>
                    Your resume joins hundreds of others in overcrowded
                    applicant pools
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">✕</span>
                  <span>
                    Automated systems filter applications before human review
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">✕</span>
                  <span>Less than 10% of applicants receive any response</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 font-bold">✕</span>
                  <span>
                    Feedback on why you weren't selected is practically
                    nonexistent
                  </span>
                </li>
              </ul>
            </div>

            <div className="md:w-2/5 flex justify-center">
              <ResumeAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoardsSection;
