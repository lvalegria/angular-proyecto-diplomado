import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from './services/productos.service';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AltaProductoComponent
   

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[
    ProductosService,

  ]
})
export class ProductosModule { }
