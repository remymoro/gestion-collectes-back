export interface ProduitCatalogue {
  id: string;
  name: string;
  description: string;
  category: string;
  unit: string;
  estimatedValue: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}