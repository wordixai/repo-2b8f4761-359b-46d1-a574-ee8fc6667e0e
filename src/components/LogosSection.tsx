import { useEffect, useRef } from "react";

const LogosSection = () => {
  const startupLogos = [
    { name: "Replit", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" },
    { name: "Unify", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" },
    { name: "Lovable", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" },
    { name: "Modern Treasury", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" },
    { name: "Clay", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" }
  ];

  const enterpriseLogos = [
    { name: "Ally", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" },
    { name: "Rakuten", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" },
    { name: "Klarna", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" },
    { name: "Google", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" },
    { name: "GitLab", url: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-2xl md:text-3xl font-semibold mb-4">
            LangChain products power top engineering teams, from{" "}
            <span className="bg-langchain-purple px-2 py-1 rounded">startups</span>{" "}
            to{" "}
            <span className="bg-gray-200 px-2 py-1 rounded">global enterprises</span>
          </h4>
        </div>

        {/* Desktop Logo Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center items-center">
              {startupLogos.map((logo, index) => (
                <div
                  key={index}
                  className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                >
                  <span className="text-sm font-medium text-gray-600">{logo.name}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-8 justify-center items-center">
              {enterpriseLogos.map((logo, index) => (
                <div
                  key={index}
                  className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all"
                >
                  <span className="text-sm font-medium text-gray-600">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="lg:hidden overflow-hidden">
          <div className="flex animate-scroll">
            {[...startupLogos, ...enterpriseLogos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 mx-4 bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <span className="text-sm font-medium text-gray-600">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;