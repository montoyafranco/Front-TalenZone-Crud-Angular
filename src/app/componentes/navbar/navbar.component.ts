import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductoVenta } from 'src/app/servicios/modelo/modelos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<{ count: number }>
  ) { 
    this.count = store.select('count');
  }

  ngOnInit(): void {
  }
  productos: ProductoVenta[] = [];
  count:
  | Observable<number>
  | undefined;
 

}
