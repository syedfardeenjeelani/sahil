// hooks/useChat.ts
import { useMutation } from "@tanstack/react-query";

type ChatResponse = {
  answer: string;
  results: unknown;
};

export const useChat = () => {
  return useMutation({
    mutationFn: async (query: string): Promise<ChatResponse> => {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch chat data");
      }

      return res.json();
    },
  });
};
