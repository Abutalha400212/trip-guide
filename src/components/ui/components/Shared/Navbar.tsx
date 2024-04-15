"use client";

import * as React from "react";
import Link from "next/link";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
} from "lucide-react";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/Form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger } from "../../dialog";
import { Button } from "../../button";
import { AuthenticationModalContent } from "../AuthenticationForm";
import { useGetUserByEmailQuery } from "@/redux/service/authApi";
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { Popover, PopoverContent, PopoverTrigger } from "../../popover";
import { authKey } from "@/constants/storageKey";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../dropdown-menu";
import { getFromLocalStorage } from "@/utils/local-storage";

export default function Navbar() {
  const [state, setState] = React.useState(false);
  const router = useRouter();
  const menus = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
  ];
  const loggedIn = isLoggedIn();
  const [isDialogOpen, setIsDialogOpen] = React.useState(!loggedIn);
  const { data } = useGetUserByEmailQuery(undefined);
  const handleLogout = () => {
    if (getFromLocalStorage(authKey)) removeUserInfo(authKey);
    router.replace("/");
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AuthenticationModalContent setIsDialogOpen={setIsDialogOpen} />
      <nav className="bg-white w-full border-b md:border-0 ">
        <div className="items-center px-4 max-w-screen-2xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image
                className="object-cover"
                src={"/logo.png"}
                alt=""
                width={100}
                height={100}
              />
              {/* <h1 className="text-3xl font-bold text-purple-600">Logo</h1> */}
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                <Menu />
              </button>
            </div>
          </div>
          <div
            className={`flex-1  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menus.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
              {data?.email ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar>
                      <AvatarImage src={data?.image_url} alt="@shadcn" />
                      <AvatarFallback>{data?.name}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <Link className="" href={"/booked_place"}>
                          <span>Booked place</span>{" "}
                        </Link>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <DialogTrigger asChild>
                  <Button variant={"secondary"}>Sign Up</Button>
                </DialogTrigger>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Dialog>
  );
}
