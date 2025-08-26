import { Rocket, Eye, Zap } from "lucide-react";

const ThreeCardsSection = () => {
  const cards = [
    {
      icon: <Zap className="w-12 h-12 text-langchain-teal" />,
      title: "Accelerate agent development.",
      description: "Build faster with templates & a visual agent IDE. Reuse, configure, and combine agents to go further with less code."
    },
    {
      icon: <Rocket className="w-12 h-12 text-langchain-teal" />,
      title: "Ship reliable agents.",
      description: "Design agents that can handle sophisticated tasks with control. Add human-in-the-loop to steer and approve agent actions."
    },
    {
      icon: <Eye className="w-12 h-12 text-langchain-teal" />,
      title: "Gain visibility & improve quality.",
      description: "See what's happening - so you can quickly trace to root cause and debug issues. Evaluate your agent performance to improve over time."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                {card.icon}
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">
                  {card.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeCardsSection;