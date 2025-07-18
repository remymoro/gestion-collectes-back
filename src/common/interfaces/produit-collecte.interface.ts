export interface ProduitCollecte {
  id: string;
  collecteId: string;
  produitCatalogueId: string;
  quantityCollected: number;
  quantityTarget: number;
  createdAt: Date;
  updatedAt: Date;
}