import type { FormValues } from "@/home/pages/AddWebsite";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import { dummyData } from "@/constants";

type WebsiteFormStore = {
  formEntries: FormValues[];
  addFormEntry: (entry: FormValues) => void;
  clearFormEntries: () => void;
};

export const useWebsiteFormStore = create<WebsiteFormStore>()(
  persist(
    (set) => ({
      formEntries: [],
      addFormEntry: (entry) =>
        set((state) => ({
          formEntries: [...state.formEntries, { ...entry, id: nanoid() }]
        })),
      clearFormEntries: () => set({ formEntries: dummyData })
    }),
    {
      name: "website-form-storage"
    }
  )
);
