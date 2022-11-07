export type Play = {
  name: string;
  type: string;
};

export type Plays = {
  [key in string]: Play;
};

export type Performances = {
  playID: string;
  audience: number;
};

export type Invoice = {
  customer: string;
  performances: Performances[];
};

export type EnrichedPerformances = Performances & {
  play: Play;
  amount: number;
  volumeCredits: number;
};

export type StatementData = {
  customer: Invoice['customer'];
  performances: EnrichedPerformances[];
  totalAmount: number;
  totalVolumeCredits: number;
};