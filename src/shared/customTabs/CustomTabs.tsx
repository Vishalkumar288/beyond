import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

type Tab = {
  label: string;
  element: React.ReactNode;
};

type CustomTabsProps = {
  tabs: Tab[];
};

export default function CustomTabs({ tabs }: CustomTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="relative w-full">
        {/* Full-width border line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-border" />

        {/* Tabs list (content width only) */}
        <TabsList className="relative z-10 bg-transparent p-0 rounded-none justify-start space-x-10">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.label}
              value={tab.label}
              className="relative rounded-none bg-transparent shadow-none px-0 py-2 text-sm font-medium text-muted-foreground data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              <div className="px-3">{tab.label}</div>
              <div
                className={`absolute left-0 -bottom-[1px] h-[2px] w-full transition-all duration-300 ${
                  activeTab === tab.label ? "bg-primary" : "bg-transparent"
                }`}
              />
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.label} value={tab.label} className="pt-4">
          {tab.element}
        </TabsContent>
      ))}
    </Tabs>
  );
}
