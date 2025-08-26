import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-langchain-teal text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Products */}
            <div>
              <h6 className="font-semibold mb-4">Products</h6>
              <div className="space-y-2">
                <a href="#" className="block text-white/80 hover:text-white text-sm">LangChain</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">LangSmith</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">LangGraph</a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h6 className="font-semibold mb-4">Resources</h6>
              <div className="space-y-2">
                <a href="#" className="block text-white/80 hover:text-white text-sm">Guides</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">Blog</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">Customer Stories</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">LangChain Academy</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">Community</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">Events</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">Changelog</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">Experts</a>
              </div>
            </div>

            {/* Docs */}
            <div>
              <h6 className="font-semibold mb-4">Python Docs</h6>
              <div className="space-y-2 mb-6">
                <a href="#" className="block text-white/80 hover:text-white text-sm">LangGraph</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">LangSmith</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">LangChain</a>
              </div>
              <h6 className="font-semibold mb-4">JS Docs</h6>
              <div className="space-y-2">
                <a href="#" className="block text-white/80 hover:text-white text-sm">LangGraph</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">LangSmith</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">LangChain</a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h6 className="font-semibold mb-4">Company</h6>
              <div className="space-y-2">
                <a href="#" className="block text-white/80 hover:text-white text-sm">About</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">Careers</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">X</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">LinkedIn</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">YouTube</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">Marketing Assets</a>
                <a href="#" className="block text-white/80 hover:text-white text-sm">Security</a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h6 className="font-semibold mb-4">Sign up for our newsletter to stay up to date</h6>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email..." 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary" size="icon" className="bg-white text-langchain-teal hover:bg-white/90 flex-shrink-0">
                  →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">All systems operational</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-white/80 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-white/80 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;