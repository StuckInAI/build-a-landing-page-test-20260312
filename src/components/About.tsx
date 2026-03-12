export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image area */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] gradient-bg flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold">Built for Scale</p>
                  <p className="text-white/70 mt-2">Enterprise-ready infrastructure</p>
                </div>
              </div>
            </div>
            {/* Floating cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Status</p>
                <p className="text-sm font-semibold text-gray-900">All systems go</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full" />
                <span className="text-xs font-semibold text-gray-700">10K+ Users</span>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 border-2 border-white" />
                ))}
                <span className="text-xs text-gray-500 ml-1 self-center">+more</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              We're on a mission to make work{' '}
              <span className="gradient-text">effortless</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded by a team of passionate engineers and designers, we set out
              to build the platform we always wished existed. One that's powerful
              enough for enterprise needs but simple enough for anyone to use.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Today, thousands of teams across the globe rely on our platform to
              power their workflows, drive collaboration, and deliver results that
              matter. We're just getting started.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: 'Founded', value: '2020' },
                { label: 'Team Members', value: '50+' },
                { label: 'Countries', value: '30+' },
                { label: 'Enterprise Clients', value: '200+' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold gradient-text">{item.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">
              Work With Us
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
