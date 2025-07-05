"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { searchApi } from "../../../lib/api";
import Link from "next/link";


interface SearchResult {
  title: string;
  url: string;
  description: string;
}

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchInput, setSearchInput] = useState(query);

  const {
    data: searchResults,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchApi(query),
    enabled: !!query,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  console.log("Search Results:", searchResults); // Debug log
  console.log("Query:", query); // Debug log

  if (isLoading) {
    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
        // style={{ marginLeft: "16px" }}
        className="min-h-screen bg-white"
      >
        {/* Header */}
        <div className="border-b border-gray-200">
          <div
            className="max-w-2xl  px-6"
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div className="flex justify-center items-center">
              <Link
                href="/"
                className="flex-shrink-0"
                style={{ marginRight: "32px" }}
              >
                <svg
                  className="h-8 w-auto"
                  viewBox="0 0 272 92"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    fill="#EA4335"
                  />
                  <path
                    d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                    fill="#4285F4"
                  />
                  <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
                  <path
                    d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                    fill="#EA4335"
                  />
                  <path
                    d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                    fill="#4285F4"
                  />
                </svg>
              </Link>
              <div className="flex-1 max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={searchInput}
                    style={{ paddingLeft: "18px" }}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-full h-11 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:shadow-md text-base"
                    placeholder="Search Google or type a URL"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        <div
          className="max-w-2xl  px-6"
          style={{
            paddingTop: "32px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{ marginLeft: "auto", marginRight: "auto" }}
            className="animate-pulse"
          >
            <div
              className="h-4 bg-gray-200 rounded w-32"
              style={{ marginBottom: "24px" }}
            ></div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="border-b border-gray-100 pb-6"
                style={{ marginBottom: "24px" }}
              >
                <div
                  className="h-3 bg-gray-200 rounded w-1/3"
                  style={{ marginBottom: "8px" }}
                ></div>
                <div
                  className="h-5 bg-gray-200 rounded w-4/5"
                  style={{ marginBottom: "8px" }}
                ></div>
                <div
                  className="h-4 bg-gray-200 rounded w-full"
                  style={{ marginBottom: "4px" }}
                ></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="border-b border-gray-200">
          <div
            className="max-w-7xl mx-auto px-6"
            style={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <div className="flex justify-center items-center">
              <Link
                href="/"
                className="flex-shrink-0"
                style={{ marginRight: "32px" }}
              >
                <svg
                  className="h-8 w-auto"
                  viewBox="0 0 272 92"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    fill="#EA4335"
                  />
                  <path
                    d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                    fill="#4285F4"
                  />
                  <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
                  <path
                    d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                    fill="#EA4335"
                  />
                  <path
                    d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                    fill="#4285F4"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Error State */}
        <div
          className="max-w-2xl  px-6 text-center"
          // style={{ paddingTop: "80px" }}
          style={{ marginLeft: "auto", marginRight: "auto", paddingTop: "80px"  }}
        >
          <h1
            className="text-2xl font-normal text-gray-800"
            style={{ marginBottom: "16px" }}
          >
            I am on a free trial so probably the api key is exhuasted my bad
          </h1>
          <p className="text-gray-600" style={{ marginBottom: "24px" }}>
            {error instanceof Error
              ? error.message
              : "An error occurred while searching"}
          </p>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Go back to search
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div
          className="max-w-2xl  px-6"
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="flex justify-center items-center">
            <Link
              href="/"
              className="flex-shrink-0"
              style={{ marginRight: "32px" }}
            >
              <svg
                className="h-8 w-auto"
                viewBox="0 0 272 92"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                  fill="#EA4335"
                />
                <path
                  d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
                  fill="#FBBC05"
                />
                <path
                  d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
                  fill="#4285F4"
                />
                <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
                <path
                  d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
                  fill="#EA4335"
                />
                <path
                  d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
                  fill="#4285F4"
                />
              </svg>
            </Link>
            <div
              style={{ marginLeft: "auto", marginRight: "auto" }}
              className="flex-1 max-w-2xl "
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchInput}
                  style={{ paddingLeft: "18px" }}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full h-11 px-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:shadow-md text-base"
                  placeholder="Search Google or type a URL"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div
          style={{ marginLeft: "auto", marginRight: "auto" }}
          className="max-w-2xl  px-6"
        >
          <nav
            className="flex space-x-8"
            style={{ paddingTop: "12px", paddingBottom: "12px" }}
          >
            <a
              href="#"
              style={{ marginLeft: "10px" }}
              className="flex items-center text-blue-600 border-b-2 border-blue-600 pb-3 text-sm font-medium gap-[3px]  "
            >
              All
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            {/* <a
              href="#"
              style={{ marginLeft: "10px" }}
              className="flex items-center text-gray-700 hover:text-gray-900 pb-3 text-sm gap-[8px]  "
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              Images
            </a>
            <a
              href="#"
              style={{ marginLeft: "10px" }}
              className="flex items-center text-gray-700 hover:text-gray-900 pb-3 text-sm gap-[8px]  "
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              Videos
            </a>
            <a
              href="#"
              style={{ marginLeft: "10px" }}
              className="flex items-center text-gray-700 hover:text-gray-900 pb-3 text-sm gap-[8px]  "
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2v1a2 2 0 002 2h8a2 2 0 002-2V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM8 8a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
              News
            </a> */}
          </nav>
        </div>
      </div>

      {/* Search Results */}
      <div
        className="max-w-2xl  px-6"
        style={{ paddingTop: "32px", marginLeft: "auto", marginRight: "auto" }}
      >
        <div style={{ marginBottom: "32px" }}>
          <p className="text-sm text-gray-600">
            About {searchResults?.results?.length || 0} results (0.45 seconds)
          </p>
        </div>

        {searchResults?.results?.map((result: SearchResult, index: number) => (
          <div
            key={index}
            className="border-b border-gray-100 pb-6"
            style={{ marginBottom: "24px" }}
          >
            <h3
              className="text-xl text-blue-800 hover:underline cursor-pointer"
              style={{ marginBottom: "4px" }}
            >
              <a href={result.url} target="_blank" rel="noopener noreferrer">
                {result.title}
              </a>
            </h3>
            <div
              className="text-sm text-gray-900"
              style={{ marginBottom: "4px" }}
            >
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-blue-600 hover:underline"
              >
                {result.url}
              </a>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-full">
              {result.description}
            </p>
          </div>
        ))}

        {(!searchResults?.results || searchResults.results.length === 0) && (
          <div
            className="text-center"
            style={{ paddingTop: "48px", paddingBottom: "48px" }}
          >
            <h2
              className="text-xl font-normal text-gray-800"
              style={{ marginBottom: "16px" }}
            >
              No results found for &quot;{query}&quot;
            </h2>
            <p className="text-gray-600" style={{ marginBottom: "24px" }}>
              Try checking your spelling or use more general terms
            </p>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Try a new search
            </Link>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="border-t border-gray-200 bg-gray-50"
        style={{ marginTop: "80px" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-900">
                About
              </a>
              <a href="#" className="hover:text-gray-900">
                Advertising
              </a>
              <a href="#" className="hover:text-gray-900">
                Business
              </a>
              <a href="#" className="hover:text-gray-900">
                How Search works
              </a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900">
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
