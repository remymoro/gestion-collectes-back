import { Injectable, NotFoundException } from '@nestjs/common';
import { ProduitCollecte } from '../common/interfaces';
import { CreateProduitCollecteDto, UpdateProduitCollecteDto } from './dto/produit-collecte.dto';

@Injectable()
export class ProduitsCollectesService {
  private produits: ProduitCollecte[] = [];
  private idCounter = 1;

  findAll(): ProduitCollecte[] {
    return this.produits;
  }

  findOne(id: string): ProduitCollecte {
    const produit = this.produits.find(produit => produit.id === id);
    if (!produit) {
      throw new NotFoundException(`Produit collecte with ID ${id} not found`);
    }
    return produit;
  }

  create(createProduitDto: CreateProduitCollecteDto): ProduitCollecte {
    const newProduit: ProduitCollecte = {
      id: this.idCounter.toString(),
      ...createProduitDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.idCounter++;
    this.produits.push(newProduit);
    return newProduit;
  }

  update(id: string, updateProduitDto: UpdateProduitCollecteDto): ProduitCollecte {
    const produitIndex = this.produits.findIndex(produit => produit.id === id);
    if (produitIndex === -1) {
      throw new NotFoundException(`Produit collecte with ID ${id} not found`);
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
      throw new NotFoundException(`Produit collecte with ID ${id} not found`);
    }
    this.produits.splice(produitIndex, 1);
  }

  findByCollecte(collecteId: string): ProduitCollecte[] {
    return this.produits.filter(produit => produit.collecteId === collecteId);
  }

  findByProduitCatalogue(produitCatalogueId: string): ProduitCollecte[] {
    return this.produits.filter(produit => produit.produitCatalogueId === produitCatalogueId);
  }
}
