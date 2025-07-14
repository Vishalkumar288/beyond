import { create } from "zustand";

export const usePaginationState = create<{
  currentPage: number;
  setCurrentPage: (page: number) => void;
}>((set) => ({
  currentPage: 1,
  setCurrentPage: (page) => set({ currentPage: page })
}));