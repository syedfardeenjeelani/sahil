"use client";
import React, { useState, useRef, useEffect } from "react";
import { useChat } from "../../../lib/hooks/ChatApi";
import { useChatStore } from "../store/chatStore";

function PlusIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5v10M5 10h10"/></svg>
  );
}
function TuneIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path d="M6.5 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v4m0-8V3M10 17v-6m0-2V3m0 8h9m-5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0v7m0-13V3m0 8h9" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/></svg>
  );
}
function MicIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" stroke="currentColor"><rect width="8" height="12" x="6" y="3" stroke="#6B7280" strokeWidth="1.5" rx="4"/><path stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" d="M10 16v2M10 16a6 6 0 0 1-6-6m6 6a6 6 0 0 0 6-6"/></svg>
  );
}
function WaveformIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" stroke="currentColor"><rect width="2" height="8" x="4" y="6" rx="1" fill="#A1A1AA"/><rect width="2" height="12" x="9" y="4" rx="1" fill="#A1A1AA"/><rect width="2" height="5" x="14" y="8" rx="1" fill="#A1A1AA"/></svg>
  );
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function Chat() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chat = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Zustand store
  const {
    input: storeInput,
    setInput: setStoreInput,
    messages: storeMessages,
    addMessage,
    addUserMessage,
    clearMessages,
  } = useChatStore();

  // On mount: initialize from store
  useEffect(() => {
    // If there are messages in the store, use them
    if (storeMessages && storeMessages.length > 0) {
      setMessages(
        storeMessages.map((m) => ({
          role: m.role,
          content: m.content,
          timestamp: new Date(), // You can store timestamp in store if needed
        }))
      );
    } 
    if (storeInput && storeInput.trim()) {
      setQuery(storeInput);
    }
    
    // eslint-disable-next-line
  }, []);

  // Keep input in sync with store
  useEffect(() => {
    setStoreInput(query);
    // eslint-disable-next-line
  }, [query]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      const userMessage: Message = {
        role: "user",
        content: query,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      addUserMessage(query); // update store
      setQuery("");
      setStoreInput("");
      setIsLoading(true);
      try {
        await chat.mutateAsync(query);
      } catch (error) {
        console.error("Chat error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (chat.data && !isLoading) {
      const assistantMessage: Message = {
        role: "assistant",
        content: chat.data.answer,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      addMessage({
        id: crypto.randomUUID(),
        content: chat.data.answer,
        role: "assistant",
      });
    }
    // eslint-disable-next-line
  }, [chat.data, isLoading]);

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSubmit(e as any);
//     }
//   };

  // Layout constants
  const maxWidth = 640; // px, about max-w-2xl
  const sidePadding = 16; // px
  const bubblePadding = 20; // px
  const bubbleVertical = 14; // px
  const inputHeight = 72; // px
  const inputPadding = 24; // px

  

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top nav, left */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          paddingTop: 16,
          paddingLeft: 20,
          paddingRight: 24,
        }}
      >
        <div
          style={{
            marginLeft: "20px",
            zIndex: 100,
            position: "relative",
          }}
        >
          <button
            style={{}}
            onClick={() => {
              window.history.back();
            }}
            className="border h-[32px] w-[32px] rounded-[50%] justify-center items-center flex border-gray-300 bg-gray-100 text-gray-800 cursor-pointer hover:shadow-md hover:bg-gray-200 transition"
          >
            ←
          </button>
        </div>

        {/* Right - icons/profile */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 18, fontWeight: 400 }}>ChatGPT</span>
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
            style={{ marginLeft: 2, marginTop: 1 }}
          >
            <path
              d="M7 8l3 3 3-3"
              stroke="#71717A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* Main chat area, centered and padded, scrollable */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          background: "#fafbfc",
          paddingLeft: sidePadding,
          paddingRight: sidePadding,
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: messages.length === 0 ? "center" : "flex-start",
            margin: "0 auto",
            paddingTop: messages.length === 0 ? 100 : 32,
            paddingBottom: inputHeight + 32,
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* Welcome screen or chat */}
          {messages.length === 0 ? (
            <>
              {/* Saved memory full + Get Plus */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#737373",
                    gap: 4,
                    marginBottom: 2,
                  }}
                >
                  Saved memory full
                  <svg
                    style={{ marginLeft: 2, marginTop: -3 }}
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 18 18"
                    stroke="currentColor"
                  >
                    <circle
                      cx="9"
                      cy="9"
                      r="8.25"
                      stroke="#A1A1AA"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 6.1v2.75l1.75 1.1"
                      stroke="#A1A1AA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <button
                  style={{
                    borderRadius: 9999,
                    padding: "4px 12px",
                    fontSize: 12,
                    background: "#ede9fe",
                    color: "#7c3aed",
                    fontWeight: 500,
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                    boxShadow: "0 2px 6px 0 #0001",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                  >
                    <path
                      stroke="#7C3AED"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 5.5l2.5 4.33c.42.72-.11 1.67-.94 1.67H8.44c-.83 0-1.36-.95-.94-1.67L10 5.5z"
                    />
                    <circle
                      cx="10"
                      cy="10.25"
                      r="8"
                      stroke="#7C3AED"
                      strokeWidth="1.5"
                    />
                  </svg>
                  Get Plus
        </button>
              </div>
              {/* Title */}
              <h1
                style={{
                  fontSize: 32,
                  fontWeight: 300,
                  textAlign: "center",
                  marginBottom: 28,
                }}
              >
                Where should we begin?
              </h1>
            </>
          ) : (
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                paddingBottom: 8,
              }}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent:
                      message.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      padding:
                        message.role !== "user"
                          ? `${bubbleVertical}px ${bubblePadding}px`
                          : "7px 34px",
                      borderRadius:
                        message.role === "user"
                          ? "28px 28px 12px 28px"
                          : "28px 28px 28px 12px",
                      boxShadow: "0 2px 12px 0 #0001",
                      fontSize: 17,
                      fontWeight: 400,
                      background: message.role === "user" ? "#2563eb" : "#fff",
                      color: message.role === "user" ? "#fff" : "#18181b",
                      border:
                        message.role === "user" ? "none" : "1px solid #e5e7eb",
                      marginLeft: message.role === "user" ? 12 : 0,
                      marginRight: message.role === "assistant" ? 12 : 0,
                      marginBottom: 8,
                      marginTop: 8,
                      wordBreak: "break-word",
                      transition: "all 0.2s",
                    }}
                  >
                    {message.content}
                    <div
                      style={{
                        position: "absolute",
                        bottom: -20,
                        right: message.role === "user" ? 12 : undefined,
                        left: message.role === "assistant" ? 12 : undefined,
                        fontSize: 12,
                        color: message.role === "user" ? "#dbeafe" : "#a3a3a3",
                      }}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}
              {/* Loading indicator */}
              {isLoading && (
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div
                    style={{
                      background: "#fff",
                      color: "#18181b",
                      border: "1px solid #e5e7eb",
                      borderRadius: 24,
                      padding: "12px 20px",
                      boxShadow: "0 2px 12px 0 #0001",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <div style={{ display: "flex", gap: 2 }}>
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          background: "#a3a3a3",
                          borderRadius: 9999,
                          animation: "bounce 1s infinite",
                        }}
                      ></div>
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          background: "#a3a3a3",
                          borderRadius: 9999,
                          animation: "bounce 1s infinite",
                          animationDelay: "0.1s",
                        }}
                      ></div>
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          background: "#a3a3a3",
                          borderRadius: 9999,
                          animation: "bounce 1s infinite",
                          animationDelay: "0.2s",
                        }}
                      ></div>
                    </div>
                    <span style={{ fontSize: 14, color: "#737373" }}>
                      AI is thinking...
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        {/* Input bar always at the bottom, beautiful and consistent */}
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 -2px 16px 0 #0001",
            paddingTop: 16,
            paddingBottom: 16,
          }}
        >
          <div
            style={{
              background: "#fff",
              boxShadow: "0 2px 12px 0 #0001",
              borderRadius: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth,
              margin: "0 auto",
              padding: `0 ${inputPadding}px`,
              height: inputHeight,
              minWidth: 320,
            }}
          >
            {/* Input and left tools */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                flex: 1,
                height: 48,
              }}
            >
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                // onKeyDown={handleKeyDown}
                placeholder="Ask anything"
                style={{
                  flex: 1,
                  background: "transparent",
                  outline: "none",
                  border: "none",
                  fontSize: 16,
                  color: "#18181b",
                  minWidth: 120,
                  padding: 0,
                  margin: 0,
                  fontWeight: 400,
                  letterSpacing: 0.1,
                  lineHeight: 1.4,
                  boxSizing: "border-box",
                }}
                disabled={isLoading}
                autoFocus
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  color: "#737373",
                  cursor: "pointer",
                  marginLeft: 12,
                }}
              >
                <PlusIcon />
                <TuneIcon />
                <span style={{ fontSize: 16, marginLeft: 4 }}>Tools</span>
              </div>
            </div>
            {/* Right icons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginLeft: "auto",
                marginRight: -6,
              }}
            >
              <button
                type="button"
                style={{
                  background: "none",
                  border: "none",
                  borderRadius: 9999,
                  padding: 8,
                  cursor: "pointer",
                }}
                tabIndex={-1}
              >
                <MicIcon />
              </button>
              <button
                type="button"
                style={{
                  background: "none",
                  border: "none",
                  borderRadius: 9999,
                  padding: 8,
                  cursor: "pointer",
                }}
                tabIndex={-1}
              >
                <WaveformIcon />
              </button>
              <button
                type="submit"
                disabled={!query.trim() || isLoading}
                style={{
                  marginLeft: 8,
                  background: "#2563eb",
                  color: "#fff",
                  borderRadius: 8,
                  padding: 8,
                  border: "none",
                  cursor:
                    !query.trim() || isLoading ? "not-allowed" : "pointer",
                  opacity: !query.trim() || isLoading ? 0.5 : 1,
                  transition: "background 0.2s",
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      {chat.error && (
          <div
            style={{
              color: "#ef4444",
              fontSize: 14,
              marginTop: 16,
              textAlign: "center",
            }}
          >
          Error: {(chat.error as Error).message}
        </div>
      )}
    </div>
    </main>
  );
}
