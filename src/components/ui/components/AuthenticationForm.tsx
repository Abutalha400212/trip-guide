"use client"
import {
  DialogContent,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";
import RegisterForm from "./authentication/Register";
import LoginForm from "./authentication/Login";

export function AuthenticationModalContent({setIsDialogOpen}:any) {
  return (
    <DialogContent className="sm:max-w-md ">
      <DialogHeader>
        <DialogTitle>Authentication</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="sign_up" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign_up">Sign UP</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="sign_up">
          <RegisterForm setIsDialogOpen={setIsDialogOpen}/>
        </TabsContent>
        <TabsContent value="login">
          <LoginForm setIsDialogOpen={setIsDialogOpen}/>
        </TabsContent>
      </Tabs>
   
    </DialogContent>
  );
}
