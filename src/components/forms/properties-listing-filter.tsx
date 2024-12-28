import { Checkbox } from "@/components/ui/checkbox"
import RangeSelector from "../landing/properties-listing/generic-range-selector";
import { Label } from "@/components/ui/label"
import { useState } from "react";
import CheckboxGroup from "../landing/common/custom-ui/CheckboxGroup";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "../ui/button";


const PropertiesListingFilter = () => {
    const [furnishItems, setFurnishItems] = useState([
        { id: 'furn1', label: "Not furnished", checked: false },
        { id: 'furn2', label: "Semi-furnished", checked: false },
        { id: 'furn3', label: "Fully furnished", checked: false },
    ]);
    const [amenitiesItems, setAmenitiesItems] = useState([
        { id: 'amen1', label: "Air condition", checked: false },
        { id: 'amen2', label: "Gym", checked: false },
        { id: 'amen3', label: "Refrigerator", checked: false },
        { id: 'amen4', label: "Doorman", checked: false },
    ]);
    const handleToggle = (id: any, group: 'furnish' | 'amenities') => {
        if (group === 'furnish') {
            setFurnishItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, checked: !item.checked } : item
                )
            );
        } else if (group === 'amenities') {
            setAmenitiesItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, checked: !item.checked } : item
                )
            );
        }
    };
    return (
        <>
            <form className="">
                <div className="grid gap-4 md:grid-cols-12 lg:grid-cols-12">
                    <div className="col-span-6">
                        <RangeSelector min={0} max={1000000} step={1000} label="Price Range ( AED)" formatValue={(value) => `${value.toLocaleString()}`}
                            onChange={(range) => console.log("Selected range:", range)}
                        />
                    </div>
                    <div className="col-span-6">
                        <RangeSelector min={0} max={100000} step={100} label="Area (SQFT)" formatValue={(value) => `${value.toLocaleString()}`}
                            onChange={(range) => console.log("Selected range:", range)}
                        />
                    </div>
                    <div className="col-span-12"><hr /></div>
                    <CheckboxGroup
                        items={furnishItems}
                        label="Furnish type"
                        onToggle={(id: number) => handleToggle(id, 'furnish')}
                    />
                    <div className="col-span-12"><hr /></div>
                    <CheckboxGroup
                        items={amenitiesItems}
                        label="Amenities"
                        onToggle={(id: number) => handleToggle(id, 'amenities')}
                    />
                    <div className="col-span-12"><hr /></div>
                    <div className="col-span-12">
                        <Label htmlFor='' className="font-normal mb-4 block text-primary"> Enter Keyword </Label>
                        <div className="relative">
                            <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Key word: e.g beach view, Chiller free" className="pl-8" />
                        </div>
                    </div>
                    <div className="col-span-12"><hr /></div>
                    <div className="col-span-12">
                        <Label htmlFor='' className="font-normal mb-4 block text-primary"> Virtual Viewings </Label>
                        <RadioGroup defaultValue="option-one" className="flex items-start gap-5  flex-nowrap">
                            <div className="flex items-start space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Any</Label>
                            </div>
                            <div className="flex items-start space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">360 View</Label>
                            </div>
                            <div className="flex items-start space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Video Tour</Label>
                            </div>
                        </RadioGroup>
                    </div>

                </div>
                <div className="flex justify-between mt-4">
                    <Button variant="outline" className="min-w-[120px]">Reset</Button>
                    <Button className="min-w-[120px]">Show Results</Button>
                </div>
            </form>
        </>
    );
}

export default PropertiesListingFilter;