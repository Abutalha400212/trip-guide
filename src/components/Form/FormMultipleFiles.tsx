"use client"
/* eslint-disable @next/next/no-img-element */

import { ImagePlus } from "lucide-react";
import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";

interface IFileInput {
  name: string;
}

const FormMultipleFileInput = ({ name }: IFileInput) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [isDragging, setIsDragging] = useState(false);
  const [previewSrcs, setPreviewSrcs] = useState<string[]>([]);

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    displayPreviews(files);
    setValue(name, files);
  };

  const handleFileChange = (e: any) => {
    const files = e.target.files;
    displayPreviews(files);
    setValue(name, files);
  };

  const displayPreviews = (files: FileList) => {
    const newPreviewSrcs: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const reader: FileReader = new FileReader();
      const file = files[i];
      reader.onload = () => {
        newPreviewSrcs.push(reader.result as string);
        if (newPreviewSrcs.length === files.length) {
          setPreviewSrcs(newPreviewSrcs);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div
            className={` relative border-2  border-dashed rounded-lg p-6 ${
              isDragging ? "border-indigo-600" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 z-50"
              onChange={handleFileChange}
              multiple // Allow multiple files to be selected
            />

            <div className={`text-center `}>
              <ImagePlus className="mx-auto h-12 w-12 text-gray-700 dark:text-gray-200" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-200">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer"
                >
                  <span>Drag and drop</span>
                  <span className="text-indigo-600"> or browse</span>
                  <span> to upload</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    multiple
                  />
                </label>
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
            {previewSrcs.length > 0 ? (
              <div className="flex flex-1 flex-wrap gap-x-2">
                {previewSrcs.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    className="max-h-40 "
                    alt={`Preview ${index}`}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-1 flex-wrap my-20">
                <div className="h-full w-full text-center flex flex-col items-center justify-center ">
                  <img
                    className="mx-auto w-32"
                    src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                    alt="no data"
                  />
                  <span className="text-small text-gray-500">
                    No files selected
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      />
    </>
  );
};

export default FormMultipleFileInput;
