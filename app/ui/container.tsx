import React from "react";

export default function Container({ children, className }: { children: any, className?: string }) {
  return (
    <div className="dark:bg-gray-800">
      <div className={`container mx-auto px-3 min-h-screen ${className && className}`}>{children}</div>
    </div>
  )
}
