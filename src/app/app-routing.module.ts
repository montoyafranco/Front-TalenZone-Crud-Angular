import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './componentes/historial/historial.component';
import { MainComponent } from './componentes/main/main.component';
import { ProductoComponent } from './componentes/producto/producto.component';

const routes: Routes = [
  { path: '',
  component: MainComponent
},
{ path: 'crear/producto',
  component: ProductoComponent
},
{ path: 'historial',
  component: HistorialComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
