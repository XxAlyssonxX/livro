import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] =[
    {id: 1, name: "Maus", price: 5.0, description: "Maus", image:"../maus.png"},
    {id: 2, name: "Morango", price: 7.5, description: "Rato", image:"../morango.png"},
    {id: 3, name: "Banana", price: 6.0, description: "Banana", image:"../banana.png"},
    {id: 4, name: "Maus", price: 5.0, description: "Maus", image:"../maus.png"},
    {id: 5, name: "Morango", price: 7.5, description: "Rato", image:"../morango.png"},
    {id: 6, name: "Banana", price: 6.0, description: "Banana", image:"../banana.png"},
    {id: 7, name: "Morango", price: 7.5, description: "Rato", image:"../morango.png"},
    {id: 8, name: "Banana", price: 6.0, description: "Banana", image:"../banana.png"},
    {id: 9, name: "Maus", price: 5.0, description: "Maus", image:"../maus.png"},
    {id: 10, name: "Morango", price: 7.5, description: "Rato", image:"../morango.png"}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }

}
  

