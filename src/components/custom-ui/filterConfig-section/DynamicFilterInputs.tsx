import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TListingConfigFilters } from "@/types/dynamicListingPageTypes"
import InputDropDownElement from "../inputDropdownElement/InputDropDownElement"

const DynamicFilterInputs = ({ filtersConfig }: { filtersConfig: TListingConfigFilters }) => {
  const { fields, resetBtn, resetBtnText, searchBtn, searchBtnText, showFilters } = filtersConfig;

  return (
    <Card className="px-2 py-1 mb-4">
      <div className="flex items-center flex-wrap">
        {
          fields?.map((element: { label: string, name: string, placeholder: string, type: string, validations: {} }, index: number) => {
            return (
              <div key={index} className="m-3">
                {element.type === 'text' ? (
                  <>
                    <label htmlFor={element.name}>{element.label}</label>
                    <Input
                      type="text"
                      id={element.name}
                      name={element.name}
                      placeholder={element.placeholder}
                      //  value={filterValues[element.name] || ''}
                      //  onChange={handleChange}
                      className={`w-[200px] border-2 border-[#151616] border-thin   focus-visible:ring-0 focus:ring-0 focus:outline-none`}

                    />
                  </>

                ) : element.type === 'search-dropdown' ? (
                  <div className="flex flex-col">
                    <Label className="mb-1 font-thin">{element.label}</Label>
                    <InputDropDownElement frameworks={fields} />
                  </div>
                ) : null}
              </div>
            )
          })
        }
        <div className="flex items-center ml-auto mr-[8px] mt-5">
          {resetBtn && (
            <Button type="button" className="m-2  border-black w-32" variant="outline">
              {resetBtnText}
            </Button>
          )}
          {searchBtn && (
            <Button type="button" className="w-32 font-thin text-md">
              {searchBtnText}
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
  // return "data"

}

export default DynamicFilterInputs