"use client"

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { spawn } from "child_process";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  className?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormInput = ({
  name,
  type,
  value,
  className,
  id,
  placeholder,
  validation,
  label,
  required,
}: IInput) => {
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
            {label && (
              <>
                <Label>{label}</Label> <br />
              </>
            )}
            <FormControl>
              <Input
                type={type}
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

export default FormInput;
