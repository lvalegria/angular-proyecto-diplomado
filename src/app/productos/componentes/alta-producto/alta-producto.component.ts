import { Component, OnInit } from '@angular/core';
import { Grupo, Producto } from '../../interfaces/producto.model';
import { ProductosService } from '../../services/productos.service';
import {FormBuilder, NgModel} from '@angular/forms';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})


export class AltaProductoComponent implements OnInit {

  producto:Producto;
  grupos:Grupo[];
  form:any
  



  constructor(private productoService:ProductosService) {
    
  }
 
  ngOnInit() {
    this.producto=this.productoService.nuevoProducto();
    this.grupos=this.productoService.getGrupos();
  }

  nuevoProducto():void{
    this.productoService.agregarProductos(this.producto);
    this.producto=this.productoService.nuevoProducto();
  }
 

}


