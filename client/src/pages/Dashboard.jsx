
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import SessionCodePopup from "../components/SessionCodePopup"
import { useState } from "react"

export default function Dashboard() {
  const { user } = useAuth()
  const [shadowPopup, setShowPopup] = useState(false)

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 max-w-md">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🔒</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Please log in</h2>
          <p className="text-gray-300 mt-2">You need to log in to view your dashboard.</p>
        </div>
      </div>
    )
  }

  const SectionCard = ({ title, description, icon, href, onClick = null }) => (
    <div
      className="p-6 bg-gradient-to-br from-gray-900/90 to-slate-900/90 border border-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
      onClick={onClick}
    >
      <Link to={href}>
        <h2 className="text-xl font-semibold text-white flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-teal-300 transition-all duration-300">
            {title}
          </span>
        </h2>
        <p className="text-gray-300 text-sm pl-[60px]">{description}</p>
      </Link>
    </div>
  )

  return (
    <>
      {shadowPopup && <SessionCodePopup onClose={() => setShowPopup(false)} role={user?.role} />}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-10 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              {/* Welcome Banner Inside */}
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6 shadow-lg shadow-emerald-500/20">
                  <span className="text-4xl">🎓</span>
                </div>
                <h1 className="text-5xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Welcome to
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    SmartGlass
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Your all-in-one platform for interactive learning and engagement
                </p>
              </div>

              <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6 mx-auto block text-center">
                {user.role === "Educator" ? "🎓 Educator Portal" : "📚 Student Portal"}
              </div>

              <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-10">
                {user.role === "Educator" ? "🎓 Educator Dashboard" : "📚 Student Dashboard"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {user.role === "Educator" ? (
                  <>
                    <SectionCard
                      title="Create Poll"
                      icon="👩‍🎓"
                      description="Manage and organize your learning sessions."
                      href={"/create/poll"}
                    />
                    <SectionCard
                      title="Create Quizzes"
                      icon="📝"
                      description="Design quizzes for students and evaluate results."
                      href={"/create/quiz"}
                    />
                    <SectionCard
                      title="Host Live QnA"
                      icon="📢"
                      description="Create and launch a real-time QnA session for your students."
                      href="/create/live-qna"
                    />
                    <SectionCard
                      title="Session Analytics"
                      icon="⏱"
                      description="Insights on student activity and sessions."
                      onClick={() => setShowPopup(true)}
                    />
                  </>
                ) : (
                  <>
                    <SectionCard
                      title="Join Sessions"
                      icon="🧠"
                      description="Participate in educator-hosted live sessions."
                      onClick={() => setShowPopup(true)}
                    />
                    <SectionCard
                      title="Generate Summary"
                      icon="📄"
                      description="Generate meaningfull and easy to read summary from your documents"
                      href={"/summary"}
                    />
                    <SectionCard
                      title="AI Chat Assistant"
                      icon="🤖"
                      description="Ask questions and get instant AI support."
                      href={"/chat-with-grok"}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
