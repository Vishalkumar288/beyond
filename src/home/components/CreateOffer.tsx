import CustomTabs from "@/shared/customTabs/CustomTabs";
import NormalOffer from "./NormalOffer";
import type { WebsiteDetailProps } from "./WebsiteDetail";

const CreateOffer = ({ control }: WebsiteDetailProps) => {
  const tabs = [
    { label: "Normal offer", element: <NormalOffer control={control} /> },
    { label: "Grey Niche offer", element: <></> },
    { label: "Homepage link", element: <></> }
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
