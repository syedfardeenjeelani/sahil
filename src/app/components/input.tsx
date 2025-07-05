import React from 'react'

const Input = () => {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #dadce0",
        borderRadius: "26px",
        padding: "12px",
        margin: "5px auto 0",
      }}
      className="max-w-[527.4px] flex items-center h-[48px] cursor-pointer bg-white 
    border 
    border-[#dadce0] 
    shadow-[0px_3px_10px_0px_rgba(31,31,31,0.08)] 
    rounded-[26px]  
    transition-all 
    duration-200 
    hover:shadow-[0_2px_8px_1px_rgba(64,60,67,0.24)] 
    hover:border-transparent "
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
        style={{ 
          margin: "0 15px ",
        }}
         type="text"
        className="focus:outline-none "
      />
    </div>
  );
}

export default Input