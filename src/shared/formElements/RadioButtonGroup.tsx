import { FormItem, FormMessage } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useController } from "react-hook-form";

export type RadioOption = {
  label: string;
  value: string;
};

type RadioButtonGroupProps = {
  name: string;
  control: any;
  label?: string;
  options: RadioOption[];
  optionlabelSx?: string;
};

const RadioButtonGroup = ({
  name,
  control,
  label,
  options,
  optionlabelSx = ""
}: RadioButtonGroupProps) => {
  const {
    field: { value, onChange },
    fieldState
  } = useController({ name, control });

  return (
    <FormItem>
      {label && (
        <label className="text-[14px] font-[400] text-foreground">
          {label}
        </label>
      )}
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="flex flex-col gap-3 mt-2"
      >
        {options.map((opt) => {
          const itemId = `${name}-${opt.value}`; 

          return (
            <div key={opt.value} className="flex items-center space-x-2">
              <RadioGroupItem
                value={opt.value}
                id={itemId}
                className="border-muted-foreground text-primary focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Label
                htmlFor={itemId}
                className={`text-sm text-[#0F0C1B99] font-[400] cursor-pointer ${optionlabelSx}`}
              >
                {opt.label}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
      {fieldState.error && <FormMessage />}
    </FormItem>
  );
};

export default RadioButtonGroup;
