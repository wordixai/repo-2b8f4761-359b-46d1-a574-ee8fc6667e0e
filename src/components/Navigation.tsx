import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "navbar-blur border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-langchain-teal rounded-lg flex items-center justify-center text-white font-bold">
              L
            </div>
            <span className="ml-2 text-xl font-bold text-foreground">LangChain</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-langchain-purple">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[600px]">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                          FRAMEWORKS
                        </h4>
                        <div className="space-y-2">
                          <a href="#" className="block text-sm hover:text-primary">
                            LangGraph
                          </a>
                          <a href="#" className="block text-sm hover:text-primary">
                            LangChain
                          </a>
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                          PLATFORMS
                        </h4>
                        <div className="space-y-2">
                          <a href="#" className="block text-sm hover:text-primary">
                            LangSmith
                          </a>
                          <a href="#" className="block text-sm hover:text-primary">
                            LangGraph Platform
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-langchain-purple">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="space-y-2">
                      <a href="#" className="block text-sm hover:text-primary">
                        Guides
                      </a>
                      <a href="#" className="block text-sm hover:text-primary">
                        Blog
                      </a>
                      <a href="#" className="block text-sm hover:text-primary">
                        Customer Stories
                      </a>
                      <a href="#" className="block text-sm hover:text-primary">
                        LangChain Academy
                      </a>
                      <a href="#" className="block text-sm hover:text-primary">
                        Community
                      </a>
                      <a href="#" className="block text-sm hover:text-primary">
                        Events
                      </a>
                      <a href="#" className="block text-sm hover:text-primary">
                        Changelog
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-langchain-purple">
                  Docs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-6 w-[500px]">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                          PYTHON
                        </h4>
                        <div className="space-y-2">
                          <a href="#" className="block text-sm hover:text-primary">
                            LangGraph
                          </a>
                          <a href="#" className="block text-sm hover:text-primary">
                            LangSmith
                          </a>
                          <a href="#" className="block text-sm hover:text-primary">
                            LangChain
                          </a>
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
                          JAVASCRIPT
                        </h4>
                        <div className="space-y-2">
                          <a href="#" className="block text-sm hover:text-primary">
                            LangGraph
                          </a>
                          <a href="#" className="block text-sm hover:text-primary">
                            LangSmith
                          </a>
                          <a href="#" className="block text-sm hover:text-primary">
                            LangChain
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-langchain-purple">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[200px]">
                    <a href="#" className="block text-sm hover:text-primary">
                      About
                    </a>
                    <a href="#" className="block text-sm hover:text-primary">
                      Careers
                    </a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className={navigationMenuTriggerStyle()}>
                  Pricing
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline">Get a demo</Button>
            <Button>Sign up</Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#" className="text-lg font-medium">Products</a>
                <a href="#" className="text-lg font-medium">Resources</a>
                <a href="#" className="text-lg font-medium">Docs</a>
                <a href="#" className="text-lg font-medium">Company</a>
                <a href="#" className="text-lg font-medium">Pricing</a>
                <div className="pt-4 border-t space-y-2">
                  <Button variant="outline" className="w-full">Get a demo</Button>
                  <Button className="w-full">Sign up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;