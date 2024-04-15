"use client"

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { spawn } from "child_process";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
interface Itextarea {
  name: string;
  cols?: number;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  className?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormTextArea = ({
  name,
  cols,
  value,
  className,
  id,
  placeholder,
  validation,
  label,
  required,
}: Itextarea) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {" "}
            <Label>{label}</Label>
            <FormControl>
              <Textarea
                cols={cols}
                className={className}
                placeholder={placeholder}
                {...field}
                value={value ? value : field.value}
              />
            </FormControl>
            <FormDescription className="text-red-500">
              {errorMessage}
            </FormDescription>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormTextArea;
