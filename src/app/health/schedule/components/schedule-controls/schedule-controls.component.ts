import { Component, Input } from '@angular/core';

@Component({
  selector: 'schedule-controls',
  styleUrls: ['schedule-controls.component.scss'],
  template: `
    <div class="controls">

    <button type="button">
      <img src="/assets/img/chevron-left.svg" >
    </button>
    <p>{{ selected | date:'yMMMMd' }}</p>
    <button type="button">
      <img src="/assets/img/chevron-right.svg" >
    </button>

    </div>
  `
})

export class ScheduleControlsComponent {

  @Input() selected: Date;

  constructor() {}

}
