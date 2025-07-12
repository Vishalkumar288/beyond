import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import type { FC } from "react";

interface SomethingWentWrongProps {
  error: any;
  resetErrorBoundary: () => void;
}

const SomethingWentWrong: FC<SomethingWentWrongProps> = ({
  error,
  resetErrorBoundary
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 gap-3">
      <AlertTriangle className="text-destructive w-12 h-12" />
      <h2 className="text-lg font-semibold tracking-wide">
        Something went wrong
      </h2>
      <pre className="text-sm text-muted-foreground whitespace-pre-wrap text-left max-w-full overflow-auto">
        {error?.message || "Unknown error"}
      </pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
};

export default SomethingWentWrong;
