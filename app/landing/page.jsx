"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Zap, Globe, Shield } from "lucide-react";

export default function LandingPage() {
  const features = [
    "Setup your store in minutes",
    "Mobile-responsive design",
    "Secure payment processing",
    "Real-time analytics",
    "24/7 customer support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold  sm:text-left text-black">CubicLabs E-Commerce</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-bold transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-black text-white px-4 py-2 rounded-xl text-sm  sm:text-left font-medium hover:bg-gray-800 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Start Selling Online in{" "}
                <span className="text-black">Hours</span>
                <br />
                Not in <span className="text-black">Days</span>
              </h1>

              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                Launch your e-commerce store with our powerful, easy-to-use
                platform. No technical skills required. Start selling today!
              </p>

              {/* Feature List */}
              <div className="mt-8 space-y-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center lg:justify-start"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/signup"
                  className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center justify-center group"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/login"
                  className="border-2 border-black text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black hover:text-white transition-all duration-200"
                >
                  Login to Store 
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-bold text-black">3+</div>
                  <div className="text-sm text-gray-600">Active Stores</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-black">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative z-10 flex justify-center">
                <div className="w-full max-w-lg">
                  <Image
                    src="/ecommobileui-removebg-preview.png"
                    alt="E-commerce Mobile UI"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    priority
                    unoptimized
                  />
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent rounded-3xl transform rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CubicLabs?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build, manage, and grow your online
              business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Lightning Fast Setup
              </h3>
              <p className="text-gray-600">
                Get your store online in minutes with our intuitive setup
                wizard. No coding required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Global Reach (coming soon)
                </h3>
              </div>
              <p className="text-gray-600">
                Sell worldwide with multi-currency support and international
                shipping options.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security with SSL encryption built-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Online Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join us as successful entrepreneur who chose CubicLabs
            E-commerce setup
          </p>
          <Link
            href="mailto:info@cubiclabs.net"
            className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Contact Sales
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
