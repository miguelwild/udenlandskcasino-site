import { CheckCircle, Award, Calendar } from 'lucide-react';
import authorImage from '@/assets/author-miguel.jpg';

export const AuthorBox = () => {
  return (
    <div className="casino-card p-6 md:p-8" itemScope itemType="https://schema.org/Person">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src={authorImage}
            alt="Miguel - Casino ekspert med over 7 års erfaring"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gold/30"
            itemProp="image"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground" itemProp="name">
              Miguel
            </h3>
            <CheckCircle className="w-5 h-5 text-trustly" />
            <span className="text-xs bg-trustly/20 text-trustly px-2 py-0.5 rounded-full">
              Verificeret Ekspert
            </span>
          </div>
          <p className="text-gold font-medium mb-3" itemProp="jobTitle">
            Casino Ekspert & Anmelder
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4" itemProp="description">
            Jeg har arbejdet i online casino-branchen i over 7 år, hvor jeg har testet hundredvis af 
            casinoer og spilleautomater. Min passion er at hjælpe danske spillere med at finde 
            sikre og pålidelige udenlandske casinoer med Trustly-betalinger. Jeg spiller selv 
            regelmæssigt og deler kun anbefalinger baseret på personlig erfaring.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-4 h-4 text-gold" />
              <span>7+ års erfaring</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-gold" />
              <span>Opdateret januar 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
