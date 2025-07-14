import type { FormValues } from "@/home/pages/AddWebsite";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import { dummyData } from "@/constants";

type WebsiteFormStore = {
  formEntries: FormValues[];
  addFormEntry: (entry: FormValues) => void;
  updateFormEntry: (updatedEntry: FormValues) => void;
  clearFormEntries: () => void;
  deleteFormEntry: (id: string) => void;
};

export const useWebsiteFormStore = create<WebsiteFormStore>()(
  persist(
    (set) => ({
      formEntries: dummyData,
      addFormEntry: (entry) =>
        set((state) => ({
          formEntries: [{ ...entry, id: nanoid() }, ...state.formEntries]
        })),
      updateFormEntry: (updatedEntry: FormValues) =>
        set((state) => ({
          formEntries: state.formEntries.map((entry) =>
            entry.id === updatedEntry.id ? updatedEntry : entry
          )
        })),
      clearFormEntries: () => set({ formEntries: dummyData }),
      deleteFormEntry: (id: string) =>
        set((state) => ({
          formEntries: state.formEntries.filter((entry) => entry.id !== id)
        }))
    }),
    {
      name: "website-form-storage"
    }
  )
);
