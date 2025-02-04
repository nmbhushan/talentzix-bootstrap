import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function EditableResume() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    role: "The Role You Are Applying For?",
    phone: "Enter",
    email: "Enter",
    address: "Enter",
    skills: "Your Skills",
    experience: "Your Experience",
    strengths: "Your Strength",
    achievements: "Your Achievements",
  });
  const [editingField, setEditingField] = useState(null);

  const handleEdit = (field) => setEditingField(field);
  const handleChange = (e) => setFormData({ ...formData, [editingField]: e.target.value });
  const handleSave = () => setEditingField(null);

  return (
    <div className="border border-[#DDDDDD]">
        <div className="bg-[#1C1C1E] p-6 mb-5">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 text-white">
                <h1 className="text-[25px] font-semibold mb-2">
                  {editingField === "name" ? (
                    <Input className="bg-transparent border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.name} onChange={handleChange} onBlur={handleSave} autoFocus />
                  ) : (
                    <span onClick={() => handleEdit("name")}>{formData.name}</span>
                  )}
                </h1>
              </div>
              <div className="col-span-12 text-white">
                {editingField === "role" ? (
                    <Input className="bg-transparent border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.role} onChange={handleChange} onBlur={handleSave} autoFocus />
                  ) : (
                    <span className="text-[#F48B00] text-[16px] font-medium" onClick={() => handleEdit("role")}>{formData.role}</span>
                  )}
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 text-white">
                <label className="block mb-1 text-[#F48B00] text-[16px] font-semibold">Phone</label>
                {editingField === "phone" ? (
                    <Input className="bg-transparent border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.phone} onChange={handleChange} onBlur={handleSave} autoFocus />
                  ) : (
                    <span onClick={() => handleEdit("phone")}>{formData.phone}</span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 text-white">
                <label className="block mb-1 text-[#F48B00] text-[16px] font-semibold">Email</label>
                {editingField === "email" ? (
                    <Input className="bg-transparent border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.email} onChange={handleChange} onBlur={handleSave} autoFocus />
                  ) : (
                    <span onClick={() => handleEdit("email")}>{formData.email}</span>
                )}
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 text-white">
                <label className="block mb-1 text-[#F48B00] text-[16px] font-semibold">Address</label>
                {editingField === "address" ? (
                    <Input className="bg-transparent border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.address} onChange={handleChange} onBlur={handleSave} autoFocus />
                  ) : (
                    <span onClick={() => handleEdit("address")}>{formData.address}</span>
                )}
              </div>
            </div>
        </div>
        <div className="bg-white p-6">
            <div className="grid grid-cols-12 gap-4 mb-5">
                <div className="col-span-12 md:col-span-6 text-white">
                    <label className="border-b-2 pb-2 mb-3 border-[#000000] block mb-1 text-[#000000] text-[20px] font-medium">Skills</label>
                    {editingField === "skills" ? (
                      <Input className="bg-transparent text-[#969696] border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.skills} onChange={handleChange} onBlur={handleSave} autoFocus />
                    ) : (
                      <p className="text-[#969696] text-[14px]" onClick={() => handleEdit("skills")}>{formData.skills}</p>
                    )}
                </div>
                <div className="col-span-12 md:col-span-6 text-white">
                    <label className="border-b-2 pb-2 mb-3 border-[#000000] block mb-1 text-[#000000] text-[20px] font-medium">Strength</label>
                    {editingField === "strengths" ? (
                      <Input className="bg-transparent text-[#969696] border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.strengths} onChange={handleChange} onBlur={handleSave} autoFocus />
                    ) : (
                      <p className="text-[#969696] text-[14px]" onClick={() => handleEdit("strengths")}>{formData.strengths}</p>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mb-5">
                <div className="col-span-12 md:col-span-6 text-white">
                    <label className="border-b-2 pb-2 mb-3 border-[#000000] block mb-1 text-[#000000] text-[20px] font-medium">Experience</label>
                    {editingField === "experience" ? (
                      <Input className="bg-transparent text-[#969696] border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.experience} onChange={handleChange} onBlur={handleSave} autoFocus />
                    ) : (
                      <p className="text-[#969696] text-[14px]" onClick={() => handleEdit("experience")}>{formData.experience}</p>
                    )}
                </div>
                <div className="col-span-12 md:col-span-6 text-white">
                    <label className="border-b-2 pb-2 mb-3 border-[#000000] block mb-1 text-[#000000] text-[20px] font-medium">Key Achievements</label>
                    {editingField === "achievements" ? (
                      <Input className="bg-transparent text-[#969696] border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.achievements} onChange={handleChange} onBlur={handleSave} autoFocus />
                    ) : (
                      <p className="text-[#969696] text-[14px]" onClick={() => handleEdit("achievements")}>{formData.achievements}</p>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}
export default EditableResume;