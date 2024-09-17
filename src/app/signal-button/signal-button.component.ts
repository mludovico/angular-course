import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-signal-button',
  standalone: true,
  imports: [],
  templateUrl: './signal-button.component.html',
  styleUrl: './signal-button.component.css'
})
export class SignalButtonComponent {
  multiplier = signal(2)

  counter = signal(0)

  derivedCounter = computed(() => {
    const counter = this.counter()
    const multiplier = this.multiplier()
    if (multiplier >= 4) {
      return counter * 4
    } else {
      return 0
    }
  })

  increment() {
    this.counter.set(this.counter() + 1)
  }

  incrementMultiplier() {
    this.multiplier.set(this.multiplier() + 1)
  }
}
