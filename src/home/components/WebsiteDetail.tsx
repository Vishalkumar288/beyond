import TextInput from "@/shared/formElements/TextInput";
import { formKeys } from "@/constants/formKeys";
import { label } from "@/constants/label";
import type { Control } from "react-hook-form";
import type { FormValues } from "../pages/AddWebsite";
import DropDown from "@/shared/formElements/DropDown";
import CheckboxGroup from "@/shared/formElements/CheckBoxGroup";
import TextAreaInput from "@/shared/formElements/TextAreaInput";

export type WebsiteDetailProps = {
  control: Control<FormValues>;
};

type Option = {
  name: string;
  displayName: string;
  flagUrl: string;
};

type categoryOption = {
  label: string;
  value: string;
};

type OptionType = "country" | "language";

const countryOptions: Option[] = [
  {
    name: "gb",
    displayName: "United Kingdom",
    flagUrl: "https://flagcdn.com/w40/gb.png"
  },
  {
    name: "fr",
    displayName: "France",
    flagUrl: "https://flagcdn.com/w40/fr.png"
  },
  {
    name: "de",
    displayName: "Germany",
    flagUrl: "https://flagcdn.com/w40/de.png"
  },
  {
    name: "us",
    displayName: "United States",
    flagUrl: "https://flagcdn.com/w40/us.png"
  },
  {
    name: "in",
    displayName: "India",
    flagUrl: "https://flagcdn.com/w40/in.png"
  }
];

const languageOptions: Option[] = [
  {
    name: "gb",
    displayName: "English UK",
    flagUrl: "https://flagcdn.com/w40/gb.png"
  },
  {
    name: "fr",
    displayName: "French",
    flagUrl: "https://flagcdn.com/w40/fr.png"
  },
  {
    name: "de",
    displayName: "German",
    flagUrl: "https://flagcdn.com/w40/de.png"
  },
  {
    name: "us",
    displayName: "English US",
    flagUrl: "https://flagcdn.com/w40/us.png"
  },
  {
    name: "in",
    displayName: "Hindi",
    flagUrl: "https://flagcdn.com/w40/in.png"
  }
];

const categoryOptions: categoryOption[] = [
  { label: "Animals / Pets", value: "animals_pets" },
  { label: "Art", value: "art" },
  { label: "Auto", value: "auto" },
  { label: "Beauty", value: "beauty" },
  { label: "Blogging", value: "blogging" },
  { label: "Business / Entrepreneur", value: "business_entrepreneur" },
  { label: "Directory", value: "directory" },

  { label: "Education", value: "education" },
  { label: "Energy & Solar Energy", value: "energy_solar" },
  { label: "Entertainment & Music", value: "entertainment_music" },
  { label: "Environment", value: "environment" },
  { label: "Events", value: "events" },
  { label: "Family / Parenting", value: "family_parenting" },
  { label: "Fashion", value: "fashion" },
  { label: "Finance", value: "finance" },

  { label: "Food", value: "food" },
  { label: "Gambling", value: "gambling" },
  { label: "Gaming", value: "gaming" },
  { label: "General", value: "general" },
  { label: "Health & Fitness", value: "health_fitness" },
  { label: "Home & Garden", value: "home_garden" },
  { label: "Italian Sites", value: "italian_sites" },
  { label: "Legal", value: "legal" },

  { label: "Lifestyle", value: "lifestyle" },
  { label: "Marijuana / Vaporizers", value: "marijuana_vaporizers" },
  { label: "Marketing", value: "marketing" },
  { label: "Medical", value: "medical" },
  { label: "News", value: "news" },
  { label: "Other", value: "other" },
  { label: "Outdoors", value: "outdoors" },
  { label: "Photography", value: "photography" },

  { label: "Politics", value: "politics" },
  { label: "Real Estate", value: "real_estate" },
  { label: "EnvironmentSafety", value: "environment_safety" },
  { label: "SEO", value: "seo" },
  { label: "Sex & Adult", value: "sex_adult" },
  { label: "Shopping", value: "shopping" }
];

export const getOptions = (type: OptionType): Option[] => {
  return type === "country" ? countryOptions : languageOptions;
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
            options={getOptions("language")}
          />
        </div>
        <div className="col-span-3">
          <DropDown
            name={formKeys.majorTraffic}
            control={control}
            label={label.majorTraffic}
            placeholder="Select a Country"
            options={getOptions("country")}
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
            optionlabelSx="text-![#0F0C1B]"
            rows={8}
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteDetail;
