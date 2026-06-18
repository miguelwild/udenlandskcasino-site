import { Navigation } from '@/components/Navigation';
import { AuthorBox } from '@/components/AuthorBox';
import { CasinoCard } from '@/components/CasinoCard';
import { ComparisonTable } from '@/components/ComparisonTable';
import { FAQ } from '@/components/FAQ';
import { TableOfContents } from '@/components/TableOfContents';
import { Footer } from '@/components/Footer';
import { Shield, Zap, CreditCard, Clock, CheckCircle, AlertTriangle, Award, Star, Lock, Users } from 'lucide-react';

import heroImage from '@/assets/hero-trustly-casino.jpg';
import securityImage from '@/assets/trustly-security.jpg';
import bonusImage from '@/assets/casino-bonus.jpg';

const casinoData = [
  {
    rank: 1,
    name: 'Glorion',
    rating: 5,
    bonus: '100% op til 5.000 kr',
    bonusDetails: '+ 200 gratis spins',
    features: ['Trustly', 'Hurtig Udbetaling', 'Pay N Play'],
    withdrawalTime: '0-2 timer',
    url: 'https://glrn.lynmonkel.com/?mid=303689_2176939',
    isRecommended: true,
  },
  {
    rank: 2,
    name: 'Kokobet',
    rating: 5,
    bonus: '200% op til 3.000 kr',
    bonusDetails: 'Ingen omsætning på free spins',
    features: ['Trustly', 'Live Casino', 'MitID'],
    withdrawalTime: '0-4 timer',
    url: 'https://kokotracking.com/drvyiwrzi',
  },
  {
    rank: 3,
    name: 'FairCrown',
    rating: 4,
    bonus: '150% + 100 Free Spins',
    bonusDetails: 'På Book of Dead',
    features: ['Trustly', 'Dansk Support', '3500+ Spil'],
    withdrawalTime: '0-6 timer',
    url: 'https://fair-l.ink/jjhm4hqqh',
  },
  {
    rank: 4,
    name: 'LuckyNord',
    rating: 4,
    bonus: '100% op til 2.000 kr',
    bonusDetails: 'Lav omsætning x25',
    features: ['Trustly', 'VIP Program', 'Cashback'],
    withdrawalTime: '1-12 timer',
  },
  {
    rank: 5,
    name: 'RoyalPlay DK',
    rating: 5,
    bonus: '250% op til 4.000 kr',
    bonusDetails: 'Eksklusiv velkomst',
    features: ['Trustly', 'Hurtig Udbetaling', 'Live Chat 24/7'],
    withdrawalTime: '0-3 timer',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Udenlandske casinoer med Trustly betalingsløsning - sikre og hurtige transaktioner"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        
        <div className="container relative z-10 px-4 py-16 md:py-24">
          
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm text-muted-foreground">Opdateret Marts 2026</span>
            </div>
            
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Udenlandske Casinoer :{' '}
              <span className="gold-text">med Trustly 2026</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              Leder du efter et pålideligt udenlandsk casino med hurtige Trustly-betalinger? 
              Efter 7 års erfaring med at teste online casinoer har jeg samlet de absolut 
              bedste valg til danske spillere i 2026.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-trustly" />
                <span className="text-sm text-foreground">100% Sikre Betalinger</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-gold" />
                <span className="text-sm text-foreground">Udbetalinger på 0-2 Timer</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CreditCard className="w-5 h-5 text-gold" />
                <span className="text-sm text-foreground">Ingen Gebyrer</span>
              </div>
            </div>
            
            <a
              href="#top-casinoer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light text-background font-bold text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 transform hover:scale-105"
            >
              Se Top 5 Casinoer Nu
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
  <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">

          {/* Sidebar */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              <TableOfContents />
              <AuthorBox />
            </div>
          </aside>

          {/* Content */}
          <article className="lg:col-span-2 order-1 lg:order-2 space-y-12">
            
            {/* Intro */}
            <section className="prose-invert">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hej, jeg hedder Miguel, og jeg har brugt de sidste 7+ år på at teste og anmelde 
                online casinoer. Hvis du er her, er det sandsynligvis fordi du overvejer at 
                spille på et udenlandsk casino med Trustly - og det er en beslutning, jeg helt 
                kan forstå. Trustly har revolutioneret måden, vi overfører penge på, og kombineret 
                med de rigtige casinoer får du en oplevelse, der overgår de fleste danske alternativer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Men her er sagen: Ikke alle udenlandske casinoer er skabt lige. Nogle tilbyder 
                fantastiske bonusser og lynhurtige udbetalinger, mens andre... ja, lad os bare sige, 
                at de bør undgås. I denne guide deler jeg mine personlige erfaringer og viser dig 
                præcis, hvad du skal kigge efter i 2026.
              </p>
            </section>

            {/* Top Casinos Section */}
            <section id="top-casinoer" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-dark via-gold to-gold-light flex items-center justify-center">
                  <Award className="w-6 h-6 text-background" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Top 5 Udenlandske Casinoer med Trustly i 2026
                </h2>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Efter at have testet over 50 udenlandske casinoer med Trustly i Februar 2026, 
                er her mine personlige favoritter. Disse casinoer har alle bevist deres værd 
                gennem hurtige udbetalinger, fair spil og pålidelig kundeservice.
              </p>

              <div className="space-y-4">
                {casinoData.map((casino) => (
                  <CasinoCard key={casino.rank} {...casino} />
                ))}
              </div>

              {/* Comparison Table */}
              <div className="mt-10 casino-card p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Sammenligning af Alle Casinoer
                </h3>
                <div className="overflow-x-auto -mx-4 px-4">
  <ComparisonTable />
</div>
              </div>
            </section>

            {/* Why Trustly Section */}
            <section id="hvorfor-trustly" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-trustly to-trustly/70 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-background" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Hvorfor Vælge Trustly til Online Casino?
                </h2>
              </div>

              <div className="casino-card overflow-hidden mb-8">
                <img 
                  src={securityImage} 
                  alt="Trustly sikkerhed og beskyttelse af dine betalinger på online casinoer"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Jeg har prøvet mange betalingsmetoder gennem årene - fra kreditkort til e-wallets - 
                men Trustly er uden tvivl blevet min foretrukne metode. Hvorfor? Fordi det kombinerer 
                sikkerhed med hastighed på en måde, ingen andre kan matche.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="casino-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock className="w-5 h-5 text-trustly" />
                    <h3 className="font-heading text-lg font-semibold text-foreground">Bankniveau Sikkerhed</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dine bankoplysninger deles aldrig med casinoet. Alt håndteres direkte 
                    gennem din egen netbank med MitID/NemID.
                  </p>
                </div>
                <div className="casino-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-gold" />
                    <h3 className="font-heading text-lg font-semibold text-foreground">Øjeblikkelige Indbetalinger</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dine penge lander på casinokontoen inden for sekunder. 
                    Ingen ventetid, ingen forsinkelser.
                  </p>
                </div>
                <div className="casino-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-gold" />
                    <h3 className="font-heading text-lg font-semibold text-foreground">Hurtige Udbetalinger</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    De bedste Trustly-casinoer behandler udbetalinger på 0-2 timer - 
                    nogle gange hurtigere end traditionelle banker!
                  </p>
                </div>
                <div className="casino-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-5 h-5 text-gold" />
                    <h3 className="font-heading text-lg font-semibold text-foreground">Ingen Gebyrer</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trustly opkræver ikke gebyrer fra spillere, og de casinoer 
                    jeg anbefaler dækker alle omkostninger.
                  </p>
                </div>
              </div>

              <div className="casino-card p-6 border-l-4 border-l-gold">
                <p className="text-foreground italic">
                  "I min erfaring er Trustly den mest problemfrie betalingsmetode til online gambling. 
                  På 7 år har jeg aldrig oplevet en fejlslagen transaktion eller sikkerhedsproblem."
                </p>
                <p className="text-gold mt-2 text-sm">— Miguel, Casino Ekspert</p>
              </div>
            </section>

            {/* How to Choose Section */}
            <section id="saadan-vaelger" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-gold" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Sådan Vælger Du Det Rigtige Udenlandske Casino
                </h2>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Med hundredvis af udenlandske casinoer derude, hvordan finder du så det rigtige? 
                Her er min personlige tjekliste, som jeg bruger hver gang jeg anmelder et nyt casino:
              </p>

              <div className="space-y-4">
                <div className="casino-card p-5">
                  <div className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-background font-bold flex-shrink-0">1</span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Tjek Licensen</h3>
                      <p className="text-sm text-muted-foreground">
                        Det vigtigste! Se efter licenser fra Malta Gaming Authority (MGA), 
                        UK Gambling Commission eller Gibraltar. Disse myndigheder sikrer, 
                        at casinoet følger strenge regler for fair spil og beskyttelse af spillere.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="casino-card p-5">
                  <div className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-background font-bold flex-shrink-0">2</span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Test Udbetalingstiderne</h3>
                      <p className="text-sm text-muted-foreground">
                        Et godt Trustly-casino bør kunne udbetale gevinster inden for få timer. 
                        Hvis de tager dage, er det et rødt flag. Jeg tester altid dette personligt 
                        før jeg anbefaler et casino.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="casino-card p-5">
                  <div className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-background font-bold flex-shrink-0">3</span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Læs Bonusvilkårene</h3>
                      <p className="text-sm text-muted-foreground">
                        En bonus på 300% lyder fantastisk, men hvis omsætningskravet er x60, 
                        er den næsten umulig at gennemspille. Jeg foretrækker realistiske 
                        bonusser med x25-x35 i omsætning.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="casino-card p-5">
                  <div className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-background font-bold flex-shrink-0">4</span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Vurder Spiludvalget</h3>
                      <p className="text-sm text-muted-foreground">
                        Et godt casino bør tilbyde spil fra anerkendte udbydere som NetEnt, 
                        Microgaming, Play'n GO og Evolution Gaming. Kvalitet går over kvantitet.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="casino-card p-5">
                  <div className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-background font-bold flex-shrink-0">5</span>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Test Kundesupporten</h3>
                      <p className="text-sm text-muted-foreground">
                        Skriv til deres live chat med et spørgsmål. Svarer de hurtigt og kompetent? 
                        Er de tilgængelige 24/7? Dette siger meget om casinoets generelle kvalitet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bonuses Section */}
            <section id="bonusser" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-dark via-gold to-gold-light flex items-center justify-center">
                  <Star className="w-6 h-6 text-background" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Bonusser og Tilbud på Trustly Casinoer
                </h2>
              </div>

              <div className="casino-card overflow-hidden mb-8">
                <img 
                  src={bonusImage} 
                  alt="Casino bonusser og velkomsttilbud på udenlandske Trustly casinoer"
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                En af de største fordele ved udenlandske casinoer er deres generøse bonusser. 
                Uden de danske restriktioner kan de tilbyde velkomstpakker, der får danske 
                casinoers tilbud til at blegne. Men pas på - ikke alle bonusser er lige gode.
              </p>

              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Typer af Bonusser Du Møder
              </h3>

              <div className="grid gap-4 mb-8">
                <div className="casino-card p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">Velkomstbonus</h4>
                    <p className="text-sm text-muted-foreground">
                      Den klassiske "match bonus" - casinoet matcher din første indbetaling med 
                      typisk 100-300%. På de bedste Trustly-casinoer kan du få op til 5.000 kr ekstra.
                    </p>
                  </div>
                </div>
                
                <div className="casino-card p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎰</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">Gratis Spins</h4>
                    <p className="text-sm text-muted-foreground">
                      Ofte inkluderet i velkomstpakken. Du får et antal gratis spins på populære 
                      spilleautomater som Starburst, Book of Dead eller Gonzo's Quest.
                    </p>
                  </div>
                </div>
                
                <div className="casino-card p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">Cashback</h4>
                    <p className="text-sm text-muted-foreground">
                      Nogle casinoer tilbyder cashback på dine tab - typisk 5-15% af 
                      ugens nettotab. En god sikkerhedsnet for dem der spiller regelmæssigt.
                    </p>
                  </div>
                </div>
                
                <div className="casino-card p-5 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👑</span>
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">VIP-programmer</h4>
                    <p className="text-sm text-muted-foreground">
                      Loyale spillere belønnes med eksklusive bonusser, personlig account manager, 
                      hurtigere udbetalinger og invitationer til VIP-events.
                    </p>
                  </div>
                </div>
              </div>

              <div className="casino-card p-6 border-l-4 border-l-destructive">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                      Vigtigt om Omsætningskrav
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Hvis en bonus har et omsætningskrav på x35, skal du gennemspille bonusbeløbet 
                      35 gange før du kan udbetale. En bonus på 1.000 kr med x35 kræver altså 
                      35.000 kr i indsatser. Tjek altid dette før du accepterer en bonus!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Section */}
            <section id="sikkerhed" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-trustly to-trustly/70 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-background" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Sikkerhed og Licenser: Hvad Du Skal Vide
                </h2>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Sikkerhed er ikke til forhandling. Når du spiller på et udenlandsk casino, 
                er det afgørende at forstå, hvad der beskytter dig - og hvad der ikke gør.
              </p>

              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Anerkendte Spillelicenser i 2026
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="casino-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-lg">🇲🇹</span>
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">Malta Gaming Authority (MGA)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    En af de mest respekterede licenser i verden. MGA sikrer streng regulering, 
                    regelmæssige audits og beskyttelse af spillernes midler.
                  </p>
                </div>
                
                <div className="casino-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-lg">🇬🇧</span>
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">UK Gambling Commission</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Den strengeste licens i branchen. Casinoer med UKGC-licens overholder 
                    ekstremt høje standarder for fair play og ansvarligt spil.
                  </p>
                </div>
                
                <div className="casino-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-lg">🇬🇮</span>
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">Gibraltar Regulatory Authority</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kendt for sine strenge krav til kapitalkrav og operationelle standarder. 
                    Mange store, etablerede casinoer holder Gibraltar-licens.
                  </p>
                </div>
                
                <div className="casino-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-lg">🇨🇼</span>
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground">Curacao eGaming</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mindre streng end MGA, men stadig en legitim licens. Mange nyere casinoer 
                    starter her. Tjek altid om licensen er aktiv og gyldig.
                  </p>
                </div>
              </div>

              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                Sådan Beskytter Trustly Dig
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trustly flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Ingen deling af bankoplysninger:</strong> Casinoet ser 
                    aldrig dine login-detaljer eller kontoinformation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trustly flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Reguleret af Finansinspektionen:</strong> Trustly er 
                    en svensk betroet betalingsudbyder under EU-lovgivning.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trustly flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">256-bit SSL-kryptering:</strong> Alle transaktioner 
                    beskyttes med den samme kryptering som banker bruger.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-trustly flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Direkte bankforbindelse:</strong> Penge overføres 
                    direkte mellem din bank og casinoet - ingen mellemled.
                  </span>
                </li>
              </ul>

              <div className="casino-card p-6 bg-secondary/30">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                      Mit Personlige Tip
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Før du indbetaler på et nyt casino, anbefaler jeg at starte med et lille 
                      beløb og teste udbetalingsprocessen. På den måde kan du verificere, at 
                      alt fungerer, før du forpligter dig med større summer.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                  <span className="text-2xl">❓</span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Ofte Stillede Spørgsmål om Trustly Casinoer
                </h2>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Her er svar på de spørgsmål, jeg oftest får fra danske spillere om 
                udenlandske casinoer med Trustly:
              </p>

              <FAQ />
            </section>

            {/* Conclusion */}
            <section className="casino-card p-6 md:p-8 bg-gradient-to-br from-gold/10 to-transparent border-gold/30">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Min Endelige Anbefaling
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Efter 7 års erfaring i branchen er jeg overbevist om, at udenlandske casinoer 
                med Trustly tilbyder den bedste oplevelse for danske spillere, der søger 
                fleksibilitet, hurtige udbetalinger og generøse bonusser.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hvis jeg skulle vælge ét casino at anbefale i 2026, ville det være 
                <span className="text-gold font-semibold"> Casino Alpha</span> - de kombinerer 
                alt det bedste: Lynhurtige Trustly-udbetalinger, fantastisk kundeservice, 
                og en bonus der faktisk kan gennemspilles.
              </p>
              <p className="text-foreground font-medium">
                Husk: Spil altid ansvarligt, sæt grænser for dig selv, og spil kun med penge 
                du har råd til at tabe.
              </p>
              <p className="text-gold mt-4 font-heading italic">
                — Miguel, Casino Ekspert siden 2019
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
