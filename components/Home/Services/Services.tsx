import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden " id="services">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold tracking-wide">
              SERVICES
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
            Collaborate with brands
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {" "}
              and agencies{" "}
            </span>
            to create
            <br className="hidden sm:block" />
            impactful results
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6">
            Transforming ideas into elegant solutions with cutting-edge
            technology and creative excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
            <ServiceCard
              icon="/images/s1.png"
              name="UI & UX Design"
              description="Crafting intuitive and visually stunning interfaces that deliver exceptional user experiences across all platforms."
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <ServiceCard
              icon="/images/s2.png"
              name="Web & Mobile Apps"
              description="Building responsive, scalable applications optimized for seamless performance on desktop and mobile devices."
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ServiceCard
              icon="/images/s3.png"
              name="Design & Creative"
              description="Creating compelling visual identities and design systems that elevate your brand and engage your audience."
            />
          </div>

          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ServiceCard
              icon="/images/s4.png"
              name="Development"
              description="Writing clean, maintainable code using modern frameworks and best practices to bring your vision to life."
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-sm">
            Ready to start your project?
            <a
              href="#contact"
              className="ml-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
            >
              Let's talk →
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes tilt {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        .bg-grid-slate-700\/25 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(51 65 85 / 0.25)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default Services;
