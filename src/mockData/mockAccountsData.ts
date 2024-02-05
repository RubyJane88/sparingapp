type KontoData = {
  title?: string;
  link?: string;
  id: string;
  navn: string;
  leverandor?: string;
  rentesats1?: string;
  rentesatser?: string[];
  minBelop?: number;
  maksBelop?: number;
  frie_uttak?: number;
  spesielleBetingelser?: string;
  gruppe?: string;
  kap_periode?: number;
  maks_alder?: number;
  min_alder?: number;
  manedlig_sparing?: boolean;
  markedsomraade?: string;
  markedsomraadeTekst?: string;
};

export const falskeKontoData: KontoData[] = [
  {
    title: "FlexiSpar Konto",
    id: "flexiSparKonto",
    navn: "FlexiSpar Konto",
    leverandor: "SpareBank 1",
    rentesatser: ["1.75%", "2.00%"],
    minBelop: 0,
    maksBelop: 500000,
    frie_uttak: 12,
    spesielleBetingelser: "Ubegrenset antall gratis uttak.",
    gruppe: "FLEX01",
    kap_periode: 12,
    maks_alder: 100,
    min_alder: 18,
    manedlig_sparing: true,
    markedsomraade: "Landsdekkende",
    markedsomraadeTekst:
      "Tilbyr konkurransedyktige spareprodukter til kunder over hele landet.",
  },
  {
    title: "Høyrente Konto Plus",
    id: "hoyrenteKontoPlus",
    navn: "Høyrente Konto Plus",
    leverandor: "Bank2",
    rentesatser: ["3.00%", "3.25%", "3.50%"],
    minBelop: 10000,
    maksBelop: 2000000,
    frie_uttak: 0,
    spesielleBetingelser:
      "Ingen uttak tillatt i bindingsperioden for å oppnå høyeste rentesatser.",
    gruppe: "HOY01",
    kap_periode: 12,
    maks_alder: 100,
    min_alder: 18,
    manedlig_sparing: false,
    markedsomraade: "Landsdekkende",
    markedsomraadeTekst:
      "Fokuserer på høyrenteprodukter for langsiktig sparing.",
  },
  {
    title: "PensjonSpar",
    id: "pensjonSpar",
    navn: "PensjonSpar",
    leverandor: "Pensjonsbanken",
    rentesatser: ["2.10%", "2.35%"],
    minBelop: 500,
    maksBelop: 1000000,
    frie_uttak: 6,
    spesielleBetingelser:
      "Sparekonto spesielt utviklet for pensjonister med fleksibel uttaksordning.",
    gruppe: "PENS01",
    kap_periode: 12,
    maks_alder: 100,
    min_alder: 60,
    manedlig_sparing: true,
    markedsomraade: "Landsdekkende",
    markedsomraadeTekst: "Tilpassede spareløsninger for pensjonister.",
  },
  {
    title: "StudentSpar",
    id: "studentSpar",
    navn: "StudentSpar",
    leverandor: "StudentBanken",
    rentesatser: ["0.50%", "0.75%", "1.00%"],
    minBelop: 0,
    maksBelop: 50000,
    frie_uttak: 6,
    spesielleBetingelser:
      "Ingen krav til minimumsinnskudd, målrettet mot studenter.",
    gruppe: "STUD01",
    kap_periode: 12,
    maks_alder: 30,
    min_alder: 18,
    manedlig_sparing: true,
    markedsomraade: "Landsdekkende",
    markedsomraadeTekst: "Skreddersydde banktjenester for studenter.",
  },
  {
    title: "NettSpar Premium",
    id: "nettSparPremium",
    navn: "NettSpar Premium",
    leverandor: "CyberBank AS",
    rentesatser: ["2.5%", "2.75%", "3.0%"],
    minBelop: 0,
    maksBelop: 1500000,
    frie_uttak: 4,
    spesielleBetingelser:
      "Nettbasert sparekonto med høyere renter for digitale kunder.",
    gruppe: "NETT01",
    kap_periode: 12,
    maks_alder: 100,
    min_alder: 18,
    manedlig_sparing: true,
    markedsomraade: "Landsdekkende",
    markedsomraadeTekst:
      "Tilbyr moderne nettbankløsninger med fokus på brukervennlighet og tilgjengelighet.",
  },
  {
    title: "GullSpar",
    id: "gullSpar",
    navn: "GullSpar",
    leverandor: "GullBanken",
    rentesatser: ["1.0%", "1.25%", "1.5%"],
    minBelop: 50000,
    maksBelop: 3000000,
    frie_uttak: 2,
    spesielleBetingelser:
      "For kunder med stor sparekapasitet, inkluderer gratis rådgivningstjenester.",
    gruppe: "GULL01",
    kap_periode: 12,
    maks_alder: 100,
    min_alder: 18,
    manedlig_sparing: false,
    markedsomraade: "Landsdekkende",
    markedsomraadeTekst:
      "Spesialiserer seg på høyverdige spareprodukter for velstående individer.",
  },
  {
    title: "FamileSpar",
    id: "famileSpar",
    navn: "FamileSpar",
    leverandor: "FamilieBanken",
    rentesatser: ["1.8%", "2.0%", "2.2%"],
    minBelop: 0,
    maksBelop: 1000000,
    frie_uttak: 6,
    spesielleBetingelser:
      "Sparekonto for hele familien med gunstige vilkår for barn og unge.",
    gruppe: "FAM01",
    kap_periode: 12,
    maks_alder: 100,
    min_alder: 0,
    manedlig_sparing: true,
    markedsomraade: "Landsdekkende",
    markedsomraadeTekst:
      "Tilbyr en rekke finansielle tjenester designet for å støtte familier.",
  },
  {
    title: "Byggekonto",
    id: "byggeKonto",
    navn: "Byggekonto",
    leverandor: "ByggeBanken AS",
    rentesatser: ["0.8%", "1.0%", "1.2%"],
    minBelop: 20000,
    maksBelop: 500000,
    frie_uttak: 0,
    spesielleBetingelser:
      "For byggeprosjekter med fastrenteperiode. Ingen uttak tillatt før prosjektets slutt.",
    gruppe: "BYGG01",
    kap_periode: 24,
    maks_alder: 100,
    min_alder: 18,
    manedlig_sparing: false,
    markedsomraade: "Regionalt",
    markedsomraadeTekst:
      "Støtter byggeprosjekter med skreddersydde finansieringsløsninger.",
  },
  {
    title: "Pensjonsfond Konto",
    id: "Pensjonfond Konto",
    navn: "Pensjonfond Konto",
    leverandor: "PensjonSpar Bank",
    rentesatser: ["2.2%", "2.5%", "2.75%"],
    minBelop: 10000,
    maksBelop: 2000000,
    frie_uttak: 1,
    spesielleBetingelser:
      "Langsiktig sparekonto optimalisert for pensjonsparing med skattefordeler.",
    gruppe: "PENSFOND01",
    kap_periode: 12,
    maks_alder: 100,
    min_alder: 18,
    manedlig_sparing: true,
    markedsomraade: "Landsdekkende",
    markedsomraadeTekst:
      "Tilbyr pensjonsplanlegging og sparing med fokus på stabile avkastninger.",
  },
];

export default falskeKontoData;

/* 
    1. Title (Tittel): The name of the savings account or financial product.
    2. Provider Text (Leverandør Tekst): The name of the bank or financial institution offering the savings account.
    3. Interest Rates (Rentesatser):

	Interest Rate 1 (Rentesats1): The base or first-tier interest rate offered on the savings account.
	Subsequent interest rates (Rentesats2, Rentesats3, etc.) might apply under different conditions or account balances.

    4. Minimum Amount (Min Beløp): The minimum deposit required to open or maintain the account.
    5. Maximum Amount (Maks Beløp): The maximum account balance to qualify for advertised benefits or interest rates.
    6. Free Withdrawals (Frie Uttak): The number of withdrawals allowed from the account without incurring fees.
    7. Special Conditions (Spesielle Betingelser): Specific requirements or conditions attached to the account, such as eligibility criteria or usage restrictions.

  */
