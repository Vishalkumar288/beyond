import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Linksera from "@/assets/images/vid.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import { useState } from "react";
import WebsiteDetail from "../components/WebsiteDetail";
import CreateOffer from "../components/CreateOffer";

export type FormValues = {
  username: string;
  email: string;
};

const schema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: yup.string().required("Email is required").email("Enter a valid email")
});

const AddWebsite = () => {
  const [hasConsented, setHasConsented] = useState<Boolean>(false);
  const [accordionValue, setAccordionValue] = useState<string | undefined>(
    undefined
  );
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      email: ""
    },
    shouldFocusError: false
  });

  const { control } = form;

  // const onSubmit = (data: FormValues) => {
  //   console.log("Form submitted:", data);
  // };

  // const onError = (errors: any) => {
  //   console.log("Validation errors:", errors);
  // };

  return (
    <Form {...form}>
      <div className="flex flex-col px-[64px] py-[12px] gap-12">
        <div className="mb-[16px] ">
          <h2 className="font-[600] text-[32px] leading-[40px] pl-3">
            {"Add a wesbite"}
          </h2>
        </div>
        <div className="flex gap-8 justify-between items-center">
          <div className="flex flex-col max-w-[400px] gap-2">
            <h3 className="font-[600] text-[24px] leading-[40px]">
              {"Learn how to get best out of linksera"}
            </h3>
            <ul className="ml-6 list-disc [&>li]:mt-2 text-[#0F0C1B99] text-[14px]">
              <li>{"How to add your website to the marketplace"}</li>
              <li>{"Setting pricing and niche/category filters"}</li>
              <li>{"Uploading sample articles or guidelines"}</li>
              <li>{"Editing or updating your website listing anytime"}</li>
              <li>{"Tips to make your listing stand out to buyers"}</li>
            </ul>
          </div>
          <img
            src={Linksera}
            alt="linksera"
            loading="lazy"
            className="h-[321px] w-[628px]"
          />
        </div>
        <Accordion
          type="single"
          collapsible
          value={accordionValue}
          onValueChange={setAccordionValue}
          className="border border-[#EAEAEA] rounded-md px-[24px] py-[12px]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center w-full ">
              <div className="flex items-center justify-between gap-4 flex-1">
                <p className="font-[400] font-[inter] text-[14px]">
                  Hey, Accept Preconditions before you start the listing!
                </p>
                {accordionValue !== "item-1" &&
                  (hasConsented ? (
                    <Button
                      variant={"secondary"}
                      className="bg-accepted-primary text-accepted-foreground shadow-xs rounded-[24px] h-[30px]"
                    >
                      <Check color="#34C759" />
                      Accepted
                    </Button>
                  ) : (
                    <Button
                      variant={"secondary"}
                      className="bg-pending-primary text-pending-foreground shadow-xs rounded-[24px] h-[30px]"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF9500]" />
                        Pending
                      </div>
                    </Button>
                  ))}
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4">
              <p className="font-[400] font-[inter] text-[14px] text-[#0F0C1B99]">
                Before you can proceed with your listing, please make sure to
                review all required preconditions. Accepting these is mandatory
                to continue. It ensures your submission meets our
                platformstandards and avoids delays. Listings that don't meet
                these terms may be rejected. Take a moment to go through them
                carefully before moving ahead. Once accepted, you'll be able to
                start listing right away.
              </p>
              {hasConsented ? (
                <Button
                  variant={"secondary"}
                  className="bg-accepted-primary text-accepted-foreground shadow-xs rounded-[24px] h-[30px] w-[107px]"
                >
                  <Check color="#34C759" />
                  {"Accepted"}
                </Button>
              ) : (
                <Button
                  className="h-[36px] w-[136px]"
                  onClick={() => setHasConsented(true)}
                >
                  {"Accept"}
                </Button>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <WebsiteDetail control={control} />
        <CreateOffer control={control} />
      </div>
    </Form>
  );
};

export default AddWebsite;
