
export const IN_CURRENT_YEAR = new Date().getFullYear();

export enum DateReducerFormat {
  ISO = 'ISO',
  Euro = 'Euro',
  American = 'American',
}

const formatters = {
  [`${DateReducerFormat.ISO}-${true}` as const]: (d: Date) => [d.getFullYear(), d.getMonth() + 1, d.getDate()] as const,
  [`${DateReducerFormat.Euro}-${true}` as const]: (d: Date) => [d.getDate(), d.getMonth() + 1, d.getFullYear()] as const,
  [`${DateReducerFormat.American}-${true}` as const]: (d: Date) => [d.getMonth() + 1, d.getDate(), d.getFullYear()] as const,
  [`${DateReducerFormat.ISO}-${false}` as const]: (d: Date) => [d.getMonth() + 1, d.getDate()] as const,
  [`${DateReducerFormat.Euro}-${false}` as const]: (d: Date) => [d.getDate(), d.getMonth() + 1] as const,
  [`${DateReducerFormat.American}-${false}` as const]: (d: Date) => [d.getMonth() + 1, d.getDate()] as const,
} as const satisfies Record<`${DateReducerFormat}-${boolean}`, (d: Date) => [number, number] | [number, number, number]>;

export function* dateReducer(format: DateReducerFormat, includeYear?: number | boolean) {
  let year: number;
  if (typeof includeYear === 'number') {
    if ((includeYear < 1 || includeYear > 9999)) {
      throw new RangeError('Invalid year value');
    }
    year = includeYear;
    includeYear = true;
  }
  else {
    year = IN_CURRENT_YEAR;
    includeYear = !!includeYear;
  }

  const formatter = formatters[`${format}-${includeYear}`];

  for (const date of dateGenerator(year)) {
    const dateParts = formatter(date);

    const { gcd, reducedParts } = reduce(dateParts);
    yield {
      date: new Date(date),
      dateParts,
      gcd,
      reducedParts,
    }as const;
  }
}


function reduce(numbers: [number, number, ...number[]]) {
  let gcd = euclidianGcd(numbers[0], numbers[1]);

  for (const number_i of numbers.slice(2)) {
    if (gcd === 1) {
      break;
    }
    gcd = euclidianGcd(gcd, number_i);
  }

  return {
    gcd,
    reducedParts: gcd === 1 ? numbers : numbers.map(n => n / gcd)
  };
}

function euclidianGcd(a: number, b: number) {
  let t: number;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return a;
}


/**
 * Output every date of the given year, somewhere around noon.
 * **BEWARE** that the same date value is being emitted so either use it or copy it before running it again!
 */
function* dateGenerator(year: number) {
  year |= 0;
  // just for simpler/safetier, go for noon to avoid goofy shit like leap seconds
  const date = new Date(`${year}-01-01T12:00:00.000`);

  while (date.getFullYear() === year) {
    yield date;

    date.setDate(date.getDate() + 1);
  }
}
