import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const UseCasesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const useCases = [
    {
      title: "Copilots",
      description: "Build native co-pilots into your application to unlock new end user experiences for domain-specific tasks.",
      company: "Replit",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop&crop=center"
    },
    {
      title: "Enterprise GPT",
      description: "Give all employees access to information and tools in a compliant manner so they can perform their best.",
      company: "Rakuten",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop&crop=center"
    },
    {
      title: "Customer Support",
      description: "Improve the speed & efficiency of support teams that handle customer requests.",
      company: "Klarna",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop&crop=center"
    },
    {
      title: "Research",
      description: "Synthesize data, summarize sources & uncover insights faster than ever for knowledge work.",
      company: "Morningstar",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop&crop=center"
    },
    {
      title: "Code generation",
      description: "Accelerate software development by automating code writing, refactoring, and documentation for your team.",
      company: "Lovable",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop&crop=center"
    },
    {
      title: "AI Search",
      description: "Offer a concierge experience to guide users to products or information in a personalized way.",
      company: "The Home Depot",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop&crop=center"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {useCases.map((useCase, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-md mx-auto">
                    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 min-h-[300px] flex flex-col justify-between">
                      <div>
                        <h4 className="text-2xl font-bold mb-4 text-foreground">
                          {useCase.title}
                        </h4>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-6 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-xs font-medium text-gray-600">
                              {useCase.company}
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-langchain-teal">
                          <ArrowUpRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-langchain-teal' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;