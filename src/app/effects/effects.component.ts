import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css']
})
export class EffectsComponent implements OnInit{


  ngOnInit(): void {
    const currentUser = signal({nombre: 'Sergie Code'})


    effect((onCleanup) => {
      const usuario = currentUser();
    
      const temporizador = setTimeout(() => {
        console.log(`Hace un segundo el usuario fue ${usuario.nombre}`);
      }, 1000);
    
      onCleanup(() => {
        clearTimeout(temporizador);
      });
    });
  }

}
