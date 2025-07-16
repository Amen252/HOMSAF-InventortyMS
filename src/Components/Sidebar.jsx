import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Package, Truck, ShoppingCart, User } from 'lucide-react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen  w-80 flex flex-col bg-pink-900 text-white shadow-lg">
      <div className="text-2xl font-bold p-6 border-b border-gray-700 flex justify-between items-center"> 
        <div>HOMSAF IS</div>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span className="text-2xl">{isSidebarOpen ? '×' : '☰'}</span>
        </button>
      </div>

      {/* Sidebar content */}
      <div
        className={`lg:flex flex-col flex-1 space-y-4 px-4 py-6 bg-pink-900 overflow-y-auto ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}
      >
        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-2 rounded font-bold bg-pink-700 text-xl hover:bg-pink-700 transition"
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>
        <Link
          to="/suppliers"
          className="flex items-center gap-3 p-2 rounded font-bold text-xl hover:bg-pink-700 transition"
        >
          <Truck className="w-5 h-5" />
          Suppliers
        </Link>
        <Link
          to="/products"
          className="flex items-center gap-3 p-2 rounded font-bold text-xl hover:bg-pink-700 transition"
        >
          <Package className="w-5 h-5" />
          Products
        </Link>
        <Link
          to="/orders"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 font-bold text-xl hover:bg-pink-700 transition"
        >
          <ShoppingCart className="w-5 h-5" />
          Orders
        </Link>
        <Link
          to="/users"
          className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 font-bold text-xl hover:bg-pink-700 transition"
        >
          <User className="w-5 h-5" />
          Users
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
