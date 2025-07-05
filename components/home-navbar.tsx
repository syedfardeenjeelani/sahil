import Link from "next/link";
import React from "react";
import Image from "next/image";

const HomeNavbar = () => {
  return (
    <div
      style={{
        padding: "5px",
        textDecoration: "none",
      }}
      className="max-w-[1520px] h-[60px] flex items-center   "
    >
      <Link
        href={"/about"}
        style={{
          margin: "0px 5px 0px 15px",
        }}
        className=" hover:underline hover:cursor-pointer w-[46.59px] h-[26.8px] text-[13px] text-[#1F1F1F] p-[5px] mt-[0px] mb-[0px] mr-[5px] ml-[15px] "
      >
        About
      </Link>
      <Link
        href={""}
        className=" w-[43.46px] hover:underline cursor-not-allowed  h-[26.8px] text-[13px] text-[#1F1F1F] p-[5px] mt-[0px] mb-[0px]  ml-[5px] mr-[5px]  "
      >
        Store
      </Link>
      <div className=" w-full flex justify-end items-center h-[52px] ">
        <div
          style={{
            margin: "0px 11px 4px 15px",
          }}
        >
          <Link
            href={""}
            className="text-[12px] hover:underline cursor-pointer text-[#000000DE]  "
            // href=""
          >
            Projects
          </Link>
          <Link
            href={""}
            style={{ paddingLeft: "15px" }}
            className="text-[12px] cursor-not-allowed hover:underline  text-[#000000DE]  "
            // href=""
          >
            Images
          </Link>
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
            cursor: "not-allowed",
          }}
          className="w-[38px] cursor-not-allowed h-[38px] hover:bg-[#E2E3E3] transition-colors duration-200 rounded-[50%]  items-center flex justify-center    "
        >
          <Link
            href={""}
            aria-label="Search Labs"
            // href="https://labs.google.com/search?source=hp"
            target="_top"
            className="cursor-not-allowed"
            role="button"
            tabIndex={0}
            style={
              {
                //   cursor: "pointer",
              }
            }
          >
            <svg
              className="gb_E cursor-not-allowed"
              focusable="false"
              height="22px"
              fill="#5f6368"
              viewBox="0 -960 960 960"
              width="22px"
            >
              <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z" />
            </svg>
          </Link>
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
          className="w-[48px] cursor-not-allowed h-[48px] hover:bg-[#E2E3E3] transition-colors duration-200 rounded-[50%]  items-center flex justify-center  "
        >
          <Link
            href={""}
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
              //   position: "relative",
              width: "32px",
              WebkitTapHighlightColor: "transparent",
              WebkitBoxSizing: "border-box",
              boxSizing: "border-box",
              float: "right",
              outline: "none",
              textDecoration: "none",
            }}
          >
            <svg
              className="gb_F cursor-not-allowed"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                fill="#5f6368"
                d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
              />
              <image
                // src="https://ssl.gstatic.com/gb/images/bar/al-icon.png"
                // alt=""
                className="cursor-not-allowed"
                height={24}
                width={24}
                style={{ border: "none", display: "none 9" }}
              />
            </svg>
          </Link>
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
            cursor: "not-allowed",
            marginLeft: "6px",
          }}
          className="w-[38px] h-[38px] hover:bg-[#E2E3E3]   transition-colors duration-200 rounded-[50%]  items-center flex justify-center cursor-not-allowed  "
        >
          <Link
            href={""}
            aria-label="Search Labs"
            // href="https://labs.google.com/search?source=hp"
            target="_top"
            role="button"
            tabIndex={0}
          >
            <Image
              className="cursor-not-allowed"
              style={{ borderRadius: "50%", height: 28, width: 28 }}
              src="/icon.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
