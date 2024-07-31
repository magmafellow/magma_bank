"use client";

import { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function BankCard({ className }: { className?: string }) {
  const [hiddenCodes, setHiddenCodes] = useState(true);
  const [hiddenAmount, setHiddenAmount] = useState(false);

  const hiddenCodesHandler = () => {
    setHiddenCodes(!hiddenCodes);
  };
  const hiddenAmountHandler = () => {
    setHiddenAmount(!hiddenAmount);
  };

  return (
    <div
      className={`max-w-[475px] rounded-xl border-2 border-sky-800 px-3 py-2 text-lg dark:border-sky-300 dark:bg-sky-900 ${className}`}
    >
      <div className="mb-4">Romanov Alexey</div>

      <div className="mb-3 flex items-baseline justify-center gap-x-2">
        <span className="text-3xl font-medium">
          {hiddenAmount ? "***,***.***" : "190,97"}
        </span>{" "}
        {!hiddenAmount && <span className="text-sm font-semibold">rub</span>}
        <span className="relative -top-2" onClick={hiddenAmountHandler}>
          <FaEye className="text-2xl cursor-pointer hover:text-sky-400 hover:dark:text-sky-700" />
        </span>
      </div>
      <div className="mb-2 text-center">
        <span className="text-lg font-light tracking-wide">
          secondary income
        </span>
      </div>
      <div className="flex items-center justify-end gap-x-2">
        <span className="text-sm">
          {hiddenCodes ? "****-**-**" : "2025-01-15"}
        </span>
        <span className="text-sm font-medium">
          {hiddenCodes ? "***-*****-**" : "198-00001-aa"}
        </span>
        <FaEye
          className="cursor-pointer hover:text-sky-400 hover:dark:text-sky-700"
          onClick={hiddenCodesHandler}
        />
      </div>
    </div>
  );
}
