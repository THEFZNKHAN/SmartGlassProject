import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="px-4 sm:px-6 py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-violet-500/30 text-violet-200 rounded-full text-sm font-medium mb-6">
            🚀 Join the Revolution
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Your Classroom?
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Join thousands of educators using Smartglass to create engaging and interactive learning experiences that
            students love.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link
            to={"/login"}
            className="group px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-violet-500/25 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Start Free Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <button className="px-10 py-5 border-2 border-gray-400 text-gray-300 font-bold rounded-2xl hover:border-violet-400 hover:text-violet-300 transition-all duration-300 backdrop-blur-sm">
            Schedule Demo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-black text-white mb-2">10K+</div>
            <div className="text-gray-400">Active Teachers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-white mb-2">500K+</div>
            <div className="text-gray-400">Students Engaged</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-white mb-2">98%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
