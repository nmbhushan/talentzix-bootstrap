"use client"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { DownloadIcon, PlusIcon } from "lucide-react"
import React from "react"
import { DynamicDialog } from "@/components/custom-ui/dialogue-section/DynamicDialog"
import { useParams } from "next/navigation"


const DynamicHeader = ({ data }: { data: any[] }) => {
    const { props: routeParams } = useParams<any>()
    const actions = (row: any) => (
        row.map((action: { type: string, title: string, icon?: string, actionType?: "download" | "link", url?: string, items?: [typeof action] }, index: any) => {
            switch (action.type) {
                case 'button':
                    return (
                        <Button
                            key={index}
                            className={index < row.length - 1 && row[index + 1].type === "mini-dropdown" ? "ms-3 rounded-e-none" : "ms-3"}
                        >
                            <>
                                {/* icon to be used */}
                                {/* {action.title ?? `<${action.icon}/>`} */}
                                {action.title === "Download" ? <DownloadIcon /> : <PlusIcon />}
                                {action.title ?? ""}
                            </>
                        </Button>
                    );
                case 'mini-dropdown':
                    return (
                        <div key={index} className="ms-0">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button className="rounded-s-none" type="button">

                                        {<ChevronDownIcon />}
                                    </Button>
                                </DropdownMenuTrigger>
                                {
                                    action?.items?.map((item, i) => {
                                        return <DropdownMenuContent align="end" key={i}>
                                            <DynamicDialog title={routeParams}>
                                                <DropdownMenuItem>
                                                    {item?.title!}
                                                </DropdownMenuItem>
                                            </DynamicDialog>
                                        </DropdownMenuContent>
                                    })
                                }

                            </DropdownMenu>
                        </div>
                    );
                default:
                    return null;
            }
        })
    )

    return (
        <div className="flex divide-x">
            {
                actions(data)
            }
        </div>
    )
}

export default DynamicHeader