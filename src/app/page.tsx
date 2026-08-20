import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-(--background) text-(--foreground)">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-[var(--accent)]">
                  Gigly
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Future ConnectButton placeholder */}
              <button className="bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 rounded-[12px] font-medium transition-colors hover:bg-teal-700">
                Connect
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Metric Cards Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm flex flex-col justify-center">
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Active Jobs
            </h3>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm flex flex-col justify-center">
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Pending Review
            </h3>
            <p className="text-2xl font-bold text-[var(--pending)]">0</p>
          </div>
          <div className="bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm flex flex-col justify-center">
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Total Earned
            </h3>
            <p className="text-2xl font-bold text-[var(--success)]">
              0.00 USDC
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main content area left */}
          <div className="bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm min-h-[300px] flex flex-col">
            <h2 className="text-lg font-semibold mb-4 border-b border-gray-100 pb-2">
              Browse Freelancers
            </h2>
            <div className="flex-grow flex items-center justify-center">
              <div className="text-center text-gray-500">
                <p>No freelancers found.</p>
              </div>
            </div>
          </div>

          {/* Main content area right */}
          <div className="bg-white p-6 rounded-[12px] border border-gray-100 shadow-sm min-h-[300px] flex flex-col">
            <h2 className="text-lg font-semibold mb-4 border-b border-gray-100 pb-2">
              My Jobs
            </h2>
            <div className="flex-grow flex flex-col items-center justify-center space-y-4">
              <div className="text-center text-gray-500">
                <p>No active jobs yet.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Gigly. Escrow for the gig economy.
        </div>
      </footer>
    </div>
  );
}
