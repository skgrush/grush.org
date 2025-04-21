import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { dateReducer, DateReducerFormat } from './date-reducer';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'grush-date-reducer',
  imports: [
    FormsModule,
  ],
  templateUrl: './date-reducer.component.html',
  styleUrl: './date-reducer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateReducerComponent {

  readonly format = signal(DateReducerFormat.ISO);
  readonly onlyShowReduced = signal(false);
  readonly year = signal<number | undefined>(undefined);


  readonly dates = computed(() => {
    const year = this.year();
    const format = this.format();
    const formatter = DateReducerComponent.slashFormatter;
    // const formatter =
    //   format === 'ISO'
    //     ? DateReducerComponent.isoFormatter
    //     : DateReducerComponent.slashFormatter;

    const unformattedPairs = [...dateReducer(format, year)];

    const formattedPairs = unformattedPairs
      .map(({ dateParts, gcd, reducedParts, date }) =>
      ({
          dateObj: date,
          dateParts: formatter(dateParts),
          gcd,
          reducedParts: formatter(reducedParts)
      } as const));

    return formattedPairs;
  });

  yearChanged(event: Event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }
    if (!target.validity.valid || isNaN(target.valueAsNumber)) {
      this.year.set(undefined);
    }
    else {
      this.year.set(target.valueAsNumber);
    }
  }

  private static isoFormatter(numbers: readonly number[]): string {
    return numbers.map(n => n.toString().padStart(2, '0')).join('-');
  }
  private static slashFormatter(numbers: readonly number[]): string {
    return numbers.map(n => n.toString().padStart(2, '0')).join('/');
  }

}

export default DateReducerComponent;
