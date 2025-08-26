import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AgentStackSection = () => {
  const [activeTab, setActiveTab] = useState("deployment");

  const tabs = [
    {
      id: "orchestration",
      title: "ORCHESTRATION:",
      subtitle: "Build agents with LangGraph",
      description: "Controllable agent orchestration with built-in persistence to handle conversational history, memory, and agent-to-agent collaboration.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: "integrations",
      title: "INTEGRATIONS:",
      subtitle: "Integrate components with LangChain",
      description: "Integrate with the latest models, databases, and tools with no engineering overhead.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: "observability",
      title: "EVALS & OBSERVABILITY:",
      subtitle: "Gain visibility with LangSmith",
      description: "Debug poor-performing LLM app runs. Evaluate and observe agent performance at scale.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
    },
    {
      id: "deployment",
      title: "DEPLOYMENT:",
      subtitle: "Deploy & manage with LangGraph Platform",
      description: "Deploy and scale enterprise-grade agents with long-running workflows. Discover, reuse, and share agents across teams — and iterate faster with LangGraph Studio.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              The Agent Stack
            </h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Tab List - Vertical on desktop */}
              <div className="lg:w-1/2">
                <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-2">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className={`w-full p-6 text-left justify-start data-[state=active]:bg-langchain-purple border border-gray-200 rounded-lg ${
                        activeTab === tab.id ? 'bg-langchain-purple' : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <h6 className="font-semibold text-sm text-muted-foreground mb-1">
                            {tab.title}
                          </h6>
                          <h6 className="font-semibold text-sm text-foreground">
                            {tab.subtitle}
                          </h6>
                          {activeTab === tab.id && (
                            <p className="text-sm text-muted-foreground mt-2">
                              {tab.description}
                            </p>
                          )}
                        </div>
                        <div className="w-8 h-8 bg-langchain-teal rounded flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded"></div>
                        </div>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content */}
              <div className="lg:w-1/2">
                {tabs.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id} className="mt-0">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={tab.image}
                        alt={tab.subtitle}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </TabsContent>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AgentStackSection;