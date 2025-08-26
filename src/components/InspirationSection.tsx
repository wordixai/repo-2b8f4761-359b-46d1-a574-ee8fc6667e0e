import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const InspirationSection = () => {
  const caseStudies = [
    {
      company: "Klarna",
      industry: "Financial Services",
      description: "Klarna's AI assistant has reduced average customer query resolution time by 80%, powered by LangSmith and LangGraph",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop&crop=center"
    },
    {
      company: "C.H. Robinson",
      industry: "Transportation",
      description: "This global logistics provider is saving 600 hours a day using an automated order system built on LangGraph and LangSmith",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop&crop=center"
    },
    {
      company: "Trellix",
      industry: "Security",
      description: "As a leading cybersecurity firm with 40k+ customers, Trellix cut log parsing from days to minutes using LangGraph and LangSmith.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=50&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get inspired by companies who have done it.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Teams building with LangChain products are driving operational efficiency, 
                increasing discovery & personalization, and delivering premium products that 
                generate revenue.
              </p>
              <Button className="inline-flex items-center gap-2">
                Discover Use Cases
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Right Content - Case Studies */}
            <div className="lg:w-1/2 space-y-6">
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-20 h-10 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600">
                        {caseStudy.company}
                      </span>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-langchain-teal group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                      {caseStudy.industry}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {caseStudy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;