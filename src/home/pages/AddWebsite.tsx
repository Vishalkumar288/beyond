import { useForm, type Resolver } from "react-hook-form";
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
import { useEffect, useState } from "react";
import WebsiteDetail from "../components/WebsiteDetail";
import CreateOffer from "../components/CreateOffer";
import { formKeys } from "@/constants/formKeys";
import ArticleSpecification from "../components/ArticleSpecification";
import { storageKeys } from "@/constants/storageKeys";
import { useWebsiteFormStore } from "@/store/useWebsiteFormStore";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { appRoutes } from "@/constants/appRoutes";
import AlertDialogCustom from "@/shared/UiElements/AlertDialogCustom";
export type FormValues = {
  id?: string;
  hasConsented?: boolean;
  [formKeys.website]: string;
  [formKeys.primaryLang]: string;
  [formKeys.majorTraffic]: string;
  [formKeys.mainCategory]: string[];
  [formKeys.description]: string;
  [formKeys.owner]: string;
  [formKeys.guestPosting]: number;
  [formKeys.linkInsertion]: number;
  [formKeys.isSamePrice]: string;
  [formKeys.enterSamePrice]: string;
  [formKeys.gamblingGuestPost]: number;
  [formKeys.gamblingLinkInsert]: number;
  [formKeys.crptoGuestPost]: number;
  [formKeys.crptoLinkInsert]: number;
  [formKeys.adultGuestPost]: number;
  [formKeys.adultLinkInsert]: number;
  [formKeys.homePageLinkPrice]: number;
  [formKeys.offerGuidelines]: string;
  [formKeys.writingArticleIncluded]: string;
  [formKeys.noOfWords]: string;
  [formKeys.allowDoFollow]: string;
  [formKeys.typesOfLink]: string;
  [formKeys.taggingArticle]: string;
  [formKeys.noOfLinksAdvertise]: string;
  [formKeys.otherLinks]: string;
  [formKeys.otherContent]: string;
  [formKeys.wordMin]: string;
  [formKeys.wordMax]: string;
  [formKeys.linksMin]: number;
  [formKeys.linksMax]: number;
};

export const schema = yup.object({
  [formKeys.website]: yup
    .string()
    .required("Website is required")
    .url("Enter a valid URL"),

  [formKeys.primaryLang]: yup.string().required("Primary Language is required"),
  [formKeys.majorTraffic]: yup.string().required("Country is required"),
  [formKeys.mainCategory]: yup.array().of(yup.string()).optional(),

  [formKeys.description]: yup.string().required("Description is required"),
  [formKeys.offerGuidelines]: yup.string().required("Description is required"),

  [formKeys.guestPosting]: yup
    .number()
    .typeError("Guest Post Price must be a number")
    .min(0, "Price cannot be negative")
    .required("Guest Post Price is required"),

  [formKeys.linkInsertion]: yup
    .number()
    .typeError("Link Insertion Price must be a number")
    .min(0, "Price cannot be negative")
    .required("Link Insertion Price is required"),

  [formKeys.homePageLinkPrice]: yup
    .number()
    .typeError("Price must be a number")
    .min(0, "Price cannot be negative")
    .required("Price is required"),

  [formKeys.isSamePrice]: yup.string().optional(),

  [formKeys.enterSamePrice]: yup.string().when(formKeys.isSamePrice, {
    is: (val: string) => !!val,
    then: (schema) => schema.required("Enter same price is required"),
    otherwise: (schema) => schema.optional()
  }),

  [formKeys.gamblingGuestPost]: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .when(formKeys.isSamePrice, {
      is: (val: string) => !val,
      then: (schema) =>
        schema
          .typeError("Price must be a number")
          .min(0, "Price cannot be negative")
          .required("Required"),
      otherwise: (schema) => schema.optional()
    }),

  [formKeys.gamblingLinkInsert]: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .when(formKeys.isSamePrice, {
      is: (val: string) => !val,
      then: (schema) =>
        schema
          .typeError("Price must be a number")
          .min(0, "Price cannot be negative")
          .required("Required"),
      otherwise: (schema) => schema.optional()
    }),

  [formKeys.crptoGuestPost]: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .when(formKeys.isSamePrice, {
      is: (val: string) => !val,
      then: (schema) =>
        schema
          .typeError("Price must be a number")
          .min(0, "Price cannot be negative")
          .required("Required"),
      otherwise: (schema) => schema.optional()
    }),

  [formKeys.crptoLinkInsert]: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .when(formKeys.isSamePrice, {
      is: (val: string) => !val,
      then: (schema) =>
        schema
          .typeError("Price must be a number")
          .min(0, "Price cannot be negative")
          .required("Required"),
      otherwise: (schema) => schema.optional()
    }),

  [formKeys.adultGuestPost]: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .when(formKeys.isSamePrice, {
      is: (val: string) => !val,
      then: (schema) =>
        schema
          .typeError("Price must be a number")
          .min(0, "Price cannot be negative")
          .required("Required"),
      otherwise: (schema) => schema.optional()
    }),

  [formKeys.adultLinkInsert]: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .when(formKeys.isSamePrice, {
      is: (val: string) => !val,
      then: (schema) =>
        schema
          .typeError("Price must be a number")
          .min(0, "Price cannot be negative")
          .required("Required"),
      otherwise: (schema) => schema.optional()
    }),
  [formKeys.wordMin]: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .when(formKeys.noOfWords, {
      is: "2",
      then: (schema) => schema.required("Min Words required").min(0),
      otherwise: (schema) => schema.optional()
    }),
  [formKeys.wordMax]: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .when(formKeys.noOfWords, {
      is: "2",
      then: (schema) => schema.required("Max words required").min(0),
      otherwise: (schema) => schema.optional()
    }),
  [formKeys.linksMin]: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .when(formKeys.noOfLinksAdvertise, {
      is: "2",
      then: (schema) => schema.required("Min links required").min(0),
      otherwise: (schema) => schema.optional()
    }),

  [formKeys.linksMax]: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .when(formKeys.noOfLinksAdvertise, {
      is: "2",
      then: (schema) => schema.required("Max links required").min(0),
      otherwise: (schema) => schema.optional()
    })
});

