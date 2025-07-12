import { useState, type JSX } from "react";
import {
  CircleDollarSign,
  Bitcoin,
  Cannabis,
  ShieldPlus,
  Glasses,
  Dice5
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DynamicIcon } from "lucide-react/dynamic";
import { Button } from "@/components/ui/button";
import CustomTable from "@/shared/customTable";
import { appRoutes } from "@/constants/appRoutes";

type DummyRow = {
  website: string;
  country: string;
  language: string;
  category: string;
  otherCategories: string;
  greyNiches: React.ComponentType[];
};

const dummyData: DummyRow[] = [
  {
    website: "example.com",
    country: "🇺🇸 United States",
    language: "English",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      Bitcoin,
      Dice5,
      CircleDollarSign,
      ShieldPlus,
      Glasses,
      Cannabis
    ]
  },
  {
    website: "example.com",
    country: "🇩🇪 Germany",
    language: "English",
    category: "Computer & Electronics",
    otherCategories: "Entertainment",
    greyNiches: [
      Bitcoin,
      Dice5,
      CircleDollarSign,
      ShieldPlus,
      Glasses,
      Cannabis
    ]
  }
];

const getColumns = () => [
  { header: "Website", accessor: "website" },
  { header: "Country", accessor: "country" },
  { header: "Language", accessor: "language" },
  { header: "Category", accessor: "category" },
  { header: "Other Categories", accessor: "otherCategories" },
  { header: "Grey Niches", accessor: "greyNiches" }
];

const getRows = (
  data: DummyRow[]
): {
  website: string;
  country: string;
  language: string;
  category: string;
  otherCategories: string;
  greyNiches: JSX.Element;
}[] => {
  return data.map((item) => ({
    website: item.website,
    country: item.country,
    language: item.language,
    category: item.category,
    otherCategories: item.otherCategories,
    greyNiches: (
      <div className="flex" style={{ color: "#613FDD", gap: "8px" }}>
        {item.greyNiches.map((Icon, idx) => (
          <Icon key={idx} />
        ))}
      </div>
    )
  }));
};

const MyWebsites = () => {
  const rowsPerPage = 10;
  const [page, setPage] = useState(1);
  const paginated = dummyData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  const totalPages = Math.ceil(dummyData.length / rowsPerPage);

  const navigate = useNavigate();

  return (
    <div className="container" style={{ padding: "12px 24px" }}>
      <div
        style={{
          marginBottom: "46px"
        }}
      >
        <span className="font-[600] text-[24px] leading-[40px] mb-20px">
          {"All websites"}
        </span>
      </div>
      <div
        className="flex flex-wrap items-center gap-2 md:flex-row"
        style={{
          marginBottom: "40px"
        }}
      >
        <Button
          variant="secondary"
          className="bg-[#613FDD] text-[#FEFEFF] rounded-[8px] cursor-pointer"
          style={{ height: "36px", width: "228px" }}
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
      />
    </div>
  );
};

export default MyWebsites;
