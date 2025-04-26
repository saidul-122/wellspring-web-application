
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path ? "text-foreground" : "text-muted-foreground hover:text-foreground";
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-wellspring-600">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm2.07-7.75-.9.92C11.45 10.9 11 11.5 11 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
            </svg>
            <span className="text-xl font-bold text-foreground">Wellspring</span>
          </Link>

          <div className="hidden md:flex md:gap-6">
            <Link to="/products" className={isActiveLink("/products")}>
              Products
            </Link>
            <Link to="/about" className={isActiveLink("/about")}>
              About
            </Link>
          </div>
        </div>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="outline" asChild>
            <Link to="/signin">Sign in</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Start for free</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container mx-auto border-t border-border/40 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/products" className="text-foreground" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/about" className="text-foreground" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/signin" onClick={() => setIsMenuOpen(false)}>Sign in</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Start for free</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
