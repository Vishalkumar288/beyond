import * as React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

type AlertDialogCustomProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  icon: React.ReactNode;
  title: string;
  subtext: string;
  buttonText: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary";
  onConfirm: () => void;
};

const AlertDialogCustom: React.FC<AlertDialogCustomProps> = ({
  open,
  onOpenChange,
  icon,
  title,
  subtext,
  buttonText,
  buttonVariant = "default",
  onConfirm
}) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange} >
      <AlertDialogContent className="w-fit px-6 py-4 text-center rounded-xl">
        <div className="flex justify-center items-center ">{icon}</div>
        <AlertDialogHeader className="flex justify-center items-center ">
          <AlertDialogTitle className="text-[18px] font-semibold">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-muted-foreground">
            {subtext}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Button
            className="w-full h-[40px]"
            variant={buttonVariant}
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            {buttonText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogCustom;
