"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does the recruitment process typically take?",
    answer:
      "Finding the right candidate usually takes between 2-6 weeks, but timelines can vary based on the complexity of the position, the interview timeline, and external factors.",
  },
  {
    question: "What is the free replacement guarantee?",
    answer:
      "We offer a 60-day guarantee for contingent searches and a 180-day guarantee for retained searches. If the candidate isn’t the right fit, we’ll find a replacement at no additional cost.",
  },
  {
    question: "What geographic areas are covered?",
    answer:
      "Services span the greater Twin Cities metro and throughout Minnesota.",
  },
  {
    question: "What makes manufacturing-focused recruitment different?",
    answer:
      "Our team has deep expertise in manufacturing processes, compliance standards, and industry networks, ensuring candidates are both technically skilled and culturally aligned.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 mb-8">
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
                  className="w-full flex items-center  gap-3 cursor-pointer justify-between focus:outline-none"
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
