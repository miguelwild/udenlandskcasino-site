import { List } from 'lucide-react';

const tocItems = [
  { label: 'Top 5 Udenlandske Trustly Casinoer', href: '#top-casinoer' },
  { label: 'Hvorfor Vælge Trustly til Casino?', href: '#hvorfor-trustly' },
  { label: 'Sådan Vælger Du Det Rigtige Casino', href: '#saadan-vaelger' },
  { label: 'Bonusser og Tilbud', href: '#bonusser' },
  { label: 'Sikkerhed og Licenser', href: '#sikkerhed' },
  { label: 'Ofte Stillede Spørgsmål', href: '#faq' },
];

export const TableOfContents = () => {
  return (
    <div className="casino-card p-5 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-5 h-5 text-gold" />
        <h2 className="font-heading text-lg font-semibold text-foreground">Indhold</h2>
      </div>
      <nav>
        <ol className="space-y-2">
          {tocItems.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center gap-3 py-2 px-3 rounded-lg text-muted-foreground hover:text-gold hover:bg-secondary/50 transition-colors group"
              >
                <span className="w-6 h-6 rounded-full bg-secondary text-sm flex items-center justify-center text-muted-foreground group-hover:bg-gold group-hover:text-background transition-colors">
                  {index + 1}
                </span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
