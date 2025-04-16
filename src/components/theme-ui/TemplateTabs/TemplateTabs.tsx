import React, { useState, Suspense } from "react";

// Lazy load the components
const AllTab = React.lazy(() => import("./AllTab"));
const SimpleTab = React.lazy(() => import("./SimpleTab"));
const ProfessionalTab = React.lazy(() => import("./ProfessionalTab"));
const ModernTab = React.lazy(() => import("./ModernTab"));
const CreativeTab = React.lazy(() => import("./CreativeTab"));
const ArtsTab = React.lazy(() => import("./ArtsTab"));

export default function TemplateTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "All", component: <AllTab /> },
    { id: 1, label: "Simple", component: <SimpleTab /> },
    { id: 2, label: "Professional", component: <ProfessionalTab /> },
    { id: 3, label: "Modern", component: <ModernTab /> },
    { id: 4, label: "Creative", component: <CreativeTab /> },
    { id: 5, label: "Arts", component: <ArtsTab /> },
  ];

  return (
    <div className="p-4 container mx-auto bg-template-bg bg-contain bg-no-repeat">
      {/* Tab Headers */}
      <div className="flex justify-between border-b border-[#E4E4E4]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.id
                ? "text-[14px] md:text-[17px] font-semibold text-[#FFFFFF] bg-[#635AD9] rounded-[6px] md:min-w-[120px]"
                : "text-[14px] md:text-[17px] font-semibold text-foreground md:min-w-[120px]"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="my-10">
        <Suspense fallback={<div>Loading...</div>}>
          {tabs[activeTab].component}
        </Suspense>
      </div>
    </div>
  );
}
