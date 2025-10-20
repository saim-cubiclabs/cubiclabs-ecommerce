"use client";

import { useState } from "react";
import LayoutWithSidebar from "../components/layout-with-sidebar";
import { Eye } from "lucide-react";

export default function DeliveryPage() {
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      customerName: "John Doe",
      product: "Wireless Headphones",
      quantity: 2,
      status: "out-for-delivery",
      date: "2024-01-15",
      total: 599.98,
    },
    {
      id: "ORD-002",
      customerName: "Jane Smith",
      product: "Smartphone Case",
      quantity: 1,
      status: "delivered",
      date: "2024-01-14",
      total: 29.99,
    },
    {
      id: "ORD-003",
      customerName: "Mike Johnson",
      product: "Laptop Stand",
      quantity: 1,
      status: "out-for-delivery",
      date: "2024-01-13",
      total: 89.99,
    },
    {
      id: "ORD-004",
      customerName: "Emily Davis",
      product: "Gaming Mouse",
      quantity: 1,
      status: "delivered",
      date: "2024-01-10",
      total: 59.99,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "out-for-delivery":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <LayoutWithSidebar>
      <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Delivery Orders
            </h1>
            <p className="text-gray-600">
              Manage orders out for delivery and delivered
            </p>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Orders
              </h2>
            </div>

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
                      Workflow
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
                  {orders.map((order) => (
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

                      {/* Status Badge */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status === "out-for-delivery"
                            ? "Out for Delivery"
                            : "Delivered"}
                        </span>
                      </td>

                      {/* Workflow Dots */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 rounded-full bg-green-500 border-green-500"></div>
                          <div
                            className={`w-3 h-3 rounded-full border ${
                              order.status === "out-for-delivery" ||
                              order.status === "delivered"
                                ? "bg-green-500 border-green-500"
                                : "bg-gray-200 border-gray-300"
                            }`}
                          ></div>
                          <div
                            className={`w-3 h-3 rounded-full border ${
                              order.status === "delivered"
                                ? "bg-green-500 border-green-500"
                                : "bg-gray-200 border-gray-300"
                            }`}
                          ></div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                        <button
                          className="text-black hover:text-gray-700 transition-colors"
                          onClick={() => alert(`View order ${order.id}`)}
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {order.status === "out-for-delivery" && (
                          <select
                            value={order.status}
                            onChange={(e) =>
                              updateOrderStatus(order.id, e.target.value)
                            }
                            className="border border-gray-300 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-black"
                          >
                            <option value="out-for-delivery">
                              Out for Delivery
                            </option>
                            <option value="delivered">Mark as Delivered</option>
                          </select>
                        )}

                        {order.status === "delivered" && (
                          <span className="text-green-600 text-xs font-medium px-2 py-1 bg-green-50 rounded">
                            Completed
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
