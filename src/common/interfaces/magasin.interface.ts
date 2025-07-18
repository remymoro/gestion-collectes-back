export interface Magasin {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  contactEmail: string;
  contactPerson: string;
  isPartner: boolean;
  createdAt: Date;
  updatedAt: Date;
}