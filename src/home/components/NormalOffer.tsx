import { formKeys } from "@/constants/formKeys";
import { label } from "@/constants/label";
import TextInput from "@/shared/formElements/TextInput";
import type { WebsiteDetailProps } from "./WebsiteDetail";
import { DollarSign } from "lucide-react";

const NormalOffer = ({ control }: WebsiteDetailProps) => {
  return (
    <div className="grid grid-cols-12 space-x-8">
      <div className="col-span-3">
        <TextInput
          name={formKeys.guestPosting}
          control={control}
          label={label.guestPosting}
          startIcon={<DollarSign size={"16px"} color="#B3B3B3" />}
          type="number"
        />
      </div>
      <div className="col-span-3">
        <TextInput
          name={formKeys.linkInsertion}
          control={control}
          label={label.linkInsertion}
          startIcon={<DollarSign size={"16px"} color="#B3B3B3" />}
          type="number"
        />
      </div>
    </div>
  );
};

export default NormalOffer;
