import { useEffect, useRef, useState } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h4 className="text-3xl md:text-4xl font-bold mb-4">
              The biggest developer community in GenAI
            </h4>
            <p className="text-lg text-muted-foreground">
              Learn alongside the 1M+ practitioners using our frameworks to push the industry forward.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Stat */}
            <div className={`text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <div className="mb-4">
                <h4 className="text-5xl md:text-6xl font-bold text-langchain-teal">
                  100k+
                </h4>
              </div>
              <h4 className="text-xl font-semibold">GitHub stars</h4>
            </div>

            {/* Center Stat */}
            <div className={`text-center transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-langchain-purple rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="text-4xl md:text-5xl font-bold text-langchain-teal mb-2">
                    #1
                  </h4>
                  <h4 className="text-lg font-semibold">
                    Downloaded agent framework
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Stat */}
            <div className={`text-center transition-all duration-700 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              <div className="mb-4">
                <h4 className="text-5xl md:text-6xl font-bold text-langchain-teal">
                  600+
                </h4>
              </div>
              <h4 className="text-xl font-semibold">Integrations</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;