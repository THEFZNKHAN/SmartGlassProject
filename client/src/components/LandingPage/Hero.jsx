import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 py-16 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 min-h-[80vh] flex items-center">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            🚀 Transform Education
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Engage Your Students
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Interactive Learning
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Create dynamic lessons with real-time polls, quizzes, and interactive tools to boost engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/login"
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Started Free
            </Link>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Live Poll Active</h3>
                    <p className="text-gray-500 text-sm">127 students responding</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Option A</span>
                    <span className="text-emerald-600 font-semibold">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full w-[45%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Option B</span>
                    <span className="text-teal-600 font-semibold">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-3 rounded-full w-[35%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Option C</span>
                    <span className="text-cyan-600 font-semibold">20%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full w-[20%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white text-2xl">🎯</span>
            </div>

            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white text-2xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
