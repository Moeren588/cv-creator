"use client";

import React from "react";

export default function PrintButton() {
    const handlePrint = () => {
        window.print();
    }

    return (
        <button
          onClick={handlePrint}
          className="rounded-md bg-(--preset-button-color-active) px-4 py-2 text-(--foreground)"
        >
          Download as PDF
        </button>
    )
}