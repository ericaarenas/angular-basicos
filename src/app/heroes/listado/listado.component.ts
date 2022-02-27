import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Superman'];
  heroeBorrado: string = '';

  borrarHeroe() {
    // this.heroes = this.heroes.splice(0, this.heroes.length-1);
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
