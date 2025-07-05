"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSearchStore } from "../store/searchStore";
import { useChatStore } from "../store/chatStore";
import Link from "next/link";

const Input = () => {
  const router = useRouter();
  const { input, setInput, history, addToHistory } = useSearchStore();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onboardingSuggestions = useMemo(() => [
    "Why should you hire me?",
    "What do i bring to the table?",
    "What are my key strengths?",
    "How can i contribute to the team?",
    "What makes me a good fit for this role?",
  ], []);

  useEffect(() => {
    if (input.trim()) {
      const filteredHistory = history.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      const filteredOnboarding = onboardingSuggestions.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      const combined = [...filteredHistory, ...filteredOnboarding];
      setFilteredSuggestions(combined);
      setShowSuggestions(combined.length > 0);
    } else {
      setFilteredSuggestions(onboardingSuggestions);
      setShowSuggestions(false);
    }
  }, [input, history, onboardingSuggestions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addToHistory(input.trim());
      router.push(`/search?q=${encodeURIComponent(input.trim())}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    addToHistory(suggestion);
    setShowSuggestions(false);
    router.push(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputFocus = () => {
    if (input.trim()) {
      setShowSuggestions(filteredSuggestions.length > 0);
    } else {
      setFilteredSuggestions(onboardingSuggestions);
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const getSuggestionIcon = (suggestion: string) => {
    if (history.includes(suggestion)) {
      return (
        <svg
          className="text-gray-400 mr-4"
          viewBox="0 0 24 24"
          height={20}
          width={20}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12,6 12,12 16,14" />
        </svg>
      );
    }
    return (
      <svg
        focusable="false"
        fill="#9aa0a6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={20}
        width={20}
      >
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    );
  };

  return (
    <div
      style={{
        margin: "5px auto 0",
        maxWidth: "527.4px",
        position: "relative",
      }}
    >
      <div
        className={` border border-[#dadce0] ${
          showSuggestions ? "border-b-0" : "border-b-[#dadce0]"
        }  ${
          showSuggestions ? "shadow-[0px_7px_10px_0px_rgba(0,_0,_0,_0.1)]" : ""
        } hover:shadow-[0px_7px_10px_0px_rgba(0,_0,_0,_0.1)]`}
        style={{
          //   border: `1px solid ${"#dadce0"}`,
          //   borderBottom: `${
          //     showSuggestions ? "none" : '1px solid ${"#dadce0"}'
          //   }`,
          borderRadius: showSuggestions ? "24px 24px 0 0" : "24px",
          //     ? "0 2px 8px 1px rgba(64,60,67,0.24)"
          //     : "0px 3px 10px 0px rgba(31,31,31,0.08)",
          //   transition: "all 200ms",
          //   borderBottom: "none",
        }}
      >
        <form className="" onSubmit={handleSubmit}>
          <div
            className=""
            style={{
              background: "#fff",
              //   display: "flex",
              alignItems: "center",
              height: "48px",
              padding: "0 15px",
              borderRadius: showSuggestions ? "24px 24px 0 0" : "24px",
            }}
          >
            <div
              className={`flex items-center h-[48px] ${
                showSuggestions ? "border-b border-[#e8eaed]" : "border-0"
              }  `}
            >
              <svg
                focusable="false"
                fill="#9aa0a6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height={20}
                width={20}
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input
                ref={inputRef}
                style={{
                  margin: "0 15px",
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  height: "100%",
                }}
                type="text"
                value={input}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="Search Google or type a URL"
              />
              <button
                type="submit"
                style={{
                  padding: "8px 16px",
                  color: "white",
                  borderRadius: "24px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                <svg
                  className="goxjub"
                  focusable="false"
                  viewBox="0 -960 960 960"
                  height={20}
                  width={20}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#1f1f1f"
                    d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm-40 280v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>

      {showSuggestions && (
        <div
          className={`${
            showSuggestions
              ? "shadow-[0px_7px_10px_0px_rgba(0,_0,_0,_0.1)]"
              : ""
          } hover:shadow-[0px_7px_10px_0px_rgba(0,_0,_0,_0.1)]`}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            background: "#fff",
            zIndex: 50,
            maxHeight: "240px",
            overflowY: "auto",
            borderBottom: `1px solid ${"#dadce0"}`,
            borderLeft: `1px solid ${"#dadce0"}`,
            borderRight: `1px solid ${"#dadce0"}`,
            borderTop: "none",
            borderRadius: "0 0 24px 24px",
            // boxShadow: isHovered
            //   ? "0 2px 8px 1px rgba(64,60,67,0.24)"
            //   : "0px 3px 10px 0px rgba(31,31,31,0.08)",
            // boxShadow: isHovered
            //   ? "0 4px 6px rgba(64,60,67,0.24), 4px 0 6px rgba(64,60,67,0.24), -4px 0 6px rgba(64,60,67,0.24)"
            //   : "0 3px 10px rgba(31,31,31,0.08), 4px 0 6px rgba(31,31,31,0.08), -4px 0 6px rgba(31,31,31,0.08)",
          }}
        >
          {filteredSuggestions.slice(0, 8).map((suggestion, index) => (
            <div
              key={index}
              style={{
                padding: "8px 15px",
                fontSize: "16px",
                color: "#202124",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              className="flex items-center"
              onClick={() => {
                if (onboardingSuggestions.includes(suggestion)) {
                  // Only set input, do not send message
                  useChatStore.getState().setInput(suggestion);
                  router.push('/chat');
                } else {
                  handleSuggestionClick(suggestion);
                }
              }}
            >
              {getSuggestionIcon(suggestion)}
              <Link
                href={`${
                  onboardingSuggestions.includes(suggestion) && "/chat"
                }`}
                className="text-[#52188c] open-sans"
                style={{ marginLeft: "10px" }}
              >
                {suggestion}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
