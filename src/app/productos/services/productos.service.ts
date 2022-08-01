import { Injectable } from '@angular/core';
import { Grupo, Producto } from '../interfaces/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos:Producto[];
  private grupos:Grupo[];

  constructor() {
    this.grupos=[
      {
        id: 1,
        nombre:'Lacteos'
      },
      {
        id:2,
        nombre: 'Grano'
      },
      {
        id:3,
        nombre:'Cereal'
      }
    ];
    this.productos=[];
   }

   getGrupos(){
    return this.grupos;
   }

   getProductos(){
    return this.productos;
   }

   agregarProductos(producto:Producto){
    this.productos.push(producto);
   }

   nuevoProducto():Producto{
    return {
      altura: '',
      descripcion:'',
      grupo:0,
      id:0,
      imagen: '',
      nombre: ''
    }
   }
}
