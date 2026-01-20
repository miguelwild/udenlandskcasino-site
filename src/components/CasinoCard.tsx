import { Star, Shield, Zap, Gift } from 'lucide-react';

interface CasinoCardProps {
  rank: number;
  name: string;
  rating: number;
  bonus: string;
  bonusDetails: string;
  features: string[];
  withdrawalTime: string;
  isRecommended?: boolean;
}

export const CasinoCard = ({
  rank,
  name,
  rating,
  bonus,
  bonusDetails,
  features,
  withdrawalTime,
  isRecommended = false,
}: CasinoCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-gold text-gold' : 'text-border'}
      />
    ));
  };

  return (
    <div 
      className={`casino-card relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
        isRecommended ? 'border-gold/50 animate-pulse-gold' : ''
      }`}
    >
      {isRecommended && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background text-xs font-bold px-4 py-1 rounded-bl-lg">
            ⭐ Anbefalet
          </div>
        </div>
      )}
      
      <div className="p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* Rank & Name */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-dark via-gold to-gold-light flex items-center justify-center flex-shrink-0">
              <span className="text-background font-bold text-lg">#{rank}</span>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{name}</h3>
              <div className="flex items-center gap-1 mt-1">
                {renderStars(rating)}
                <span className="ml-2 text-sm text-muted-foreground">{rating}/5</span>
              </div>
            </div>
          </div>

          {/* Bonus */}
          <div className="flex-1 md:text-center">
            <div className="flex items-center gap-2 md:justify-center">
              <Gift className="w-5 h-5 text-gold" />
              <span className="text-lg font-bold gold-text">{bonus}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{bonusDetails}</p>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-xs bg-secondary px-3 py-1.5 rounded-full text-muted-foreground"
              >
                {feature === 'Trustly' ? (
                  <Shield className="w-3 h-3 text-trustly" />
                ) : feature === 'Hurtig Udbetaling' ? (
                  <Zap className="w-3 h-3 text-gold" />
                ) : null}
                {feature}
              </span>
            ))}
          </div>

          {/* Withdrawal & CTA */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Udbetaling: <span className="text-trustly font-medium">{withdrawalTime}</span>
            </span>
            <button className="w-full md:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-semibold text-sm hover:shadow-lg hover:shadow-gold/30 transition-all duration-300">
              Besøg Casino
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
