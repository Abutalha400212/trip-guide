/* eslint-disable @next/next/no-img-element */
"use client"
import { ImagePlus } from "lucide-react";
import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";

interface IFileInput {
  name: string;
}

const FormFileInput = ({ name }: IFileInput) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [isDragging, setIsDragging] = useState(false);
  const [previewSrc, setPreviewSrc] = useState("");

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
    const file = e.dataTransfer.files[0];
    displayPreview(file);
    setValue(name, file);
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    displayPreview(file);
    setValue(name, file);
  };

  const displayPreview = (file: any) => {
    const reader: { result: any; onload: any } = new FileReader();
    if (file) {
      setPreviewSrc(URL.createObjectURL(file));
    }
    if (reader) {
      reader.onload = function () {
        URL.revokeObjectURL(reader.result); // free memory
      };
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
            />
            <img
              src={previewSrc}
              className={`mt-4 mx-auto max-h-40 rounded-full ${
                previewSrc ? "" : "hidden"
              }`}
              alt="Preview"
            />
            <div className={`text-center ${previewSrc ? "hidden" : ""}`}>
              <ImagePlus className="mx-auto h-12 w-12 text-gray-700 dark:text-gray-200" />
              {/* <img src="https://www.svgrepo.com/show/357902/image-upload.svg" alt="" /> */}
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
                  />
                </label>
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default FormFileInput;
