"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DownloadIcon } from "@radix-ui/react-icons"
import { CloudDownloadIcon, FileIcon, FileTextIcon } from "lucide-react"
import Image from "next/image"
import { ChangeEvent, ReactNode, useRef, useState } from "react"

export function DynamicDialog({ children, title }: { children: ReactNode, title: any[] }) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  let allowedType = "both";

  const handleClickUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const filteredFiles = files.filter((file) => {
        if (allowedType === "image") {
          return file.type.startsWith("image/")
        } if (allowedType === "file") {
          return !file.type.startsWith("image/")
        }
        return true
      })
      setSelectedFiles(filteredFiles);
      const previews = filteredFiles.map((file) => file.type.startsWith("image/") ? URL.createObjectURL(file) : "")
      setPreviewUrls(previews)
    }
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  return (
    <div className="w-40 bg-transparent">

      <Dialog>
        <DialogTrigger asChild>
          <p className="text-md p-1 cursor-pointer">import</p>
        </DialogTrigger>
        <DialogContent className="max-w-screen-md">
          <div className="m-2">
            <DialogHeader>
              <DialogTitle>import {title[0]}</DialogTitle>
              <DialogDescription className="w-full">
                <Button className="mt-2 w-52">
                  <DownloadIcon />
                  Download
                </Button>

              </DialogDescription>
              <ScrollArea className="h-[calc(100vh-220px)] rounded-xl bg-white p-4 md:h-[calc(100vh-240px)]">
                <div >
                  <ol className="mt-2 list-decimal pl-[18px] text-[15px]">
                    <li>
                      Your CSV data should be in the format below. The first line of your
                      CSV file should be the column headers as in the table example. Also
                      make sure that your file is <b>UTF-8</b> to avoid unnecessary&nbsp;
                      <b>encoding problems.</b>
                    </li>
                    <li>
                      If the column <b>you are trying to import is date</b> make sure that
                      is formatted in format Y-m-d (2020-09-09).
                    </li>
                    <li>Duplicate email rows won&apos;t be imported.</li>
                  </ol>
                  <div className="mt-4">
                    <p className="mb-2 text-[#556b82] ">Choose CSV File</p>
                    <Input type="file" className="hidden" ref={inputRef}
                      onChange={handleClickUpload} multiple={true} accept="image/*" />

                    <div
                      className="flex h-[100px] items-center cursor-pointer justify-center rounded-md border border-[#cdcdcd]"
                      onClick={handleClick}
                    >
                      <div>
                        <CloudDownloadIcon className="mx-auto h-[50px] w-[50px]  text-[#cecccc] opacity-50" />
                        <span className="text-[17px] text-[#cecccc] opacity-50">
                          Drag and drop a file here or click
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-[12px] text-[#556b82]">
                      (.csv, .xlsx formats supported)
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {
                      selectedFiles.map((file, index) => (
                        <div className="relative" key={index}>{
                          file.type.startsWith('image/') && previewUrls[index] ?
                            <Dialog>
                              <DialogTrigger asChild>
                                <div className="aspect-square relative overflow-hidden rounded-lg cursor-pointer">
                                  <Image key={index} src={previewUrls[index]} alt={`preview ${index + 1}`} width={150} height={150}
                                    className=" object-cover transition-transform hover:scale-110" />
                                </div>
                              </DialogTrigger>
                              <DialogContent className="w-auto">
                                <DialogHeader>
                                  <DialogTitle></DialogTitle>
                                </DialogHeader>
                                <div className="aspect-square relative">
                                  <Image key={index} src={previewUrls[index]} alt={`preview ${index + 1}`} width={150} height={150} className="object-contain flex justify-center items-center m-auto" />
                                </div>
                              </DialogContent>
                            </Dialog>
                            :
                            <div>
                              {
                                <div className="border rounded-lg p-4 flex items-center space-x-4">
                                  {file.name.split('.').slice(-1).join('.') === 'pdf' ? <FileTextIcon className="h-8 w-8 text-red-500" /> : <FileIcon className="h-8 w-8 text-blue-500" />}
                                  <div className="flex-1">
                                    <h3 className="font-semibold truncate">{file.name}</h3>
                                    <p className="text-sm text-gray-500">{file.name.split('.').slice(-1).join('.').toUpperCase()}</p>
                                  </div>
                                </div>
                              }
                            </div>
                        }
                        </div>
                      ))
                    }
                  </div>

                </div>
              </ScrollArea>
            </DialogHeader>
          </div>
          <DialogFooter className="mt-0">
            <Button variant='ghost' className="border-2 border-zinc-300 w-32">Cancel</Button>
            <Button className="bg-black w-32 text-white text-sm">Submit</Button>
          </DialogFooter>
        </DialogContent>

      </Dialog>
    </div>
  )
}
