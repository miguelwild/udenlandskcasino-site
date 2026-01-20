import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Top Casinoer', href: '#top-casinoer' },
  { label: 'Hvorfor Trustly', href: '#hvorfor-trustly' },
  { label: 'Sådan Vælger Du', href: '#saadan-vaelger' },
  { label: 'Bonusser', href: '#bonusser' },
  { label: 'Sikkerhed', href: '#sikkerhed' },
  { label: 'FAQ', href: '#faq' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-dark via-gold to-gold-light flex items-center justify-center">
              <span className="text-background font-heading font-bold text-xl">T</span>
            </div>
            <span className="font-heading text-lg md:text-xl font-semibold text-foreground hidden sm:block">
              Trustly<span className="gold-text">Casino</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#top-casinoer"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-semibold text-sm hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
          >
            Find Dit Casino
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#top-casinoer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-semibold"
              >
                Find Dit Casino
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
