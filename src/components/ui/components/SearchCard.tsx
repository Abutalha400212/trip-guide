"use client"
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/Form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import { useRouter } from "next/navigation";

export function SearchCard() {
  const router = useRouter();
  const onSubmit = (data: any) => {
    if (data?.search) {
      router.replace(`/search?searchTerm=${data?.search}`);
    }
  };
  return (
    <Form submitHandler={onSubmit}>
      <Card className="md:w-[450px] hidden md:block shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-lg text-gray-800 tracking-tight">
            Change your search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <FormInput placeholder="Search for a place" name="search" />

            <FormDatePicker name="date" placeholder="Name of your project" />
          </div>
        </CardContent>
        <CardFooter className="flex-col ">
          <Button type="submit" className="w-full">
            Search
          </Button>
        </CardFooter>
      </Card>
    </Form>
  );
}
