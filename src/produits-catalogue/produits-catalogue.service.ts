import { Injectable, NotFoundException } from '@nestjs/common';
import { ProduitCatalogue } from '../common/interfaces';
import { CreateProduitCatalogueDto, UpdateProduitCatalogueDto } from './dto/produit-catalogue.dto';

@Injectable()
export class ProduitsCatalogueService {
  private produits: ProduitCatalogue[] = [];
  private idCounter = 1;

  findAll(): ProduitCatalogue[] {
    return this.produits;
  }

  findOne(id: string): ProduitCatalogue {
    const produit = this.produits.find(produit => produit.id === id);
    if (!produit) {
      throw new NotFoundException(`Produit with ID ${id} not found`);
    }
    return produit;
  }

  create(createProduitDto: CreateProduitCatalogueDto): ProduitCatalogue {
    const newProduit: ProduitCatalogue = {
      id: this.idCounter.toString(),
      ...createProduitDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.idCounter++;
    this.produits.push(newProduit);
    return newProduit;
  }

  update(id: string, updateProduitDto: UpdateProduitCatalogueDto): ProduitCatalogue {
    const produitIndex = this.produits.findIndex(produit => produit.id === id);
    if (produitIndex === -1) {
      throw new NotFoundException(`Produit with ID ${id} not found`);
    }
    
    this.produits[produitIndex] = {
      ...this.produits[produitIndex],
      ...updateProduitDto,
      updatedAt: new Date(),
    };
    
    return this.produits[produitIndex];
  }

  remove(id: string): void {
    const produitIndex = this.produits.findIndex(produit => produit.id === id);
    if (produitIndex === -1) {
      throw new NotFoundException(`Produit with ID ${id} not found`);
    }
    this.produits.splice(produitIndex, 1);
  }

  findByCategory(category: string): ProduitCatalogue[] {
    return this.produits.filter(produit => produit.category === category);
  }

  findActive(): ProduitCatalogue[] {
    return this.produits.filter(produit => produit.isActive);
  }
}
