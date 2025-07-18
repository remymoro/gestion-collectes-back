export interface Collecte {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  centreId: string;
  magasinIds: string[];
  status: CollecteStatus;
  targetAmount: number;
  currentAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum CollecteStatus {
  PLANNED = 'planned',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}