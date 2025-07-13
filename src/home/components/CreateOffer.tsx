import CustomTabs from "@/shared/customTabs/CustomTabs";
import NormalOffer from "./NormalOffer";
import type { WebsiteDetailProps } from "./WebsiteDetail";
import GreyNicheOffer from "./GreyNicheOffer";
import HomePageLink from "./HomePageLink";

const CreateOffer = ({ control, watch }: WebsiteDetailProps) => {
  const tabs = [
    {
      label: "Normal offer",
      element: <NormalOffer control={control} />
    },
    {
      label: "Grey Niche offer",
      element: <GreyNicheOffer control={control} watch={watch} />
    },
    { label: "Homepage link", element: <HomePageLink control={control} /> }
  ];

  return (
    <div className="flex flex-col gap-4 shadow-[0px_1px_2px_0px_#0000000D] rounded-md">
      <h3 className="font-[600] text-[24px] leading-[40px]">
        {"Create offer"}
      </h3>
      <div className="p-4">
        <CustomTabs tabs={tabs} />
      </div>
    </div>
  );
};

export default CreateOffer;
