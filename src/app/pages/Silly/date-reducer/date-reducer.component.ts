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

  readonly includeYear = signal(false);
  readonly format = signal(DateReducerFormat.ISO);
  readonly onlyShowReduced = signal(false);

  readonly dates = computed(() => {
    const includeYear = this.includeYear();
    const format = this.format();
    const formatter = DateReducerComponent.slashFormatter;
    // const formatter =
    //   format === 'ISO'
    //     ? DateReducerComponent.isoFormatter
    //     : DateReducerComponent.slashFormatter;

    const unformattedPairs = [...dateReducer(format, includeYear)];

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

  private static isoFormatter(numbers: readonly number[]): string {
    return numbers.map(n => n.toString().padStart(2, '0')).join('-');
  }
  private static slashFormatter(numbers: readonly number[]): string {
    return numbers.map(n => n.toString().padStart(2, '0')).join('/');
  }

}

export default DateReducerComponent;
