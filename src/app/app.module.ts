import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { HistorialComponent } from './componentes/historial/historial.component'
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './redux/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    
    MainComponent,
    FooterComponent,
    NavbarComponent,
    ProductoComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({name:"TEST"}),
    [FormsModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
