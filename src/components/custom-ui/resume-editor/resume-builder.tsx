import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleUser } from 'lucide-react';

export function EditableResume() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    role: "The Role You Are Applying For?",
    phone: "Enter",
    email: "Enter",
    address: "Enter",
    skills: "Your Skills",
    experience: "Your Experience",
    strengths: "Explain how it benefits your work",
    achievements: "Describe what you did and the impact it had",
    profileImage: null,
  });
  const [editingField, setEditingField] = useState<any>(null);

  const handleEdit = (field:any) => setEditingField(field);
  const handleChange = (e:any) => setFormData({ ...formData, [editingField]: e.target.value });
  const handleSave = () => setEditingField(null);
  const handleImageUpload = (e:any) => {
      const file = e.target.files[0];
      if (file) {
        const reader:any = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, profileImage: reader.result });
        };
        reader.readAsDataURL(file);
      }
  };

  return (
    <div className="border border-[#DDDDDD]">
        <div className="bg-[#1C1C1E] p-6 mb-5">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-9 text-white">
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
              <div className="col-span-12 lg:col-span-3 text-white flex items-center justify-center">
                <label className="cursor-pointer">
                  <input type="file" className="hidden" onChange={handleImageUpload} />
                  {formData.profileImage ? (
                    <img src={formData.profileImage} alt="Profile" className="w-[100px] h-[100px] xl:w-[140px] xl:h-[140px] rounded-full border border-[#555555]" />
                  ) : (
                    <div className="w-[100px] h-[100px] xl:w-[140px] xl:h-[140px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                        <CircleUser className="h-[48px] text-[#AAAAAA]"/>
                    </div>
                  )}
                </label>
              </div>

            </div>
        </div>
        <div className="bg-white p-6 min-h-[400px]">
            <div className="grid grid-cols-12 gap-4 mb-5">
                <div className="col-span-12 lg:col-span-6 text-white min-h-[150px]">
                    <label className="border-b-2 pb-2 mb-3 border-[#000000] block mb-1 text-[#000000] text-[20px] font-medium">Skills</label>
                    {editingField === "skills" ? (
                      <Textarea className="bg-transparent text-[#969696] border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.skills} onChange={handleChange} onBlur={handleSave} autoFocus />
                    ) : (
                      <p className="text-[#969696] text-[14px]" onClick={() => handleEdit("skills")}>{formData.skills}</p>
                    )}
                </div>
                <div className="col-span-12 lg:col-span-6 text-white min-h-[150px]">
                    <label className="border-b-2 pb-2 mb-3 border-[#000000] block mb-1 text-[#000000] text-[20px] font-medium">Strength</label>
                    {editingField === "strengths" ? (
                      <Textarea className="bg-transparent text-[#969696] border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.strengths} onChange={handleChange} onBlur={handleSave} autoFocus />
                    ) : (
                      <p className="text-[#969696] text-[14px]" onClick={() => handleEdit("strengths")}>{formData.strengths}</p>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mb-5">
                <div className="col-span-12 lg:col-span-6 text-white min-h-[150px]">
                    <label className="border-b-2 pb-2 mb-3 border-[#000000] block mb-1 text-[#000000] text-[20px] font-medium">Experience</label>
                    {editingField === "experience" ? (
                      <Textarea className="bg-transparent text-[#969696] border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.experience} onChange={handleChange} onBlur={handleSave} autoFocus />
                    ) : (
                      <p className="text-[#969696] text-[14px]" onClick={() => handleEdit("experience")}>{formData.experience}</p>
                    )}
                </div>
                <div className="col-span-12 lg:col-span-6 text-white min-h-[150px]">
                    <label className="border-b-2 pb-2 mb-3 border-[#000000] block mb-1 text-[#000000] text-[20px] font-medium">Key Achievements</label>
                    {editingField === "achievements" ? (
                      <Textarea className="bg-transparent text-[#969696] border-x-0 border-t-0 !rounded-[0px] border-b" value={formData.achievements} onChange={handleChange} onBlur={handleSave} autoFocus />
                    ) : (
                      <p className="text-[#969696] text-[14px]" onClick={() => handleEdit("achievements")}>{formData.achievements}</p>
                    )}
                </div>
            </div>
        </div>
        <div className="bg-[#FAFBFD] p-6 space-y-1">
            <div className="flex items-center justify-center px-2 text-[13px] relative text-[#000000]">
                <span className="bg-[#FAFBFD] px-3 z-[1]">Resume recruiters</span>
                <span className="border border-[#CDCDCD] h-[1px] w-full absolute"></span>
            </div>
            <div className="block text-center lg:flex items-center justify-center">
                <Link href="/" className="px-2 text-[12px] text-[#5C5959] hover:text-[#6144A5] inline-block">Resume Example</Link>
                <Link href="/" className="px-2 text-[12px] text-[#5C5959] hover:text-[#6144A5] inline-block">Terms</Link>
                <Link href="/" className="px-2 text-[12px] text-[#5C5959] hover:text-[#6144A5] inline-block">Privacy</Link>
                <Link href="/" className="px-2 text-[12px] text-[#5C5959] hover:text-[#6144A5] inline-block">Blogs</Link>
                <Link href="/" className="px-2 text-[12px] text-[#5C5959] hover:text-[#6144A5] inline-block">help@talentzix.com</Link>
                <Link href="/" className="px-2 text-[12px] text-[#5C5959] hover:text-[#6144A5] inline-block">Logout</Link>
            </div>
            <div className="flex items-center justify-center px-2 text-[12px] text-[#5C5959]">
                2025 Talentzix. All rights reserved
            </div>
            <div className="flex items-center justify-center leading-tight text-center px-2 text-[12px] text-[#B0A6A6]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
        </div>
    </div>
  );
}
export default EditableResume;