"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does the hiring process typically take?",
    answer:
      "Our recruitment cycle usually spans 4–6 weeks from initial consultation to offer acceptance, but timelines can vary based on role complexity and client availability.",
  },
  {
    question: "What is the replacement guarantee?",
    answer:
      "We offer a 90-day replacement guarantee: if a candidate departs for any reason within that period, we will conduct a new search at no additional fee.",
  },
  {
    question: "What geographic areas are covered?",
    answer:
      "Services span the Twin Cities metro area and greater Minnesota, with a focus on local talent.",
  },
  {
    question: "What makes manufacturing-focused recruitment different?",
    answer:
      "Our team has deep expertise in manufacturing processes, compliance standards, and industry networks, ensuring candidates are both technically skilled and culturally aligned.",
  },
  {
    question: "What are typical placement fees?",
    answer:
      "Placement fees typically range from 18% to 25% of the candidate’s first-year salary, depending on search scope and role level.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 ">
      <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-center mb-4 md:mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-neutral-600 md:text-lg mb-8">
        Get answers to frequently asked questions about the recruitment process.
      </p>

      <div className="max-w-7xl bg-neutral-100 rounded-xl px-[3%] p-12 mx-auto">
        <div className="divide-y divide-gray-200">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center  cursor-pointer justify-between focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${idx}-content`}
                >
                  <span className="md:text-lg font-medium text-left">
                    {item.question}
                  </span>
                  <motion.span
                    className="text-2xl"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-${idx}-content`}
                      className="mt-2 text-gray-700 text-sm md:text-base"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pt-2">{item.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
