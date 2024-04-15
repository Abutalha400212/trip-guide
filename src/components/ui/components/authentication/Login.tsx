"use client"
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
import { useLoginMutation } from "@/redux/service/authApi";
import { useRouter } from "next/navigation";
import { useToast } from "../../use-toast";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "@/schema/auth.schema";
export default function LoginForm({setIsDialogOpen}:any) {
  const router = useRouter();
  const { toast } = useToast();
  const [loginUser] = useLoginMutation();
  const handleLogin = async (payload: any) => {
    try {
      const res = await loginUser({ ...payload }).unwrap();

      if (res?.accessToken) {
        router.replace("/");
        toast({
          className: "bg-purple-500 text-white",
          title: "User Logged In successfully!",
        });
      }
      storeUserInfo({ accessToken: res?.accessToken });
      setIsDialogOpen(false)
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: `${err?.message}`,
      });
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>LOGIN</CardTitle>
        <CardDescription>
          Already have an account, fill the form.....
        </CardDescription>
      </CardHeader>
      <Form submitHandler={handleLogin} resolver={yupResolver(SignInSchema)}>
        <CardContent className="space-y-2">
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
        </CardContent>

        <CardFooter>
          <Button>Login</Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
