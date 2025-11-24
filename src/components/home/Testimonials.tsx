import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIAL_INTERVAL = 5000;

const testimonials = [
  {
    id: 1,
    quote:
      "RCOM Gateway helped us connect our RFID readers and barcode scanners directly to our WMS. Now every pallet movement is updated in real time, and we no longer rely on manual uploads or custom scripts. It has reduced errors and given us much better visibility across our sites",
    author: "Sarah Mitchell",
    title: "Logistics Director",
    company: "Global Supply Solutions",
    industry: "Logistics & Supply Chain",
    rating: 5,
    results: "30% efficiency gain",
    avatar: "SM",
  },
  {
    id: 2,
    quote:
      "We use RCOM Gateway to track medical devices and patient transfers. The custom maps show exactly where equipment is, and alerts are sent if devices are moved into the wrong ward. It saves our staff a lot of time and improves overall safety.",
    author: "Dr. James Rodriguez",
    title: "Chief Technology Officer",
    company: "Metropolitan Medical Center",
    industry: "Healthcare",
    rating: 5,
    results: "75% reduction in search times",
    avatar: "JR",
  },
  {
    id: 3,
    quote:
      "Our production lines generate thousands of sensor and scanner events every day. RCOM Gateway handles this volume easily and pushes the data into SAP without any manual steps. The workflows are flexible enough that our engineers can adjust logic themselves",
    author: "Chen Wei",
    title: "Manufacturing Operations Manager",
    company: "Precision Industries",
    industry: "Manufacturing",
    rating: 5,
    results: "99.9% data accuracy",
    avatar: "CW",
  },
  {
    id: 4,
    quote:
      "We use RCOM Gateway to allow suppliers to send delivery data directly into our system through secure APIs. This replaced email spreadsheets and manual entry. The access controls make it safe, and our receiving process is now much faster.",
    author: "Maria Santos",
    title: "Facilities Director",
    company: "Urban Development Corp",
    industry: "Smart Infrastructure",
    rating: 5,
    results: "40% energy cost reduction",
    avatar: "MS",
  },
  {
    id: 5,
    quote:
      "We integrated RCOM Gateway to manage inventory updates from multiple warehouses. The system consolidates data from barcode scans and automatically updates stock levels in our ERP. It has eliminated delays and keeps our inventory accurate across all locations.",
    author: "David Thompson",
    title: "VP of Operations",
    company: "International Retail Group",
    industry: "Retail & Distribution",
    rating: 5,
    results: "Scaled to 12 locations",
    avatar: "DT",
  },
];

const partners = [
  { name: "Zebra Technologies", logo: "ZEBRA" },
  { name: "Impinj", logo: "IMPINJ" },
  { name: "Honeywell", logo: "HONEYWELL" },
  { name: "Motorola Solutions", logo: "MOTOROLA" },
  { name: "Datalogic", logo: "DATALOGIC" },
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const autoPlayRef = useRef(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to go to next testimonial
  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, []);

  // Helper to go to previous testimonial
  const prevTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // When user interacts, stop autoplay for a while, then resume
  const pauseAndGoTo = useCallback((index: number) => {
    autoPlayRef.current = false;
    setActiveTestimonial(index);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      autoPlayRef.current = true;
    }, TESTIMONIAL_INTERVAL * 2);
  }, []);

  const handleNext = useCallback(() => {
    autoPlayRef.current = false;
    nextTestimonial();
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      autoPlayRef.current = true;
    }, TESTIMONIAL_INTERVAL * 2);
  }, [nextTestimonial]);

  const handlePrev = useCallback(() => {
    autoPlayRef.current = false;
    prevTestimonial();
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      autoPlayRef.current = true;
    }, TESTIMONIAL_INTERVAL * 2);
  }, [prevTestimonial]);

  // Autoplay effect
  useEffect(() => {
    if (!autoPlayRef.current) return;
    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }
    }, TESTIMONIAL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const t = testimonials[activeTestimonial];

  return (
    <div className="bg-gradient-to-br from-slate-100 to-blue-50 py-10 px-2 sm:py-16 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto">
          Join organizations across healthcare, logistics, and manufacturing already transforming their operations with RCOM Gateway Suite
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-10 sm:mb-16">
          <div
            className="bg-white rounded-3xl shadow-2xl p-4 xs:p-6 sm:p-8 md:p-12 max-w-full sm:max-w-3xl md:max-w-5xl mx-auto relative overflow-hidden flex flex-col"
            style={{
              minHeight: '420px',
              height: '420px', // Fixed height for all cards
              maxHeight: '420px',
            }}
          >
            {/* Background Quote Icon */}
            <div className="absolute top-2 left-2 sm:top-8 sm:left-8 opacity-10 pointer-events-none select-none">
              <Quote className="w-12 h-12 sm:w-24 sm:h-24 text-blue-600" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-start pb-32">
              {/* Stars */}
              <div className="flex justify-center mb-4 sm:mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base xs:text-lg sm:text-2xl md:text-l font-medium text-slate-800 text-center leading-relaxed mb-4 sm:mb-8">
                "{t.quote}"
              </blockquote>
            </div>

            {/* Fixed Result Highlight and Author Info */}
            <div className="absolute left-0 right-0 bottom-0 z-20 flex flex-col items-center pb-6 sm:pb-10">
              {/* Result Highlight */}
              <div className="text-center mb-3 sm:mb-4">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full font-semibold text-xs sm:text-base">
                  {t.results}
                </span>
              </div>
              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                  {t.avatar}
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-slate-800 text-base sm:text-lg">{t.author}</div>
                  <div className="text-slate-600 text-xs sm:text-base">{t.title}</div>
                  <div className="text-blue-600 font-semibold text-xs sm:text-base">{t.company}</div>
                  <div className="text-xs text-slate-500">{t.industry}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300"
            tabIndex={0}
          >
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300"
            tabIndex={0}
          >
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => pauseAndGoTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeTestimonial === index
                  ? 'bg-blue-600 w-8'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              tabIndex={0}
            />
          ))}
        </div>

        {/* Partner Ecosystem */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Trusted Hardware Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300"
              >
                <div className="w-24 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded flex items-center justify-center text-white font-bold text-xs">
                  {partner.logo}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 mt-6">
            Seamlessly integrates with leading RFID, barcode, and sensor hardware
          </p>
        </div>
      </div>
    </div>
  );
}