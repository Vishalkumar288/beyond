import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import type { Control } from "react-hook-form";

type CountryOption = {
  name: string; // used as the value
  displayName: string; // visible label
  flagUrl: string; // flag or icon
};

type CountrySelectProps = {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  options: CountryOption[];
  disabled?: boolean;
};

const DropDown = ({
  name,
  control,
  label,
  placeholder = "",
  options,
  disabled = false
}: CountrySelectProps) => {
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
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            disabled={disabled}
          >
            <SelectTrigger
              className={`w-full h-[40px] border border-[#EAEAEA] shadow-[0px_1px_2px_0px_#0000000D] px-3 text-left ${
                fieldState.error ? "border-red-500" : ""
              }`}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => (
                <SelectItem key={opt.name} value={opt.name}>
                  <div className="flex items-center gap-2">
                    {opt?.flagUrl && (
                      <img
                        src={opt?.flagUrl}
                        alt={opt.displayName}
                        width={20}
                        height={20}
                      />
                    )}
                    <span>{opt.displayName}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DropDown;
