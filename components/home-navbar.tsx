import React from "react";

const HomeNavbar = () => {
  const linkStyleBase = {
    color: "#1F1F1F",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    padding: "5px",
    textDecoration: "none" as const,
    display: "inline-block",
    height: "26.8px",
  };
  return (
    <div
      style={{
        padding: "5px",
        textDecoration: "none",
      }}
      className="max-w-[1520px] h-[60px] flex items-center   "
    >
      <a
        style={{
          margin: "0px 5px 0px 15px",
        }}
        className=" hover:underline hover:cursor-pointer w-[46.59px] h-[26.8px] text-[13px] text-[#1F1F1F] p-[5px] mt-[0px] mb-[0px] mr-[5px] ml-[15px] "
      >
        About
      </a>
      <a className=" w-[43.46px] hover:underline hover:cursor-pointer  h-[26.8px] text-[13px] text-[#1F1F1F] p-[5px] mt-[0px] mb-[0px]  ml-[5px] mr-[5px]  ">
        Store
      </a>
      <div className=" w-full flex justify-end items-center h-[52px] ">
        <div
          style={{
            margin: "0px 11px 4px 15px",
          }}
        >
          <a
            className="text-[12px] hover:underline hover:cursor-pointer text-[#000000DE]  "
            href=""
          >
            Gmail
          </a>
          <a
            style={{ paddingLeft: "15px" }}
            className="text-[12px] hover:underline hover:cursor-pointer text-[#000000DE]  "
            href=""
          >
            Images
          </a>
        </div>
        <div
          style={{
            boxSizing: "border-box",
            height: "38px",
            width: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "4px",
            marginLeft: "8px",
          }}
          className="w-[38px] h-[38px] hover:bg-[#E2E3E3] transition-colors duration-200 rounded-[50%]  items-center flex justify-center  cursor-pointer  "
        >
          <a
            aria-label="Search Labs"
            href="https://labs.google.com/search?source=hp"
            target="_top"
            role="button"
            tabIndex={0}
            style={{
              cursor: "pointer",
            }}
          >
            <svg
              className="gb_E"
              focusable="false"
              height="22px"
              fill="#5f6368"
              viewBox="0 -960 960 960"
              width="22px"
            >
              <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z" />
            </svg>
          </a>
        </div>
        <div
          style={{
            boxSizing: "border-box",
            height: "38px",
            width: "38px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "4px",
            marginLeft: "4px",
          }}
          className="w-[48px] h-[48px] hover:bg-[#E2E3E3] transition-colors duration-200 rounded-[50%]  items-center flex justify-center  cursor-pointer  "
        >
          <a
            aria-label="Search Labs"
            target="_top"
            role="button"
            tabIndex={0}
            style={{
              borderRadius: "50%",
              backgroundColor: "transparent",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: 0,
              display: "inline-block",
              height: "32px",
              padding: "4px",
              position: "relative",
              width: "32px",
              WebkitTapHighlightColor: "transparent",
              WebkitBoxSizing: "border-box",
              boxSizing: "border-box",
              float: "right",
              outline: "none",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <svg className="gb_F" focusable="false" viewBox="0 0 24 24">
              <path
                fill="#5f6368"
                d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
              />
              <image
                // src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
                // alt=""
                height={24}
                width={24}
                style={{ border: "none", display: "none 9" }}
              />
            </svg>
          </a>
        </div>
        <div
          style={{
            boxSizing: "border-box",
            height: "37px",
            width: "37px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "4px",
            marginLeft: "6px",
          }}
          className="w-[38px] h-[38px] hover:bg-[#E2E3E3]   transition-colors duration-200 rounded-[50%]  items-center flex justify-center cursor-pointer  "
        >
          <a
            aria-label="Search Labs"
            href="https://labs.google.com/search?source=hp"
            target="_top"
            role="button"
            tabIndex={0}
            style={{
              cursor: "pointer",
            }}
          >
            <img
              style={{ borderRadius: "50%", height: 32, width: 32 }}
              src="/icon.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
<svg class="lnXdpd" height="92" viewBox="0 0 272 92" width="272" xmlns="http://www.w3.org/2000/svg"><path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"></path><path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"></path><path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"></path><path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"></path><path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"></path><path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"></path></svg>