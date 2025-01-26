import React, { useState, Suspense } from "react";

export default function ProfessionalTab() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 group overflow-hidden relative">
            <div className="text-center font-semibold text-[#555555]">Professional</div>
        </div>
    </div>
  );
}
