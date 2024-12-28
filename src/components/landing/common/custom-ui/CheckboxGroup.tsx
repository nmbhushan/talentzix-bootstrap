import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CheckboxGroup = ({ items, label, onToggle }: any) => {
  return (
    <div className="col-span-12">
      <Label className="mb-4 block text-primary">{label}</Label>
      <div className="flex items-start gap-5 flex-nowrap">
        {items.map((item: any) => (
          <div key={item.id} className="flex items-start space-x-2">
            <Checkbox
              id={`checkbox-${item.id}`}
              checked={item.checked}
              onCheckedChange={() => onToggle(item.id)}
            />
            <Label htmlFor={`checkbox-${item.id}`} className="font-normal mb-0">
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
