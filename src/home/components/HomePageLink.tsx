import { formKeys } from "@/constants/formKeys";
import { label } from "@/constants/label";
import TextInput from "@/shared/formElements/TextInput";
import { DollarSign } from "lucide-react";
import type { WebsiteDetailProps } from "./WebsiteDetail";
import TextAreaInput from "@/shared/formElements/TextAreaInput";

const HomePageLink = ({ control }: WebsiteDetailProps) => {
  return (
    <div className="grid grid-cols-12 space-x-8 space-y-6">
      <div className="col-span-3">
        <TextInput
          name={formKeys.homePageLinkPrice}
          control={control}
          label={label.homePageLinkPrice}
          startIcon={<DollarSign size={"16px"} color="#B3B3B3" />}
          type="number"
        />
      </div>
      <div className="col-span-9"></div>
      <div className="col-span-6">
        <TextAreaInput
          name={formKeys.offerGuidelines}
          control={control}
          label={label.offerGuidelines}
          placeholder="Description"
        />
      </div>
    </div>
  );
};

export default HomePageLink;
