import { Presentation, PieChart, HelpCircle, MessageSquare } from "lucide-react"

const features = [
  {
    icon: <Presentation size={24} />,
    title: "Interactive Presentations",
    desc: "Create dynamic presentations with polls, quizzes, and word clouds.",
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-50 to-purple-50",
  },
  {
    icon: <PieChart size={24} />,
    title: "Real-time Polls",
    desc: "Gather instant feedback from your students.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    icon: <HelpCircle size={24} />,
    title: "Engaging Quizzes",
    desc: "Make learning fun with interactive quizzes.",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Live Q&A",
    desc: "Facilitate live sessions to answer student questions.",
    color: "from-pink-500 to-rose-600",
    bgColor: "from-pink-50 to-rose-50",
  },
]

const Features = () => {
  return (
    <section className="px-4 sm:px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            ✨ Powerful Features
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Engage Students
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Smartglass offers a comprehensive suite of interactive tools designed to transform your classroom experience
            and boost student participation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{item.icon}</div>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">{item.title}</h2>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">{item.desc}</p>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gray-100 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
            <span className="text-gray-600">Trusted by</span>
            <span className="font-bold text-gray-900">10,000+</span>
            <span className="text-gray-600">educators worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
