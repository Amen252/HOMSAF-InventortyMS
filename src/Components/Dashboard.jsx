import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlusCircle, Package, Truck, ClipboardList, DollarSign, User } from "lucide-react"; // Import User icon
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [totals, setTotals] = useState({
    products: 0,
    suppliers: 0,
    orders: 0,
    sales: 0,
    users: 0, // Add a users count to the state
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // To handle errors during API calls

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, suppliersRes, ordersRes, salesRes, usersRes] = await Promise.all([
          axios.get("/api/products"),
          axios.get("/api/suppliers"),
          axios.get("/api/orders"),
          axios.get("/api/sales"),
          axios.get("/api/users"),
        ]);

        setTotals({
          products: productsRes.data.length,
          suppliers: suppliersRes.data.length,
          orders: ordersRes.data.length,
          sales: salesRes.data.length,
          users: usersRes.data.length,
        });
      } catch (error) {
        setError("Error fetching dashboard data");
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 bg-gray-100 rounded-lg  min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        {/* Increase grid to 5 columns on larger screens */}
        <DashboardCard  icon={<User />} title="Users" count={totals.users} color="bg-teal-500" />
        <DashboardCard icon={<Package />} title="Products" count={totals.products} color="bg-blue-500" />
        <DashboardCard icon={<Truck />} title="Suppliers" count={totals.suppliers} color="bg-green-500" />
        <DashboardCard icon={<ClipboardList />} title="Orders" count={totals.orders} color="bg-purple-500"  />
        <DashboardCard icon={<DollarSign />} title="Sales" count={totals.sales} color="bg-yellow-500" />
      </div>

      <div>
        <button
          onClick={() => navigate("/register")}
          className="inline-flex items-center px-5 py-3 bg-pink-900 text-white rounded-lg hover:bg-pink-800 transition"
        >
          <PlusCircle className="mr-2" />
          Register New Product
        </button>
      </div>
    </div>
  );
};

const DashboardCard = ({ icon, title, count, color }) => (
  <div className="bg-white rounded-xl shadow p-6 flex items-center space-x-4">
    <div className={`p-4 rounded-full text-white ${color}`}>{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold">{count}</p>
    </div>
  </div>
);

export default Dashboard;
