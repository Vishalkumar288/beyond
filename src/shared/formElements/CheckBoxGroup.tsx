import { FormItem, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useController } from "react-hook-form";

export type CheckboxOption = {
  label: string;
  value: string;
};

type CheckboxGroupProps = {
  name: string;
  control: any;
  label?: string;
  optionlabelSx?: string;
  options: CheckboxOption[];
  rows?: number; // Number of rows per column
  columns?: number; // Number of columns
};

const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
    array.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
};

const CheckboxGroup = ({
  name,
  control,
  label,
  options,
  rows,
  columns,
  optionlabelSx = ""
}: CheckboxGroupProps) => {
  const {
    field: { value = [], onChange },
    fieldState
  } = useController({ name, control });

  const handleChange = (checked: boolean, optionValue: string) => {
    if (checked) {
      if (!value.includes(optionValue)) {
        onChange([...value, optionValue]);
      }
    } else {
      onChange(value.filter((v: string) => v !== optionValue));
    }
  };

  // Determine how to chunk the options
  let chunkedOptions: CheckboxOption[][] = [];

  if (columns && columns > 0) {
    const itemsPerColumn = Math.ceil(options.length / columns);
    chunkedOptions = chunkArray(options, itemsPerColumn);
  } else {
    const itemsPerColumn = rows ?? 8;
    chunkedOptions = chunkArray(options, itemsPerColumn);
  }

  return (
    <FormItem>
      {label && (
        <label className="text-[14px] font-medium text-foreground">
          {label}
        </label>
      )}
      <div className="flex gap-x-12 gap-y-3">
        {chunkedOptions.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-3">
            {column.map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <Checkbox
                  id={opt.value}
                  checked={value.includes(opt.value)}
                  onCheckedChange={(checked) =>
                    handleChange(Boolean(checked), opt.value)
                  }
                />
                <Label
                  htmlFor={opt.value}
                  className={`text-sm text-[#0F0C1B99] cursor-pointer ${optionlabelSx}`}
                >
                  {opt.label}
                </Label>
              </div>
            ))}
          </div>
        ))}
      </div>
      {fieldState.error && <FormMessage />}
    </FormItem>
  );
};

export default CheckboxGroup;
