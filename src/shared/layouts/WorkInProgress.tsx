import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../constants/appRoutes";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import workInProgressAnimation from "../../assets/animations/wip.json";

const WorkInProgress = ({ Page = "" }: { Page?: string }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[100vh] px-4 bg-[#FEFEFF] gap-2">
      <div className="h-[300px] w-[300px]">
        <Lottie animationData={workInProgressAnimation} loop autoplay />
      </div>
      <h1 className="text-[34px] font-semibold text-[#0F0C1B] ">{`${Page} is Work In Progress`}</h1>
      <div className="mb-4">
        <h3 className="text-[#607088] text-[16px]">
          We're still building this page. Please check back soon!
        </h3>
      </div>
      <Button onClick={() => navigate(appRoutes.myWebsites.main)}>
        Go Back
      </Button>
    </div>
  );
};

export default WorkInProgress;
