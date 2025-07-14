import { useState, type JSX } from "react";
import {
  // CircleDollarSign,
  Bitcoin,
  Cannabis,
  // ShieldPlus,
  // Glasses,
  Dice5
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DynamicIcon } from "lucide-react/dynamic";
import { Button } from "@/components/ui/button";
import CustomTable from "@/shared/customTable";
import { appRoutes } from "@/constants/appRoutes";
import { useWebsiteFormStore } from "@/store/useWebsiteFormStore";
import { countryOptions, languageOptions, categoryOptions } from "@/constants";
import { usePaginationState } from "@/store/usePaginationState";

const getFlagOption = (options: typeof countryOptions, key: string) =>
  options.find((opt) => opt.name === key);

const FlagImgComp = ({
  name,
  options
}: {
  name: string;
  options: typeof countryOptions;
}) => {
  const opt = getFlagOption(options, name);
  if (!opt) return <span className="text-muted-foreground">-</span>;
  return (
    <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap text-ellipsis">
      <img src={opt.flagUrl} alt={opt.displayName} width={20} height={20} />
      <span className="truncate max-w-[120px]">{opt.displayName}</span>
    </div>
  );
};

const getCategoryLabel = (value: string) => {
  return categoryOptions.find((c) => c.value === value)?.label || value;
};

const getColumns = () => [
  { header: "Website", accessor: "website", width: "240px" },
  { header: "Country", accessor: "country", width: "156px" },
  { header: "Language", accessor: "language", width: "146px" },
  { header: "Category", accessor: "category", width: "146px" },
  { header: "Other Categories", accessor: "otherCategories", width: "300px" },
  { header: "Grey Niches", accessor: "greyNiches", width: "200px" }
];

const getRows = (
  data: any
): {
  website: string;
  country: JSX.Element;
  language: JSX.Element;
  category: JSX.Element;
  otherCategories: JSX.Element;
  greyNiches: JSX.Element;
}[] => {
  return data.map((item: any, idx: number) => ({
    website: item.website,
    country: <FlagImgComp name={item.majorTraffic} options={countryOptions} />,
    language: <FlagImgComp name={item.primaryLang} options={languageOptions} />,
    category: (
      <div className="truncate max-w-[200px]">
        {getCategoryLabel(item.mainCategory?.[0] || "-")}
      </div>
    ),
    otherCategories: (
      <div className="truncate max-w-[200px]">
        {item.mainCategory?.slice(1).map(getCategoryLabel).join(", ") || "-"}
      </div>
    ),
    greyNiches: (
      <div className="flex gap-[6px] text-[#613FDD]">
        {item.gamblingGuestPost ? <Dice5 key={`d-${idx}`} /> : null}
        {item.crptoGuestPost ? <Bitcoin key={`b-${idx}`} /> : null}
        {item.adultGuestPost ? <Cannabis key={`a-${idx}`} /> : null}
      </div>
    )
  }));
};

const MyWebsites = () => {
  const rowsPerPage = 11;
  const page = usePaginationState((state) => state.currentPage);
  const setPage = usePaginationState((state) => state.setCurrentPage);
  const entries = useWebsiteFormStore((state) => state.formEntries);
  const allData = entries || [];

  const paginated = allData.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const totalPages = Math.ceil(allData.length / rowsPerPage);

  const navigate = useNavigate();

  return (
    <div className="container px-[24px] py-[12px]">
      <div className="mb-[46px]">
        <span className="font-[600] text-[24px] leading-[40px] ">
          {"All websites"}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row mb-[40px]">
        <Button
          className="h-[36px] w-[228px]"
          onClick={() =>
            navigate(
              appRoutes.myWebsites.main + appRoutes.myWebsites.addWebsite
            )
          }
        >
          <DynamicIcon name="plus" />
          {"Add website"}
        </Button>
      </div>
      <CustomTable
        getColumns={getColumns}
        getRows={() => getRows(paginated)}
        currentPage={page}
        onPageChange={setPage}
        totalPages={totalPages}
        onRowClick={(index) => {
          const entry = paginated[index];
          navigate(`${appRoutes.myWebsites.main}/manage-website/${entry.id}`);
        }}
      />
    </div>
  );
};

export default MyWebsites;
