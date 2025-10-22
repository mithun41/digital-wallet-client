import { Bell } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const Notifications = ({ transactions = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [unseenCount, setUnseenCount] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const dropdownRef = useRef(null);

  // ✅ Detect latest 5 transactions + unseen count dynamically
  useEffect(() => {
    if (transactions && transactions.length > 0) {
      const sorted = [...transactions]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
      setRecentTransactions(sorted);
      const unseen = sorted.filter((t) => !t.seen).length;
      setUnseenCount(unseen);
    } else {
      setRecentTransactions([]);
      setUnseenCount(0);
    }
  }, [transactions]);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Mark as seen when opened
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      const updated = recentTransactions.map((t) => ({ ...t, seen: true }));
      setRecentTransactions(updated);
      setUnseenCount(0);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="relative text-white focus:outline-none"
      >
        <Bell size={22} />
        {unseenCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            {unseenCount}
          </span>
        )}
      </button>

      {/* ✅ Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 z-50">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Recent Transactions
          </h3>
          {recentTransactions.length === 0 ? (
            <p className="text-gray-500 text-sm">No recent transactions.</p>
          ) : (
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {recentTransactions.map((tx, i) => (
                <li
                  key={i}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {tx.type === "sendMoney"
                        ? `Sent ৳${tx.amount}`
                        : tx.type === "receiveMoney"
                        ? `Received ৳${tx.amount}`
                        : `Transaction ৳${tx.amount}`}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(tx.date).toLocaleString()}
                    </p>
                  </div>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      tx.seen ? "bg-gray-400" : "bg-green-500"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
