import { useState } from "react";
import "./FAQ.css";
import InteractiveMesh from "../components/layout/InteractiveMesh";

const faqCategories = {
  "ADDITIONALS / ELECTIVES / BREADTH": [
    { q: "Question 1", a: "" },
    { q: "Question 2", a: "" },
    { q: "Question 3", a: "" },
  ],
  "MINOR / MICRO / INTERDISCIPLINARY": [
    { q: "Question 1", a: "" },
    { q: "Question 2", a: "" },
  ],
  "RESEARCH AND HIGHER STUDIES": [
    { q: "Question 1", a: "" },
  ],
  "GENERAL ACADEMIC QUERIES": [
    { q: "Question 1", a: "" },
  ],
  "CDC": [
    { q: "Question 1", a: "" },
  ],
  "SUBJECT REGISTRATION": [
    { q: "Question 1", a: "" },
  ],
  "FEES": [
    { q: "Question 1", a: "" },
  ],
  "MISCELLANEOUS": [
    { q: "Question 1", a: "" },
  ],
  "IMPORTANT LINKS": [
    { q: "Question 1", a: "" },
  ],
  "CONTACT INFORMATION": [
    { q: "Question 1", a: "" },
  ],
};

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(faqCategories)[0]
  );
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const questions = faqCategories[selectedCategory];

  return (
    <div className="faq-page">
      <h1 className="faq-heading">FAQs</h1>

      {/* 🔥 CUSTOM DROPDOWN */}
      <div className="faq-dropdown">
        <div
          className="dropdown-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedCategory}
          <span className={`arrow ${isOpen ? "rotate" : ""}`}>▼</span>
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            {Object.keys(faqCategories).map((cat, i) => (
              <div
                key={i}
                className="dropdown-item"
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsOpen(false);
                  setOpenIndex(null);
                }}
              >
                
                {cat}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* QUESTIONS */}
      <div key={selectedCategory} className="faq-container fade-in">
        <h2 className="faq-category">{selectedCategory}</h2>

        {questions.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "active" : ""}`}
          >
            <div
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span>{index + 1}. {item.q}</span>
              <span className={`arrow ${openIndex === index ? "rotate" : ""}`}>
                ▼
              </span>
            </div>

            <div className="faq-answer">
              {item.a || "Answer will be added later..."}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}