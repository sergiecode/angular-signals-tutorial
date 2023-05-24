import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-computed',
  templateUrl: './computed.component.html',
  styleUrls: ['./computed.component.css']
})
export class ComputedComponent implements OnInit {

  ngOnInit() {

    const x = signal(5);
    const y = signal(3);
    const z = computed(() => x() + y());
    console.log(z()); // 8

    x.set(10);
    console.log(z()) // 13
  }
}