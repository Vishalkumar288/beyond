import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type TextInputProps = {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  className?: string;
  startIcon?: ReactNode;
};

const TextInput = ({
  name,
  control,
  label,
  placeholder = "",
  disabled = false,
  type = "text",
  className = "",
  startIcon
}: TextInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && (
            <label
              className={cn(
                "text-[14px] font-medium",
                disabled ? "text-muted-foreground" : "text-foreground"
              )}
            >
              {label}
            </label>
          )}
          <div className="relative w-full">
            {startIcon && (
              <div
                className={cn(
                  "absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center border-r",
                  disabled
                    ? "border-muted text-muted-foreground"
                    : "border-[#EAEAEA]"
                )}
              >
                {startIcon}
              </div>
            )}

            <Input
              {...field}
              type={type}
              disabled={disabled}
              placeholder={placeholder}
              className={cn(
                startIcon && "pl-11",
                fieldState.error && "border border-[#EF4444]",
                disabled && "border-muted text-muted-foreground",
                className
              )}
              autoFocus={false}
            />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TextInput;
