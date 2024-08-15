import { TestBed } from '@angular/core/testing';
import { StringCalculatorService } from './string-calculator.service';

describe('StringCalculatorService', () => {
  let service: StringCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculatorService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toEqual(0);
  });

  it('should return the number itself for a single number', () => {
    expect(service.add('1')).toEqual(1);
  });

  it('should return the sum of two numbers', () => {
    expect(service.add('1,2')).toEqual(3);
  });

  it('should handle multiple numbers', () => {
    expect(service.add('1,2,3,4')).toEqual(10);
  });

  it('should handle new line as a separator', () => {
    expect(service.add('1\n2,3')).toEqual(6);
  });

  it('should support custom delimiters', () => {
    expect(service.add('//;\n1;2')).toEqual(3);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => service.add('1,-2,3')).toThrowError('Negative numbers not allowed: -2');
  });

  it('should throw an error for multiple negative numbers', () => {
    expect(() => service.add('1,-2,-3,4')).toThrowError('Negative numbers not allowed: -2,-3');
  });
});

