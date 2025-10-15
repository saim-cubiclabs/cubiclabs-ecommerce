"use client";

import Sidebar from "./sidebar";

export default function LayoutWithSidebar({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-auto md:ml-0">
        <div className="md:hidden h-16"></div> {/* Spacer for mobile menu button */}
        {children}
      </main>
    </div>
  );
}


