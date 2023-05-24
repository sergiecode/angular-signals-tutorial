import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-mutate',
  templateUrl: './mutate.component.html',
  styleUrls: ['./mutate.component.css']
})
export class MutateComponent implements OnInit {

  ngOnInit() {


    const usuarios = signal([{ nombre: 'Sergie Code', tecnologia: 'Angular' }]);


    usuarios.mutate(usuario => {
      usuario[0].tecnologia = 'Angular con Signals';
    });

    console.log(usuarios()[0])
  }
}
