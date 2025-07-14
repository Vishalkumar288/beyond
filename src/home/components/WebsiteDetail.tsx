import TextInput from "@/shared/formElements/TextInput";
import { formKeys } from "@/constants/formKeys";
import { label } from "@/constants/label";
import type { Control, UseFormWatch } from "react-hook-form";
import type { FormValues } from "../pages/AddWebsite";
import DropDown from "@/shared/formElements/DropDown";
import CheckboxGroup from "@/shared/formElements/CheckBoxGroup";
import TextAreaInput from "@/shared/formElements/TextAreaInput";
import { categoryOptions, countryOptions, languageOptions } from "@/constants";

export type WebsiteDetailProps = {
  control: Control<FormValues>;
  watch?: UseFormWatch<FormValues>;
};


const WebsiteDetail = ({ control }: WebsiteDetailProps) => {
  return (
    <div className="flex flex-col gap-4 shadow-[0px_1px_2px_0px_#0000000D] rounded-md">
      <h3 className="font-[600] text-[24px] leading-[40px]">
        {"Website detail"}
      </h3>
      <div className="grid grid-cols-12 p-4 space-x-8 space-y-6">
        <div className="col-span-3">
          <TextInput
            name={formKeys.website}
            control={control}
            label={label.website}
            placeholder="Website URL"
            type="url"
          />
        </div>
        <div className="col-span-3">
          <DropDown
            name={formKeys.primaryLang}
            control={control}
            label={label.primaryLang}
            placeholder="Select a Language"
            options={languageOptions}
          />
        </div>
        <div className="col-span-3">
          <DropDown
            name={formKeys.majorTraffic}
            control={control}
            label={label.majorTraffic}
            placeholder="Select a Country"
            options={countryOptions}
          />
        </div>
        <div className="col-span-12">
          <CheckboxGroup
            name={formKeys.mainCategory}
            control={control}
            label={label.mainCategory}
            options={categoryOptions}
            rows={8}
          />
        </div>
        <div className="col-span-9">
          <TextAreaInput
            name={formKeys.description}
            control={control}
            label={label.description}
            placeholder="Description"
          />
        </div>
        <div className="col-span-5">
          <CheckboxGroup
            name={formKeys.owner}
            control={control}
            options={[
              { label: "I am the owner of the website", value: "isOwner" }
            ]}
            optionlabelSx="text-![#0F0C1B] !font-[500]"
            rows={8}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteDetail;
