import { Star, Shield, Zap, Gift } from 'lucide-react';

interface CasinoCardProps {
  rank: number;
  name: string;
  rating: number;
  bonus: string;
  bonusDetails: string;
  features: string[];
  withdrawalTime: string;
  url?: string;
  isRecommended?: boolean;
}

const ctaClassName =
  'inline-flex items-center justify-center w-full sm:w-auto whitespace-nowrap px-6 py-2.5 rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-semibold text-sm hover:shadow-lg hover:shadow-gold/30 transition-all duration-300';

export const CasinoCard = ({
  rank,
  name,
  rating,
  bonus,
  bonusDetails,
  features,
  withdrawalTime,
  url,
  isRecommended = false,
}: CasinoCardProps) => {
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
    <div
      className={`casino-card relative overflow-hidden transition-shadow duration-300 ${
        isRecommended ? 'border-gold/50 animate-pulse-gold' : ''
      }`}
    >
      {isRecommended && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background text-xs font-bold px-4 py-1 rounded-bl-lg">
            ⭐ Anbefalet
          </div>
        </div>
      )}

      <div className={`p-5 md:p-6 ${isRecommended ? 'pt-8 md:pt-6 pr-4 md:pr-6' : ''}`}>
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,200px)_minmax(0,1fr)_minmax(0,220px)_minmax(0,150px)] xl:gap-x-8 xl:items-center">
          {/* Rank & Name */}
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gold-dark via-gold to-gold-light flex items-center justify-center flex-shrink-0">
              <span className="text-background font-bold text-base md:text-lg">#{rank}</span>
            </div>
            <div className="min-w-0">
              <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground truncate">
                {name}
              </h3>
              <div className="flex items-center gap-1 mt-1 flex-wrap">
                {renderStars(rating)}
                <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
                  {rating}/5
                </span>
              </div>
            </div>
          </div>

          {/* Bonus */}
          <div className="min-w-0 border-t border-border/40 pt-4 xl:border-t-0 xl:pt-0">
            <div className="flex items-start gap-2.5">
              <Gift className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-base md:text-lg font-bold gold-text leading-snug break-words">
                  {bonus}
                </p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed break-words">
                  {bonusDetails}
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 min-w-0 border-t border-border/40 pt-4 xl:border-t-0 xl:pt-0">
            {features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-xs bg-secondary px-2.5 py-1.5 rounded-full text-muted-foreground whitespace-nowrap"
              >
                {feature === 'Trustly' ? (
                  <Shield className="w-3 h-3 text-trustly flex-shrink-0" />
                ) : feature === 'Hurtig Udbetaling' ? (
                  <Zap className="w-3 h-3 text-gold flex-shrink-0" />
                ) : null}
                {feature}
              </span>
            ))}
          </div>

          {/* Withdrawal & CTA */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between xl:flex-col xl:items-stretch border-t border-border/40 pt-4 xl:border-t-0 xl:pt-0">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Udbetaling:{' '}
              <span className="text-trustly font-medium">{withdrawalTime}</span>
            </span>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className={ctaClassName}
              >
                Besøg Casino
              </a>
            ) : (
              <button className={ctaClassName}>Besøg Casino</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
