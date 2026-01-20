import { Shield, Clock, Award } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-casino-dark mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-gold" />
            <span className="text-sm">100% Sikker</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5 text-gold" />
            <span className="text-sm">Hurtige Udbetalinger</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5 text-gold" />
            <span className="text-sm">Ekspert Anmeldelser</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Ansvarsfraskrivelse:</strong> Gambling kan være vanedannende. 
            Spil ansvarligt og kun med penge du har råd til at tabe. Du skal være 18 år eller ældre for at 
            spille på online casinoer. Hvis du har problemer med spil, søg hjælp hos{' '}
            <span className="text-gold">StopSpillet.dk</span> eller{' '}
            <span className="text-gold">Center for Ludomani</span>.
          </p>
        </div>

        {/* 18+ Badge */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 rounded-full border-2 border-destructive flex items-center justify-center">
            <span className="text-destructive font-bold">18+</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2026 Udenlandske Casinoer med Trustly. Alle rettigheder forbeholdes.</p>
          <p className="mt-2">Sidst opdateret: Januar 2026</p>
        </div>
      </div>
    </footer>
  );
};
