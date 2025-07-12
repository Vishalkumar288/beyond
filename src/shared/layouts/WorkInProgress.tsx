import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../constants/appRoutes";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import workInProgressAnimation from "../../assets/animations/wip.json";

const WorkInProgress = ({ Page = "" }: { Page?: string }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4 bg-[#FEFEFF]"
      style={{ gap: 2 }}
    >
      <div style={{ height: "300px", width: "300px" }}>
        <Lottie animationData={workInProgressAnimation} loop autoplay />
      </div>
      <h1 className="text-[34px] font-semibold text-[#0F0C1B] ">{`${Page} is Work In Progress`}</h1>
      <p className="text-[#607088] text-[16px]" style={{ marginBottom: 12 }}>
        We're still building this page. Please check back soon!
      </p>
      <Button
        variant="outline"
        onClick={() => navigate(appRoutes.myWebsites.main)}
        style={{ padding: "3px 18px" }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default WorkInProgress;
