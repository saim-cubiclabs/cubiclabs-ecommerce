"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  Users,
  LogOut,
} from "lucide-react";
import useAuth from "../hooks/useAuth";
import { useToast } from "../hooks/useToast";
import Toast from "./toast";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const { toast, showToast, hideToast } = useToast();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      showToast("Logged out successfully", "success");
      router.push("/login");
    } catch (error) {
      showToast("Error logging out", "error");
    }
  };

  const baseMenuItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
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
      name: "Orders & Analytics",
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
  ];

  const authMenuItems = user
    ? [
        {
          name: "Logout",
          href: "#",
          icon: LogOut,
          onClick: handleLogout,
        },
      ]
    : [
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

  const menuItems = [...baseMenuItems, ...authMenuItems];

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
                <li key={item.href || item.name}>
                  {item.onClick ? (
                    <button
                      onClick={() => {
                        handleMenuClick();
                        item.onClick();
                      }}
                      className={`w-full flex items-center p-3 rounded-lg transition-colors text-left ${
                        pathname === item.href
                          ? "bg-black text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <IconComponent size={20} />
                      {(!isCollapsed || isMobile) && (
                        <span className="ml-3 font-medium">{item.name}</span>
                      )}
                    </button>
                  ) : (
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
                  )}
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
              {user && (
                <p className="text-xs text-gray-500 mt-1">
                  {user.displayName || user.email}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  );
}
