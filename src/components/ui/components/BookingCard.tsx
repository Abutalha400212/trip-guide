"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormInput from "@/components/Form/FormInput";
import Form from "@/components/Form/Form";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormSelect from "@/components/Form/FormSelect";
import { FormDescription, FormLabel } from "../form";
import Link from "next/link";
import { AlertCircle, CheckCheck, Terminal } from "lucide-react";
import { useToast } from "../use-toast";
import { useGetUserByEmailQuery } from "@/redux/service/authApi";
import { useInitiateBookingMutation } from "@/redux/service/bookingApi";
import { Dialog, DialogContent } from "../dialog";
import { Alert, AlertDescription, AlertTitle } from "../alert";

export function BookingCard({ placeId }: { placeId: any }) {
  const [confirmation, setConfirmation] = React.useState(false);
  const [initiateBooking] = useInitiateBookingMutation();
  const {toast} = useToast()
  const { data: userInfo } = useGetUserByEmailQuery(undefined);
  const onSubmit = async (data: any) => {
    try {
      const res = await initiateBooking({
        ...data,
        email: userInfo?.email,
        name: userInfo?.name,
        place:placeId
      }).unwrap();
      if (!!res) {
        setConfirmation(true);
      }

    } catch (err: any) {
      toast({
        variant:"destructive",
        title:`${err?.message}`
        
      })
    }
  };
  return (
    <Dialog open={confirmation} onOpenChange={setConfirmation}>
      <Form submitHandler={onSubmit}>
        <Card className="md:w-[450px] shadow-md">
          <CardHeader>
            <CardTitle>
              <Button disabled>Likely to Sell Out</Button>
            </CardTitle>
            <CardTitle>From $23.14</CardTitle>
            <CardDescription>Lowest Price Guarantee</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <FormDatePicker name="date" placeholder="Name of your project" />
              <FormSelect
                placeholder="Select time"
                name="time_slot"
                items={["4.00-5.00", "3.00-4.00", "6.00-7.00", "8.00-10.00"]}
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col ">
            <Button type="submit" className="w-full">
              Check Availability
            </Button>
            <ul className="space-y-1 leading-none my-2 shadow-sm p-2 bg-gray-100 rounded-sm ">
              <li className="flex gap-x-2">
                <CheckCheck className="h-6 w-6 text-gray-500" />
                <FormDescription>
                  <Link
                    className="underline font-semibold"
                    href="/examples/forms"
                  >
                    Free cancellation
                  </Link>
                  - up to 24 hours before the experience starts (local time).
                </FormDescription>
              </li>
              <li className="flex gap-x-2">
                <CheckCheck className="h-6 w-6 text-gray-500" />
                <FormDescription>
                  <Link
                    className="underline font-semibold"
                    href="/examples/forms"
                  >
                    Reserve Now and Pay Later
                  </Link>
                  - Secure your spot while staying flexible.
                </FormDescription>
              </li>
            </ul>
          </CardFooter>
        </Card>
      </Form>
      <DialogContent className="sm:max-w-[425px] p-0 m-0 border-none">
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle className="text-green-800 text-xl">
            Contgratulations!
          </AlertTitle>
          <AlertDescription>
            Thanks for booking. Please give us feedback about our service.
          </AlertDescription>
        </Alert>{" "}
        :
      </DialogContent>
    </Dialog>
  );
}
