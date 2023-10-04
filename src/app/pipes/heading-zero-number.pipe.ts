import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'headingZeroNumber' })
export class HeadingZeroNumberPipe implements PipeTransform {
  transform(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
