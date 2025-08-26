import { Button } from "@/components/ui/button";

const PowerStackSection = () => {
  return (
    <div className="space-y-0">
      {/* Main Power Stack Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              LangChain products are designed to be used independently or stack for multiplicative benefit.
            </h1>
            
            {/* Desktop Stack Visualization */}
            <div className="hidden lg:flex justify-center items-center space-x-16 mt-16">
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-langchain-purple rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-sm font-semibold text-langchain-teal">LangChain</div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-langchain-green rounded-xl flex items-center justify-center shadow-md">
                    <div className="text-xs font-semibold text-langchain-teal">LangGraph</div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">Frameworks</h2>
              </div>
              
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-langchain-orange rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="text-sm font-semibold text-langchain-teal">LangSmith</div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center shadow-md">
                    <div className="text-xs font-semibold text-langchain-teal">Platform</div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">Platforms</h2>
              </div>
            </div>

            {/* Mobile Stack Visualization */}
            <div className="lg:hidden grid grid-cols-2 gap-8 mt-16">
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4">Frameworks</h4>
                <div className="space-y-4">
                  <div className="w-24 h-12 bg-langchain-purple rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-xs font-semibold">LangChain</span>
                  </div>
                  <div className="w-24 h-12 bg-langchain-green rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-xs font-semibold">LangGraph</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-4">Platforms</h4>
                <div className="space-y-4">
                  <div className="w-24 h-12 bg-langchain-orange rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-xs font-semibold">LangSmith</span>
                  </div>
                  <div className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-xs font-semibold">Platform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Cards */}
      <div className="space-y-0">
        {/* Full Stack Card */}
        <section className="py-20 gradient-purple">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <span className="text-sm font-semibold text-muted-foreground">
                    STACK 1: LangGraph + LangChain + LangSmith + LangGraph Platform
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  A full product suite for reliable agents and LLM apps
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  LangChain's products work seamlessly together to provide an integrated solution 
                  for every step of the application development journey. When you use all LangChain 
                  products, you'll build better, get to production quicker, and grow visibility -- 
                  all with less set up and friction.
                  <br /><br />
                  LangChain provides the smoothest path to high quality agents.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Orchestration:", name: "LangGraph" },
                    { title: "Integrations:", name: "LangChain" },
                    { title: "Evals + Observability:", name: "LangSmith" },
                    { title: "Deployment:", name: "LangGraph Platform" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                      <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                        {item.title}
                      </h5>
                      <div className="text-lg font-bold text-langchain-teal">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LangSmith Only Card */}
        <section className="py-20 gradient-orange">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <span className="text-sm font-semibold text-muted-foreground">
                    STACK 2: No framework + LangSmith
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Trace and evaluate any LLM app
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  LangSmith is framework-agnostic. Trace using the TypeScript or Python SDK 
                  to gain visibility into your agent interactions -- whether you use LangChain's 
                  frameworks or not.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                      Orchestration:
                    </h5>
                    <div className="text-lg font-bold text-langchain-teal">
                      Your choice
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                      Evals + Observability:
                    </h5>
                    <div className="text-lg font-bold text-langchain-teal">
                      LangSmith
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Only Card */}
        <section className="py-20 gradient-green">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="mb-6">
                  <span className="text-sm font-semibold text-muted-foreground">
                    STACK 3: Any agent framework + LangGraph Platform
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Build agents any way you want, then deploy and scale with ease
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  LangGraph Platform works with <em>any</em> agent framework, enabling stateful 
                  UXs like human-in-the-loop and streaming-native deployments.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                      Orchestration:
                    </h5>
                    <div className="text-lg font-bold text-langchain-teal">
                      Your choice
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h5 className="text-sm font-semibold text-muted-foreground mb-2">
                      Deployment:
                    </h5>
                    <div className="text-lg font-bold text-langchain-teal">
                      LangGraph Platform
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PowerStackSection;