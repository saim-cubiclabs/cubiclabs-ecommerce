'use client';
import ProtectedRoute from './components/protectedroutes';
import Link from 'next/link';
import LayoutWithSidebar from './components/layout-with-sidebar';


export default function Home() {
  return (
      <ProtectedRoute>
      <LayoutWithSidebar>
        <div className="flex items-center justify-center p-4 min-h-screen">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md w-full max-w-md space-y-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 font-sans">Welcome to Your Store</h1>
            <p className="text-gray-600">Get started by setting up your store or managing your dashboard</p>
            
            <div className="space-y-4">
              <Link 
                href="/store-setup" 
                className="block w-full font-sans bg-black text-white py-3 px-6 rounded-xl hover:bg-black-700 transition font-semibold"
              >
                Set Up New Store
              </Link>
              
              <Link 
                href="/orders" 
                className="block w-full font-sans bg-white-600 text-black py-3 px-6 rounded-lg hover:bg-black-700 transition font-semibold"
              >
                Go to Orders
              </Link>
            </div>
          </div>
        </div>
      </LayoutWithSidebar>
      </ProtectedRoute>
  
  );
}