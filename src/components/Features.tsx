const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description:
      'Optimized for performance at every level. Our platform delivers sub-second response times so your team can stay in the flow.',
    color: 'from-yellow-400 to-orange-500',
    bg: 'bg-yellow-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption and compliance built in. Your data is protected with the highest standards of security and privacy.',
    color: 'from-green-400 to-emerald-600',
    bg: 'bg-green-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Team Collaboration',
    description:
      'Real-time collaboration tools designed for modern teams. Work together seamlessly, no matter where your team is located.',
    color: 'from-blue-400 to-primary-600',
    bg: 'bg-blue-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Advanced Analytics',
    description:
      'Gain deep insights with powerful analytics dashboards. Make data-driven decisions with real-time metrics and reports.',
    color: 'from-purple-400 to-accent-600',
    bg: 'bg-purple-50',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </span>
          <h2 className="section-heading">Everything You Need to Succeed</h2>
          <p className="section-subheading">
            Powerful features crafted to help your team work smarter, move
            faster, and achieve more together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card group hover:scale-[1.02] transition-transform duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <div
                  className={`bg-gradient-to-br ${feature.color} bg-clip-text`}
                  style={{ color: 'transparent' }}
                >
                  <div className={`bg-gradient-to-br ${feature.color} p-0 rounded`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', background: 'none' }}>
                    <span className={`text-transparent bg-gradient-to-br ${feature.color} bg-clip-text`}>
                      {feature.icon}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
