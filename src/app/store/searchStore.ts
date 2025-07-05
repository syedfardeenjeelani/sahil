import { create } from 'zustand';

interface SearchState {
  input: string;
  setInput: (input: string) => void;
  history: string[];
  addToHistory: (query: string) => void;
  clearHistory: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  input: '',
  setInput: (input) => set({ input }),
  history: [],
  addToHistory: (query) =>
    set((state) => ({
      history: Array.from(new Set([query, ...state.history])).slice(0, 20),
    })),
  clearHistory: () => set({ history: [] }),
})); 