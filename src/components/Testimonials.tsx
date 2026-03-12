const testimonials = [
  {
    quote:
      "This platform completely transformed how we run our business. We went from spending hours on manual tasks to having everything automated. Our revenue grew 40% in just three months.",
    name: 'Sarah Johnson',
    role: 'CEO, TechStartup Inc.',
    avatar: 'SJ',
    avatarColor: 'from-pink-400 to-rose-500',
    stars: 5,
  },
  {
    quote:
      "I was skeptical at first, but the results speak for themselves. The analytics alone have given us insights we never had before. Customer retention is up 60% since we started using this.",
    name: 'Marcus Chen',
    role: 'CTO, Scale Digital',
    avatar: 'MC',
    avatarColor: 'from-blue-400 to-indigo-500',
    stars: 5,
  },
  {
    quote:
      "The best investment we made this year. Setup was incredibly easy, and the support team is outstanding. Every feature we needed was already there waiting for us.",
    name: 'Emily Rodriguez',
    role: 'Founder, GrowthLabs',
    avatar: 'ER',
    avatarColor: 'from-green-400 to-emerald-500',
    stars: 5,
  },
  {
    quote:
      "We evaluated 12 different platforms before choosing this one. Nothing comes close in terms of ease of use and raw capability. Our team was up and running in under an hour.",
    name: 'David Park',
    role: 'VP Engineering, CloudCo',
    avatar: 'DP',
    avatarColor: 'from-purple-400 to-violet-500',
    stars: 5,
  },
  {
    quote:
      "The security features gave us the confidence we needed to migrate our entire operation. Compliance reports are now automated and our audit process takes days instead of weeks.",
    name: 'Rachel Thompson',
    role: 'COO, FinTech Solutions',
    avatar: 'RT',
    avatarColor: 'from-yellow-400 to-orange-500',
    stars: 5,
  },
  {
    quote:
      "Exceptional product with even better support. We had a complex integration requirement and their team solved it within 24 hours. Highly recommend to any serious business.",
    name: 'James Wilson',
    role: 'Director, Enterprise Corp',
    avatar: 'JW',
    avatarColor: 'from-cyan-400 to-blue-500',
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Loved by Businesses{' '}
            <span className="text-blue-600">Worldwide</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say about their experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '10K+', label: 'Active Users' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '150+', label: 'Countries' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl">
              <p className="text-3xl font-extrabold text-blue-600">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Stars */}
              <StarRating count={testimonial.stars} />

              {/* Quote */}
              <blockquote className="mt-4 flex-1">
                <p className="text-gray-700 leading-relaxed text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
