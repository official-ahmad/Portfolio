import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../data/testimonials";

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: "3.2rem 0" }}>
      <div className="section-title">
        <span className="tag">Testimonials</span>
        <h2>What people say</h2>
      </div>

      {/* Marquee Container */}
      <div className="testimonials-marquee">
        <div className="testimonials-track">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-marquee {
          overflow: hidden;
          mask: linear-gradient(90deg, transparent, white 8%, white 92%, transparent);
          -webkit-mask: linear-gradient(90deg, transparent, white 8%, white 92%, transparent);
        }

        .testimonials-track {
          display: flex;
          gap: 1.8rem;
          width: max-content;
          animation: testimonials-slide 45s linear infinite;
        }

        .testimonials-track:hover {
          animation-play-state: paused;
        }

        @keyframes testimonials-slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .testimonials-marquee {
            mask: linear-gradient(90deg, transparent, white 12%, white 88%, transparent);
            -webkit-mask: linear-gradient(90deg, transparent, white 12%, white 88%, transparent);
          }

          .testimonials-track {
            gap: 1.2rem;
            animation: testimonials-slide 50s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
