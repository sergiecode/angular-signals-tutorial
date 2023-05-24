import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  ngOnInit() {

    const contador = signal<number>(0);

    contador.update(valor => valor + 1);

    console.log('El valor de contador es: ' + contador()); //2

  }
}