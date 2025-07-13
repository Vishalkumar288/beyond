import RadioButtonGroup from "@/shared/formElements/RadioButtonGroup";
import type { WebsiteDetailProps } from "./WebsiteDetail";
import { formKeys } from "@/constants/formKeys";
import TextInput from "@/shared/formElements/TextInput";
import { DollarSign } from "lucide-react";
import { label } from "@/constants/label";

type prop = {
  text: string;
  sx: string;
};

const TypoHeader = ({ text, sx }: prop) => {
  return (
    <h6
      className={`font-[600] text-[16px] leading-[24px] text-[#0F0C1B99] ${sx}`}
    >
      {text}
    </h6>
  );
};

const GreyNicheOffer = ({ control, watch }: WebsiteDetailProps) => {
  const offerSame = watch!(formKeys.isSamePrice);
  const isSameOffer = Boolean(offerSame);
  return (
    <>
      <div className="grid grid-cols-12 space-x-8 space-y-6">
        <div className="col-span-4">
          <RadioButtonGroup
            name={formKeys.isSamePrice}
            control={control}
            options={[
              { value: "same", label: "I offer same price for all grey niches" }
            ]}
          />
        </div>
        <div className="col-span-8"></div>
        {isSameOffer && (
          <>
            <div className="col-span-3">
              <TextInput
                name={formKeys.enterSamePrice}
                control={control}
                label={label.enterSamePrice}
                startIcon={<DollarSign size={"16px"} color="#B3B3B3" />}
                type="number"
              />
            </div>
            <div className="col-span-9"></div>
          </>
        )}
        <div className="col-span-3">
          <TypoHeader
            text="Gambling"
            sx={isSameOffer ? "text-muted-foreground " : ""}
          />
        </div>
        <div className="col-span-3">
          <TypoHeader
            text="Crypto"
            sx={isSameOffer ? "text-muted-foreground " : ""}
          />
        </div>
        <div className="col-span-3">
          <TypoHeader
            text="Adult"
            sx={isSameOffer ? "text-muted-foreground " : ""}
          />
        </div>
        <div className="col-span-3"></div>
      </div>
      <div className="grid grid-cols-12 space-x-8 space-y-2">
        <div className="col-span-3">
          <TextInput
            name={formKeys.gamblingGuestPost}
            control={control}
            label={label.priceGuestPost}
            startIcon={<DollarSign size={"16px"} color="#B3B3B3" />}
            type="number"
            disabled={isSameOffer}
          />
        </div>
        <div className="col-span-3">
          <TextInput
            name={formKeys.crptoGuestPost}
            control={control}
            label={label.priceGuestPost}
            startIcon={<DollarSign size={"16px"} color="#B3B3B3" />}
            type="number"
            disabled={isSameOffer}
          />
        </div>
        <div className="col-span-3">
          <TextInput
            name={formKeys.adultGuestPost}
            control={control}
            label={label.priceGuestPost}
            startIcon={<DollarSign size={"16px"} color="#B3B3B3" />}
            type="number"
            disabled={isSameOffer}
          />
        </div>
        <div className="col-span-3"></div>
        <div className="col-span-3">
          <TextInput
            name={formKeys.gamblingLinkInsert}
            control={control}
            label={label.priceLinkInsertion}
            startIcon={<DollarSign size={"16px"} color="#B3B3B3" />}
            type="number"
            disabled={isSameOffer}
          />
        </div>
        <div className="col-span-3">
          <TextInput
            name={formKeys.crptoLinkInsert}
            control={control}
            label={label.priceLinkInsertion}
            startIcon={<DollarSign size={"16px"} color="#B3B3B3" />}
            type="number"
            disabled={isSameOffer}
          />
        </div>
        <div className="col-span-3">
          <TextInput
            name={formKeys.adultLinkInsert}
            control={control}
            label={label.priceLinkInsertion}
            startIcon={<DollarSign size={"16px"} color="#B3B3B3" />}
            type="number"
            disabled={isSameOffer}
          />
        </div>
        <div className="col-span-3"></div>
      </div>
    </>
  );
};

export default GreyNicheOffer;
