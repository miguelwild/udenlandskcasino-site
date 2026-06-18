import { Check, X, Star } from 'lucide-react';

const casinoData = [
  {
    name: 'Glorion',
    bonus: '100% up to 750kr + 200 GS',
    minDeposit: '20 kr',
    withdrawalTime: '0-2 timer',
    trustlyFees: 'Ingen',
    games: '3.500+',
    license: 'Malta MGA',
    rating: 5,
  },
  {
    name: 'Kokobet',
    bonus: 'OP TIL 2000 KR + 150 GS',
    minDeposit: '30 kr',
    withdrawalTime: '0-4 timer',
    trustlyFees: 'Ingen',
    games: '2.800+',
    license: 'Curacao',
    rating: 5,
  },
  {
    name: 'FairCrown',
    bonus: 'Op til 10.000 EUR + 500 gratis spins',
    minDeposit: '30 kr',
    withdrawalTime: '0-6 timer',
    trustlyFees: 'Ingen',
    games: '4.200+',
    license: 'Malta MGA',
    rating: 4,
  },
  {
    name: 'LuckyNord',
    bonus: '100% op til 2.000 kr',
    minDeposit: '200 kr',
    withdrawalTime: '1-12 timer',
    trustlyFees: 'Ingen',
    games: '2.000+',
    license: 'Curacao',
    rating: 4,
  },
  {
    name: 'RoyalPlay DK',
    bonus: '250% op til 4.000 kr',
    minDeposit: '150 kr',
    withdrawalTime: '0-3 timer',
    trustlyFees: 'Ingen',
    games: '3.000+',
    license: 'Malta MGA',
    rating: 5,
  },
];

export const ComparisonTable = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'fill-gold text-gold' : 'text-border'}
      />
    ));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-4 font-heading text-foreground">Casino</th>
            <th className="text-left py-4 px-4 font-heading text-foreground">Velkomstbonus</th>
            <th className="text-center py-4 px-4 font-heading text-foreground">Min. Indbetaling</th>
            <th className="text-center py-4 px-4 font-heading text-foreground">Udbetalingstid</th>
            <th className="text-center py-4 px-4 font-heading text-foreground">Trustly Gebyr</th>
            <th className="text-center py-4 px-4 font-heading text-foreground">Spil</th>
            <th className="text-center py-4 px-4 font-heading text-foreground">Licens</th>
            <th className="text-center py-4 px-4 font-heading text-foreground">Rating</th>
          </tr>
        </thead>
        <tbody>
          {casinoData.map((casino, index) => (
            <tr 
              key={index} 
              className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
            >
              <td className="py-4 px-4">
                <span className="font-semibold text-foreground">{casino.name}</span>
              </td>
              <td className="py-4 px-4">
                <span className="text-gold font-medium">{casino.bonus}</span>
              </td>
              <td className="py-4 px-4 text-center text-muted-foreground">
                {casino.minDeposit}
              </td>
              <td className="py-4 px-4 text-center">
                <span className="text-trustly font-medium">{casino.withdrawalTime}</span>
              </td>
              <td className="py-4 px-4 text-center">
                <Check className="w-5 h-5 text-trustly mx-auto" />
              </td>
              <td className="py-4 px-4 text-center text-muted-foreground">
                {casino.games}
              </td>
              <td className="py-4 px-4 text-center text-muted-foreground text-sm">
                {casino.license}
              </td>
              <td className="py-4 px-4">
                <div className="flex justify-center gap-0.5">
                  {renderStars(casino.rating)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
