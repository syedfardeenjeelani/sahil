import { create } from "zustand";

interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
}

interface ChatState {
  input: string;
  setInput: (input: string) => void;
  messages: ChatMessage[];
  addMessage: (message: ChatMessage) => void;
  addUserMessage: (content: string) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  input: "",
  setInput: (input) => set({ input }),

  messages: [],

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  addUserMessage: (content) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: crypto.randomUUID(),
          content,
          role: "user",
        },
      ],
    })),

  clearMessages: () => set({ messages: [] }),
}));
