export interface PlanningBenevole {
  id: string;
  benevoleId: string;
  collecteId: string;
  assignedDate: Date;
  startTime: string;
  endTime: string;
  role: string;
  status: PlanningStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum PlanningStatus {
  ASSIGNED = 'assigned',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}