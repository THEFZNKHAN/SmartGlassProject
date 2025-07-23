"use client"

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import toast from "react-hot-toast"
import { LayoutDashboard } from "lucide-react"

export default function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const auth = useAuth()

  const isActive = (path) => location.pathname === path

  const linkClass = (path) =>
    `relative px-6 py-3 rounded-2xl transition-all duration-300 font-semibold text-sm group ${
      isActive(path)
        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 scale-105"
        : "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 hover:scale-105"
    }`

  const mobileLinkClass = (path) =>
    `block px-6 py-4 rounded-2xl transition-all duration-300 font-semibold ${
      isActive(path)
        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
        : "text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-600"
    }`

  const handleLogout = () => {
    auth.logOutUser()
    setIsMobileMenuOpen(false)
    toast.success("User Logged Out!")
  }

  return (
    <nav className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-lg border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 hover:scale-105 transition-transform duration-300 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-gray-900 logo-font">SmartGlass</span>
              <span className="text-xs text-gray-500 font-medium -mt-1">Interactive Learning</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-2 bg-gray-50/80 rounded-3xl p-2 backdrop-blur-sm border border-gray-200/50">
              <Link to="/" className={linkClass("/")}>
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-lg bg-current opacity-20"></div>
                  <svg className="w-4 h-4 absolute" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </span>
              </Link>

             {auth?.user && (
  <>
    <Link to="/chat" className={mobileLinkClass("/chatbot")} onClick={() => setIsMobileMenuOpen(false)}>
      <span className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-4.97 0-9-3.582-9-8s4.03-8 9-8 9 3.582 9 8z"/>
          </svg>
        </div>
        <div>
          <div className="font-semibold">Chat With PDF</div>
          <div className="text-xs text-gray-500">AI-powered chat</div>
        </div>
      </span>
    </Link>

    <Link to="/dashboard" className={mobileLinkClass("/dashboard")} onClick={() => setIsMobileMenuOpen(false)}>
      <span className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
          <LayoutDashboard size={"20px"} />
        </div>
        <div>
          <div className="font-semibold">Dashboard</div>
          <div className="text-xs text-gray-500">Your workspace</div>
        </div>
      </span>
    </Link>
  </>

              )}
            </div>

            {/* Login/Logout Button */}
            {!auth.isLoggedIn ? (
              <Link
                to="/login"
                className="ml-6 px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ) : (
              <button
                className="ml-6 px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                onClick={handleLogout}
              >
                <span className="relative z-10">Logout</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-2xl text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300 border border-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl mt-4 p-6 shadow-2xl border border-gray-100">
            <div className="space-y-3">
              <Link to="/" className={mobileLinkClass("/")} onClick={() => setIsMobileMenuOpen(false)}>
                <span className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Home</div>
                    <div className="text-xs text-gray-500">Main dashboard</div>
                  </div>
                </span>
              </Link>

              <Link to="/chat" className={mobileLinkClass("/chatbot")} onClick={() => setIsMobileMenuOpen(false)}>
                <span className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-4.97 0-9-3.582-9-8s4.03-8 9-8 9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Chat With PDF</div>
                    <div className="text-xs text-gray-500">AI-powered chat</div>
                  </div>
                </span>
              </Link>

              {auth?.user && (
                <Link
                  to="/dashboard"
                  className={mobileLinkClass("/dashboard")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                      <LayoutDashboard size={"20px"} />
                    </div>
                    <div>
                      <div className="font-semibold">Dashboard</div>
                      <div className="text-xs text-gray-500">Your workspace</div>
                    </div>
                  </span>
                </Link>
              )}

              <div className="pt-4 border-t border-gray-200">
                {!auth.isLoggedIn ? (
                  <Link
                    to="/login"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center rounded-2xl font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                      Login to Continue
                    </span>
                  </Link>
                ) : (
                  <button
                    className="block w-full px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-center rounded-2xl font-bold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                    onClick={handleLogout}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
