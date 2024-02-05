export interface KontoData {
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
}
