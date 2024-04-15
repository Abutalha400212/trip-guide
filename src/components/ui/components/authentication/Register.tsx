"use client"
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../card";
import FormInput from "@/components/Form/FormInput";
import { Button } from "../../button";
import Form from "@/components/Form/Form";
import { useRouter } from "next/navigation";
import { useToast } from "../../use-toast";
import { storeUserInfo } from "@/services/auth.service";
import FormFileInput from "@/components/Form/FormFileInput";
import { useSignUpMutation } from "@/redux/service/authApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "@/schema/auth.schema";

export default function RegisterForm({ setIsDialogOpen }: any) {
  const router = useRouter();
  const { toast } = useToast();
  const [createUser] = useSignUpMutation();
  const handleRegister = async (payload: any) => {
    const { file, confirm_password, ...data } = payload;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("data", JSON.stringify(data));
    try {
      const res = await createUser(formData).unwrap();
      if (res?.accessToken) {
        router.replace("/");
        toast({
          className: "bg-purple-500 text-white",
          title: "User Created successfully!",
        });
      }
      storeUserInfo({ accessToken: res?.accessToken });
      setIsDialogOpen(false);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>SIGN UP</CardTitle>
        <CardDescription>
          Don't have a account, fill the form.....
        </CardDescription>
      </CardHeader>
      <Form submitHandler={handleRegister} resolver={yupResolver(SignUpSchema)}>
        <CardContent className="space-y-2">
          <FormInput
            className=""
            label="Name"
            name="name"
            placeholder="Enter your name"
          />
          <FormInput
            label="Email"
            name="email"
            placeholder="Enter your email"
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
          />
          <FormInput
            type="password"
            label="Confirm Password"
            name="confirm_password"
            placeholder="Enter your password"
          />
          <FormFileInput name="file" />
        </CardContent>

        <CardFooter>
          <Button>Register</Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
