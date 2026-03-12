export default function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
      <div className="absolute top-20 left-20 w-16 h-16 border border-white/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border border-white/20 rounded-full" />
      <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/10 rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-8 border border-white/20">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          <span>Limited time offer — First 3 months free</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to Transform
          <br />
          Your Workflow?
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of teams already using our platform to do their best
          work. Get started in minutes — no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-bold rounded-xl shadow-xl hover:bg-yellow-50 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 text-lg w-full sm:w-auto"
          >
            Start for Free
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-200 text-lg w-full sm:w-auto"
          >
            Learn More
          </a>
        </div>

        <p className="mt-8 text-white/60 text-sm">
          ✓ No credit card required &nbsp;&nbsp; ✓ Setup in 5 minutes &nbsp;&nbsp; ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
}
