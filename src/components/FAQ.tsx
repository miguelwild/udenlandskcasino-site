import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'Er udenlandske casinoer med Trustly sikre at bruge i 2026?',
    answer: 'Ja, udenlandske casinoer med Trustly er sikre, forudsat at de har en gyldig licens fra en anerkendt myndighed som Malta Gaming Authority eller UK Gambling Commission. Trustly selv er reguleret af den svenske Finansinspektionen og bruger bankniveau-kryptering til alle transaktioner. Jeg anbefaler altid at tjekke casinoets licens i bunden af siden før du opretter en konto.',
  },
  {
    question: 'Hvor hurtigt kan jeg hæve penge med Trustly?',
    answer: 'En af de største fordele ved Trustly er de hurtige udbetalinger. På de bedste udenlandske casinoer kan du ofte få dine penge inden for 0-2 timer. Dog afhænger den præcise tid også af casinoets interne behandlingstid og din banks åbningstider. I min erfaring er de fleste Trustly-udbetalinger gennemført samme dag.',
  },
  {
    question: 'Skal jeg betale skat af gevinster fra udenlandske casinoer?',
    answer: 'I Danmark er casinogevinster generelt skattefrie, uanset om de kommer fra danske eller udenlandske casinoer. Dog kan reglerne ændre sig, så jeg anbefaler at holde dig opdateret hos SKAT. Hvis du spiller for meget store beløb regelmæssigt, kan det være en god idé at konsultere en skatteekspert.',
  },
  {
    question: 'Hvad er forskellen på Trustly og Pay N Play?',
    answer: 'Trustly er betalingsmetoden, mens Pay N Play er en casinofunktion der bruger Trustly til at tillade hurtig registrering. Med Pay N Play kan du starte med at spille inden for sekunder, da dine oplysninger automatisk hentes fra din bank. Ikke alle Trustly-casinoer tilbyder Pay N Play, men alle Pay N Play casinoer bruger Trustly.',
  },
  {
    question: 'Kan jeg få bonus på udenlandske Trustly casinoer?',
    answer: 'Absolut! Faktisk tilbyder mange udenlandske casinoer mere generøse bonusser end danske licenserede casinoer, fordi de ikke er underlagt de samme restriktioner. Du kan finde velkomstbonusser på op til 200-300% af din første indbetaling, plus gratis spins. Husk altid at læse bonusvilkårene, særligt omsætningskravene.',
  },
  {
    question: 'Hvilke danske banker understøtter Trustly?',
    answer: 'De fleste større danske banker understøtter Trustly, herunder Danske Bank, Nordea, Jyske Bank, Sydbank, Nykredit og Spar Nord. Hvis du bruger netbank, kan du næsten altid bruge Trustly. Transaktionen sker direkte i dit bankvindue med NemID/MitID, så dine bankoplysninger deles aldrig med casinoet.',
  },
  {
    question: 'Er der gebyrer på Trustly-transaktioner?',
    answer: 'Trustly opkræver generelt ingen gebyrer fra spillere. De casinoer jeg anbefaler dækker alle transaktionsomkostninger, så både ind- og udbetalinger er helt gratis for dig. Vær dog opmærksom på, at nogle casinoer kan have minimums- eller maksimumsgrænser for transaktioner.',
  },
  {
    question: 'Hvorfor vælge et udenlandsk casino fremfor et dansk?',
    answer: 'Udenlandske casinoer tilbyder ofte flere fordele: Højere bonusser uden de danske restriktioner, større spiludvalg, ingen ROFUS-begrænsninger, og mulighed for Pay N Play. Dog mister du beskyttelsen fra Spillemyndigheden. For erfarne spillere der ved hvad de laver, kan udenlandske casinoer være et attraktivt alternativ.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="casino-card overflow-hidden"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
            aria-expanded={openIndex === index}
          >
            <h3 className="font-heading text-lg font-medium text-foreground pr-4" itemProp="name">
              {item.question}
            </h3>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p className="px-5 pb-5 text-muted-foreground leading-relaxed" itemProp="text">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
