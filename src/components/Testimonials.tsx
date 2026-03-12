const testimonials = [
  {
    quote:
      'This platform completely transformed how our team collaborates. We ship 3x faster and our communication has never been better. I can\'t imagine going back to how we worked before.',
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    avatar: 'SJ',
    gradient: 'from-primary-500 to-primary-700',
    stars: 5,
  },
  {
    quote:
      'The analytics features alone are worth the subscription. We\'ve uncovered insights we never knew existed in our data. Our decision-making is sharper and our results show it.',
    name: 'Marcus Chen',
    role: 'Head of Product at GrowthLabs',
    avatar: 'MC',
    gradient: 'from-accent-500 to-accent-700',
    stars: 5,
  },
  {
    quote:
      'Setup was incredibly simple, and the support team is outstanding. Within a week we had everything running smoothly and our team was up to speed. Highly recommend!',
    name: 'Emily Rodriguez',
    role: 'Operations Director at ScaleUp',
    avatar: 'ER',
    gradient: 'from-emerald-500 to-teal-700',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Testimonials
          </span>
          <h2 className="section-heading">Loved by Teams Worldwide</h2>
          <p className="section-subheading">
            Don't just take our word for it. Here's what real users say about
            their experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="card flex flex-col group hover:scale-[1.02] transition-transform duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8v6l8-8c0-7.7-3.6-14-8-14zm14 0c-4.4 0-8 3.6-8 8s3.6 8 8 8v6l8-8c0-7.7-3.6-14-8-14z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed flex-grow mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
