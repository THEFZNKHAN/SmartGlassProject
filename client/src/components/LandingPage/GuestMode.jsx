"use client"

import { useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { API, handleApi } from "../../services/api"

export default function GuestMode() {
  const navigate = useNavigate()
  const { provideGuestAuth } = useAuth()
  const [sessionCode, setSessionCode] = useState("")
  const [name, setName] = useState("")
  const [openPopUp, setOpenPopUp] = useState(false)
  const [sessionType, setSessionType] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!/^\w{6}$/.test(sessionCode)) {
      return toast.error("Session code must be exactly 6 characters")
    }
    const res = await handleApi(API.get(`/session/${sessionCode}`))
    if (res.error) return toast.error(res.error.message)
    if (res.status === 200) {
      setSessionType(res.data.sessionType)
      setOpenPopUp(true)
    }
  }

  const createGuestAuth = async (e) => {
    e.preventDefault()
    if (!name) return toast.error("Please Enter Your Name!")
    setLoading(true)
    const res = await handleApi(API.post("/auth/guest", { name, sessionCode }))
    if (res.error) toast.error(res.error.message)
    if (res.status === 200) {
      provideGuestAuth(res.data)
      setName("")
      setSessionCode("")
      setOpenPopUp(false)
      navigate(
        sessionType === "Poll"
          ? `/poll/${sessionCode}`
          : sessionType === "Quiz"
            ? `/quiz/${sessionCode}`
            : `/join-qna/${sessionCode}`,
      )
    }
    setLoading(false)
  }

  return (
    <>
      {openPopUp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md transform animate-in slide-in-from-bottom-4">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👋</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome!</h3>
                <p className="text-gray-600">Enter your name to join the session</p>
              </div>

              <form onSubmit={createGuestAuth} className="space-y-4">
                <div className="relative">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors text-lg"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl px-6 py-4 font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Joining...
                    </div>
                  ) : (
                    "Join Session"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-6 shadow-lg border border-purple-100">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Join as Guest</h3>
          <p className="text-gray-600">Enter the 6-digit session code to participate</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              value={sessionCode}
              onChange={(e) => setSessionCode(e.target.value)}
              placeholder="Enter Session Code..."
              className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors text-lg font-mono tracking-wider text-center"
              maxLength={6}
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Join Session
          </button>
        </form>
      </div>
    </>
  )
}
