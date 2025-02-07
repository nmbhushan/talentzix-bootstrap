import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LayoutTemplate, Download, Share2, RefreshCw, NotepadTextDashed, PenTool, CircleCheckBig, FileCheck2, Brain, CornerUpLeft, CornerUpRight, Pencil } from 'lucide-react';

export function EditorMenu() {
  const [formData, setFormData] = useState({
      heading: "Resume Template 1",
    });
    const [editingField, setEditingField] = useState<any>(null);

    const handleEdit = (field:any) => setEditingField(field);
    const handleChange = (e:any) => setFormData({ ...formData, [editingField]: e.target.value });
    const handleSave = () => setEditingField(null);

  return (
    <div className="bg-white rounded-[12px] shadow border border-[#DDDDDD] h-full">
        <div className="px-3 pb-5 border-b border-[#E7E7E7] space-y-4 flex items-center justify-between">
            <div className="flex items-center pt-4">
                {editingField === "heading" ? (
                    <Input className="bg-transparent !rounded-[0px] border-0" value={formData.heading} onChange={handleChange} onBlur={handleSave} autoFocus />
                  ) : (
                    <span className="text-[14px] text-[#000112] font-medium" onClick={() => handleEdit("heading")}>{formData.heading}</span>
                )}
                <Pencil className="text-[#B8B6B6] h-[16px]"/>
            </div>
            <div className="flex items-center">
                <Link href="/" className="text-[#6144A5] hover:text-[#000000]"><CornerUpLeft/></Link>
                <Link href="/" className="text-[#6144A5] hover:text-[#000000]"><CornerUpRight/></Link>
            </div>
        </div>
        <div className="px-3 py-5 border-b border-[#E7E7E7] space-y-4">
            <Link href="/" className="text-[14px] text-[#000112] hover:text-[#6144A5] flex items-center">
                <LayoutTemplate className="h-[16px]" />
                <span>Add Section</span>
            </Link>
            <Link href="/" className="text-[14px] text-[#000112] hover:text-[#6144A5] flex items-center">
                <RefreshCw className="h-[16px]" />
                <span>Rearrange</span>
            </Link>
            <Link href="/" className="text-[14px] text-[#000112] hover:text-[#6144A5] flex items-center">
                <NotepadTextDashed className="h-[16px]" />
                <span>Template</span>
            </Link>
            <Link href="/" className="text-[14px] text-[#000112] hover:text-[#6144A5] flex items-center">
                <PenTool className="h-[16px]" />
                <span>Design & Font</span>
            </Link>
        </div>
        <div className="px-3 py-5 border-b border-[#E7E7E7] space-y-4">
            <Link href="/" className="text-[14px] text-[#000112] hover:text-[#6144A5] flex items-center">
                <CircleCheckBig className="h-[16px]" />
                <span>Improve Text</span>
            </Link>
            <Link href="/" className="text-[14px] text-[#000112] hover:text-[#6144A5] flex items-center">
                <FileCheck2 className="h-[16px]" />
                <span>Check</span>
            </Link>
            <Link href="/" className="text-[14px] text-[#000112] hover:text-[#6144A5] flex items-center">
                <Brain className="h-[16px]" />
                <span>AI Assistant</span>
            </Link>
        </div>
        <div className="px-3 pt-5 pb-5 md:pb-0 space-y-4">
            <Link href="/" className="text-[14px] text-[#000112] hover:text-[#6144A5] flex items-center">
                <Download className="h-[16px]" />
                <span>Download</span>
            </Link>
            <Link href="/" className="text-[14px] text-[#000112] hover:text-[#6144A5] flex items-center">
                <Share2 className="h-[16px]" />
                <span>Share</span>
            </Link>
            <Link href="/" className="text-[14px] text-[#000112] hover:text-[#6144A5] flex items-center">
                <LayoutTemplate className="h-[16px]" />
                <span>History</span>
            </Link>
        </div>
    </div>
  );
}
export default EditorMenu;