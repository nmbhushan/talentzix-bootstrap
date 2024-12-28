"use client"
// components/ScrollNavigation.tsx
import React, { useState, useEffect } from "react";

interface Section {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface ScrollNavigationProps {
    sections: Section[];
}

const ScrollNavigation: React.FC<ScrollNavigationProps> = ({ sections }) => {
    // Set the first section as active by default
    const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

    // Handle link click to update active section
    const handleClick = (sectionId: string) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            {/* Navigation Buttons */}
            <div className="flex w-full border-b-[1px] border-color-[#f0f0f0] justify-around">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => handleClick(section.id)}
                        className={`px-3 py-4 nav-button  border-b-[2px]  ${activeSection === section.id ? "border-b-primary-hover font-semibold" : "border-b-transparent"
                            }`}
                        aria-label={`Go to ${section.label}`}
                    >
                        {section.label}
                    </button>
                ))}
            </div>

            {/* Dynamic Sections */}
            {sections.map((section) => (
                <div key={section.id} id={section.id} className="section py-8">
                    {section.content}
                </div>
            ))}
        </div>
    );
};

export default ScrollNavigation;
