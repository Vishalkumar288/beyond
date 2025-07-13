import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type TextAreaInputProps = {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  labelSx?: string;
  disabled?: boolean;
  startIcon?: ReactNode;
};

const TextAreaInput = ({
  name,
  control,
  label,
  placeholder = "",
  labelSx = "",
  disabled = false,
  startIcon
}: TextAreaInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && (
            <label
              className={cn(`text-[14px] font-medium text-foreground`, labelSx)}
            >
              {label}
            </label>
          )}
          <div className="relative">
            {startIcon && (
              <div className="absolute left-2 top-3">{startIcon}</div>
            )}
            <Textarea
              {...field}
              disabled={disabled}
              placeholder={placeholder}
              className={`${startIcon ? "pl-9" : ""} ${
                fieldState.error ? "border border-[#EF4444]" : ""
              } resize rounded-md min-h-[100px]`}
            />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextAreaInput;
