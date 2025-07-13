import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { ReactNode } from "react";

type TextInputProps = {
  name: string;
  control: any;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  startIcon?: ReactNode;
};

const TextInput = ({
  name,
  control,
  label,
  placeholder = "",
  disabled = false,
  type = "text",
  startIcon
}: TextInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && (
            <label className="text-[14px] font-medium text-foreground">
              {label}
            </label>
          )}
          <div className="relative w-full">
            {startIcon && (
              <div className="absolute left-0 top-0 bottom-0 w-10 flex items-center justify-center border-r border-[#EAEAEA]">
                {startIcon}
              </div>
            )}

            <Input
              {...field}
              type={type}
              disabled={disabled}
              placeholder={placeholder}
              className={`${startIcon ? "pl-11" : ""} ${
                fieldState.error ? "border-red-500" : ""
              }`}
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
