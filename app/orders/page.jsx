"use client";

import { useState, useEffect } from "react";
import LayoutWithSidebar from "../components/layout-with-sidebar";
import { 
  Clock, 
  CheckCircle, 
  DollarSign, 
  Package, 
  TrendingUp,
  Eye,
  Filter
} from "lucide-react";

export default function OrdersPage() {
  // Sample data - in real app this would come from API
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      customerName: "John Doe",
      product: "Wireless Headphones",
      quantity: 2,
      price: 299.99,
      status: "pending",
      date: "2024-01-15",
      total: 599.98
    },
    {
      id: "ORD-002", 
      customerName: "Jane Smith",
      product: "Smartphone Case",
      quantity: 1,
      price: 29.99,
      status: "completed",
      date: "2024-01-14",
      total: 29.99
    },
    {
      id: "ORD-003",
      customerName: "Mike Johnson", 
      product: "Laptop Stand",
      quantity: 1,
      price: 89.99,
      status: "completed",
      date: "2024-01-13",
      total: 89.99
    },
    {
      id: "ORD-004",
      customerName: "Sarah Wilson",
      product: "Bluetooth Speaker",
      quantity: 3,
      price: 79.99,
      status: "pending",
      date: "2024-01-12",
      total: 239.97
    },
    {
      id: "ORD-005",
      customerName: "David Brown",
      product: "USB Cable",
      quantity: 5,
      price: 12.99,
      status: "completed", 
      date: "2024-01-11",
      total: 64.95
    }
  ]);
 const [filterStatus, setFilterStatus] = useState("all");
 
const [loading, setLoading] = useState(true);

  // Calculate analytics
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(order => order.status === "pending").length;
  const completedOrders = orders.filter(order => order.status === "completed").length;
  const totalSales = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingSales = orders
    .filter(order => order.status === "pending")
    .reduce((sum, order) => sum + order.total, 0);

  // Filter orders based on status
  const filteredOrders = filterStatus === "all" 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  const getStatusColor = (status) => {
    return status === "pending" 
      ? "bg-yellow-100 text-yellow-800 border-yellow-200"
      : "bg-green-100 text-green-800 border-green-200";
  };

  return (
    <LayoutWithSidebar>
      <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Order Analytics Dashboard
            </h1>
            <p className="text-gray-600">
              Monitor your store's order performance and sales metrics
            </p>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Orders */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-800">{totalOrders}</p>
                </div>
                <div className="bg-black bg-opacity-10 p-3 rounded-lg">
                  <Package className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm font-medium">All time</span>
              </div>
            </div>

            {/* Pending Orders */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Pending Orders</p>
                  <p className="text-2xl font-bold text-yellow-600">{pendingOrders}</p>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <span className="text-yellow-600 text-sm font-medium">
                  ${pendingSales.toFixed(2)} pending value
                </span>
              </div>
            </div>

            {/* Completed Orders */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Completed Orders</p>
                  <p className="text-2xl font-bold text-green-600">{completedOrders}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <span className="text-green-600 text-sm font-medium">
                  {((completedOrders / totalOrders) * 100).toFixed(1)}% completion rate
                </span>
              </div>
            </div>

            {/* Total Sales */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Sales</p>
                  <p className="text-2xl font-bold text-gray-800">${totalSales.toFixed(2)}</p>
                </div>
                <div className="bg-black bg-opacity-10 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-black" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm font-medium">
                  ${(totalSales / totalOrders).toFixed(2)} avg order
                </span>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200">
            {/* Table Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
                
                {/* Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  >
                    <option value="all">All Orders</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customerName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.product}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${order.total.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-black hover:text-gray-700 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {filteredOrders.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No orders found for the selected filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}