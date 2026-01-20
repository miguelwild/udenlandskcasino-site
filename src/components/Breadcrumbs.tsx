import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = () => {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a 
            href="/" 
            itemProp="item" 
            className="flex items-center gap-1 hover:text-gold transition-colors"
          >
            <Home size={14} />
            <span itemProp="name">Forside</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
        <ChevronRight size={14} className="text-border" />
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <span itemProp="name" className="text-gold">Udenlandske Casinoer med Trustly</span>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
    </nav>
  );
};
