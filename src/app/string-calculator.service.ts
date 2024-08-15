import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n', 2);
      delimiter = parts[0].substring(2);
      numbers = parts[1];
    }

    numbers = numbers.replace(/\n/g, delimiter);
    const numArray = numbers.split(delimiter);

    const negatives = numArray.filter(num => parseInt(num) < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
    }

    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
  }
}