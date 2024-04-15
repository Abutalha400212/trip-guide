"use client"

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormDescription, FormItem, FormLabel } from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
interface ISelect {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  items: string[];
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormSelect = ({
  name,
  type,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
  items,
}: ISelect) => {
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
            <Label htmlFor={label}>{label}</Label>

            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger id={label}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent position="popper">
                {items?.map((item, i) => (
                  <SelectItem key={i} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormDescription className="text-red-500">
              {errorMessage}
            </FormDescription>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormSelect;
