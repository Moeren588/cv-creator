"use client";

import React from "react";

export default function PrintButton() {
    const handlePrint = () => {
        window.print();
    }

    return (
        <button
          onClick={handlePrint}
          className="rounded-md bg-(--print-button-bg) px-4 py-2 text-(--text-on-accent) transition-colors hover:bg-(--print-button-bg-hover)"
        >
          Download as PDF
        </button>
    )
}