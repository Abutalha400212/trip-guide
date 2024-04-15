"use client"
/* eslint-disable react/no-unescaped-entities */

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
import { Separator } from "../separator";
import Link from "next/link";

export function ModalContent() {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Reserve Now & Pay Later</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          We'll reserve your spot today, and you can cancel up to two days*
          before your experience without making a payment. Secure your spot with
          ease, stay flexible, and never miss out.
        </DialogDescription>

        <DialogTitle >How it works</DialogTitle>
        <ul className=" space-y-1 list-disc ml-6">
          <li className="">
        
            <DialogDescription>
              <p className="text-md font-semibold">Find your experience</p>
              <small className="leading-3 ">
                Choose the experience you want knowing you can secure your spot
                without being locked in.
              </small>
            </DialogDescription>
          </li>
          <li className="">
         
            <DialogDescription>
              <p className="text-md font-semibold">Make a reservation</p>
              <small>
                Reserve now and pay later to secure your spot, commitment-free.
              </small>
            </DialogDescription>
          </li>
          <li className="">
            
            <DialogDescription>
              <p className="text-md font-semibold">Choose when to pay</p>
              <small className="leading-3">
                Come back to pay once your plans are set, or let auto-pay kick
                in two days* before your experience.
              </small>
            </DialogDescription>
          </li>
          <li className="">
          
            <DialogDescription>
              <p className="text-md font-semibold">Enjoy your experience</p>
              <small>Now you're all set! Have a great time.</small>
            </DialogDescription>
          </li>
        </ul>
     

      <div className="flex h-6  items-center justify-center gap-x-2  text-xs ">
        <Link className="hover:underline" href={"/faq"}>
          Frequently Asked Questions
        </Link>
        <Separator orientation="vertical" />

        <Link className="hover:underline" href={"/term_condition"}>
          Terms & Conditions
        </Link>
      </div>
    </DialogContent>
  );
}