type AddWebsiteProps = {
  initialValues?: FormValues;
};

const AddWebsite = ({ initialValues }: AddWebsiteProps) => {
  const [hasConsented, setHasConsented] = useState<Boolean>(false);
  const [hasConsentError, setHasConsentError] = useState<boolean>(false);
  const [accordionValue, setAccordionValue] = useState<string | undefined>(
    undefined
  );
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const navigate = useNavigate();

  const getStoredValues = (): Partial<FormValues> & {
    hasConsented?: boolean;
  } => {
    try {
      const stored = localStorage.getItem(storageKeys.LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (err) {
      console.error("Error parsing localStorage:", err);
      return {};
    }
  };

  const form = useForm<FormValues>({
    resolver: yupResolver(schema) as Resolver<FormValues>,
    defaultValues: {
      ...initialValues,
      [formKeys.website]: "",
      [formKeys.primaryLang]: "",
      [formKeys.majorTraffic]: "",
      [formKeys.mainCategory]: [],
      [formKeys.description]: "",
      [formKeys.owner]: "",
      [formKeys.guestPosting]: "",
      [formKeys.linkInsertion]: "",
      [formKeys.isSamePrice]: "",
      [formKeys.enterSamePrice]: "",
      [formKeys.gamblingGuestPost]: "",
      [formKeys.gamblingLinkInsert]: "",
      [formKeys.crptoGuestPost]: "",
      [formKeys.crptoLinkInsert]: "",
      [formKeys.adultGuestPost]: "",
      [formKeys.adultLinkInsert]: "",
      [formKeys.homePageLinkPrice]: "",
      [formKeys.offerGuidelines]: "",
      [formKeys.writingArticleIncluded]: "",
      [formKeys.noOfWords]: "",
      [formKeys.allowDoFollow]: "",
      [formKeys.typesOfLink]: "",
      [formKeys.taggingArticle]: "",
      [formKeys.noOfLinksAdvertise]: "",
      [formKeys.otherLinks]: "",
      [formKeys.otherContent]: "",
      [formKeys.wordMin]: "",
      [formKeys.wordMax]: "",
      [formKeys.linksMin]: "",
      [formKeys.linksMax]: ""
    },
    shouldFocusError: false
  });

  const { control, handleSubmit, watch, reset } = form;

  useEffect(() => {
    if (initialValues) {
      reset(initialValues); // ✅ Reset with edit data if available
      if (initialValues.hasConsented) {
        setHasConsented(true);
      }
    } else {
      const stored = getStoredValues();
      if (Object.keys(stored).length > 0) {
        reset(stored); // fallback to localStorage if creating new
        if (stored.hasConsented) {
          setHasConsented(true);
        }
      }
    }
  }, [initialValues, reset]);

  const watchedValues = watch();

  useEffect(() => {
    const valuesToStore = {
      ...watchedValues,
      hasConsented
    };
    localStorage.setItem(
      storageKeys.LOCAL_STORAGE_KEY,
      JSON.stringify(valuesToStore)
    );
  }, [watchedValues, hasConsented]);

  const addFormEntry = useWebsiteFormStore((state) => state.addFormEntry);
  const deleteFormEntry = useWebsiteFormStore((state) => state.deleteFormEntry);
  const updateFormEntry = useWebsiteFormStore((state) => state.updateFormEntry);

  const onSubmit = (data: FormValues) => {
    if (!hasConsented) {
      setHasConsentError(true);
      setAccordionValue("item-1");
      return;
    }

    const finalData = {
      ...data,
      hasConsented: true
    };

    setHasConsentError(false);

    if (initialValues?.id) {
      updateFormEntry(finalData);
    } else {
      addFormEntry(finalData);
    }

    localStorage.removeItem(storageKeys.LOCAL_STORAGE_KEY);
    console.log("Form submitted:", finalData);
    setShowSuccessDialog(true);
  };

  const onError = () => {
    if (!hasConsented) {
      setHasConsentError(true);
      setAccordionValue("item-1");
    }
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem(storageKeys.LOCAL_STORAGE_KEY);
    };
  }, []);

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
        <div className="flex flex-col gap-5">
          <Accordion
            type="single"
            collapsible
            value={accordionValue}
            onValueChange={setAccordionValue}
            className={`rounded-md px-[24px] py-[12px] ${
              hasConsentError
                ? "border border-[#EF4444]"
                : "border border-[#EAEAEA]"
            }`}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center w-full ">
                <div className="flex items-center justify-between gap-4 flex-1">
                  <p className="font-[400] font-[inter] text-[14px]">
                    Hey, Accept Preconditions before you start the listing!
                  </p>
                  {accordionValue !== "item-1" &&
                    (hasConsented ? (
                      <div className="flex items-center gap-2 p-3 bg-accepted-primary text-accepted-foreground shadow-xs rounded-[24px] h-[30px]">
                        <Check color="#34C759" size={"16px"} />
                        Accepted
                      </div>
                    ) : (
                      <div className="flex items-center p-3 bg-pending-primary text-pending-foreground shadow-xs rounded-[24px] h-[30px]">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#FF9500]" />
                          Pending
                        </div>
                      </div>
                    ))}
                </div>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 mt-3">
                <p className="font-[400] font-[inter] text-[14px] text-[#0F0C1B99]">
                  Before you can proceed with your listing, please make sure to
                  review all required preconditions. Accepting these is
                  mandatory to continue. It ensures your submission meets our
                  platformstandards and avoids delays. Listings that don't meet
                  these terms may be rejected. Take a moment to go through them
                  carefully before moving ahead. Once accepted, you'll be able
                  to start listing right away.
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
                    onClick={() => {
                      setHasConsented(true);
                      setHasConsentError(false);
                    }}
                  >
                    {"Accept"}
                  </Button>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {hasConsentError && (
            <p className="text-sm text-[#EF4444] ml-auto mr-4 -mt-4">
              Please accept pre-conditions to continue.
            </p>
          )}
        </div>
        <WebsiteDetail control={control} />
        <CreateOffer control={control} watch={watch} />
        <ArticleSpecification control={control} watch={watch} />
        <div className="flex gap-4 items-center">
          <Button
            onClick={handleSubmit(onSubmit, onError)}
            className="w-[200px]"
          >
            {initialValues ? "Update Website" : "Add Website"}
          </Button>
          {initialValues && (
            <>
              <Button
                variant="destructive"
                className="w-[200px]"
                onClick={() => setShowDeleteDialog(true)}
              >
                Delete Website
              </Button>

              <AlertDialogCustom
                open={showDeleteDialog}
                onOpenChange={setShowDeleteDialog}
                icon={<CheckCircle2 size={60} className="text-red-500" />}
                title="Are you sure you want to delete this website?"
                subtext="This action cannot be undone."
                buttonText="Delete"
                buttonVariant="destructive"
                onConfirm={() => {
                  if (initialValues?.id) {
                    deleteFormEntry(initialValues.id);
                    localStorage.removeItem(storageKeys.LOCAL_STORAGE_KEY);
                    navigate(appRoutes.myWebsites.main);
                  }
                }}
              />
            </>
          )}
        </div>
      </div>
      <AlertDialogCustom
        open={showSuccessDialog}
        onOpenChange={setShowSuccessDialog}
        icon={<CheckCircle2 size={60} className="text-green-500" />}
        title={`Website is successfully ${initialValues ? "Updated" : "Added"}`}
        subtext=""
        buttonText="Go to Dashboard"
        buttonVariant="default"
        onConfirm={() => navigate(appRoutes.myWebsites.main)}
      />
    </Form>
  );
};

export default AddWebsite;
