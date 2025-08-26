import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-langchain-teal to-langchain-teal/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to start shipping reliable agents faster?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get started with tools from the LangChain product suite for every step 
            of the agent development lifecycle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-langchain-teal hover:bg-white/90">
              Get a demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-langchain-teal">
              Sign up for free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;