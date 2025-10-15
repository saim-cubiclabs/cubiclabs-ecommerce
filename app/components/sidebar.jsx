"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Home,
  Settings,
  BarChart3,
  Package,
  ClipboardList,
  Truck,
  Store,
  Banknote,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  LogIn,
  UserPlus,
  Users
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Dashboard",
      href: "/store-dashboard",
      icon: BarChart3,
    },
    {
      name: "Store Setup",
      href: "/store-setup",
      icon: Store,
    },

    {
      name: "Products",
      href: "/store-product",
      icon: Package,
    },
    {
      name: "Order Management",
      href: "/orders",
      icon: ClipboardList,
    },
    {
      name: "Payments",
      href: "/payments",
      icon: Banknote,
    },
    {
      name: "Delivery",
      href: "/delivery",
      icon: Truck,
    },
     {
      name: "Customer",
      href: "/customer",
      icon: Users,
    },
    {
      name: "Setting",
      href: "/setting",
      icon: Settings,
    },
    {
      name: "Login",
      href: "/login",
      icon: LogIn,
    },
    {
      name: "Sign Up",
      href: "/signup",
      icon: UserPlus,
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleMenuClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-lg md:hidden"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        bg-white shadow-lg transition-all duration-300 min-h-screen z-40
        ${
          isMobile
            ? `fixed left-0 top-0 ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              } w-64`
            : `relative ${isCollapsed ? "w-16" : "w-64"}`
        }
      `}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {(!isCollapsed || isMobile) && (
              <h2 className="text-xl font-bold text-gray-800">Store Manager</h2>
            )}
            {!isMobile && (
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isCollapsed ? (
                  <ChevronRight size={20} />
                ) : (
                  <ChevronLeft size={20} />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleMenuClick}
                    className={`flex items-center p-3 rounded-lg transition-colors ${
                      pathname === item.href
                        ? "bg-black text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <IconComponent size={20} />
                    {(!isCollapsed || isMobile) && (
                      <span className="ml-3 font-medium">{item.name}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        {(!isCollapsed || isMobile) && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Store Management System</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
