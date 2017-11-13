import { Component, Input } from '@angular/core';

@Component({
  selector: 'schedule-calendar',
  styleUrls: ['schedule-calendar.component.scss'],
  template: `
    <div class="calendar">

      <schedule-controls [selected]="selectedDay">
      </schedule-controls>

    </div>
  `
})

export class ScheduleCalendarComponent {

  selectedDay: Date;

  @Input() set date(date: Date) {
    this.selectedDay = new Date(date.getTime());
  }

  constructor() {}

}
