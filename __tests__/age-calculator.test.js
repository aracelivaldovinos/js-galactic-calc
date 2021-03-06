import  Calculator  from './../src/age-calculator.js';
/* eslint-disable */
describe('Calculator', () => {

  test('should correctly create a calculator object with three properties', () => {
    const calculator = new Calculator (27,46, "jupiter");
    expect(calculator.age).toEqual(27);
    expect(calculator.lifeExpectancy).toEqual(46);
    expect(calculator.planet).toEqual("jupiter");
  });
  test('should calculate age in mercury years', () => {
    const mercuryAge = new Calculator (27,46, "mercury");
    expect(mercuryAge.ageCalculator ()).toEqual(6);
  });
  test('should calculate age in venus years', () => {
    const venusAge = new Calculator (27,46, "venus");
    expect(venusAge.ageCalculator ()).toEqual(17);
  });
  test('should calculate age in mars years', () => {
    const marsAge = new Calculator (27,46, "mars");
    expect(marsAge.ageCalculator ()).toEqual(51);
  });
  test('should calculate age in jupiter years', () => {
    const jupiterAge = new Calculator (27,46, "jupiter");
    expect(jupiterAge.ageCalculator ()).toEqual(320);
  });
  test('should calculate age in saturn years', () => {
    const saturnAge = new Calculator (27,46, "saturn");
    expect(saturnAge.ageCalculator ()).toEqual(795);
  });
  test('should calculate age in uranus years', () => {
    const uranusAge = new Calculator (27,46, "uranus");
    expect(uranusAge.ageCalculator ()).toEqual(2268);
  });
  test('should calculate age in neptune years', () => {
    const neptuneAge = new Calculator (27,46, "neptune");
    expect(neptuneAge.ageCalculator ()).toEqual(4449);
  });
  test('should calculate age in pluto years', () => {
    const plutoAge = new Calculator (27,46, "pluto");
    expect(plutoAge.ageCalculator ()).toEqual(6712);
  });
  test('should calculate age in earth years', () => {
    const earthAge = new Calculator (27,46, "earth");
    expect(earthAge.ageCalculator ()).toEqual(27);
  });
  test('should calculate years left on mercury', () => {
    const yearsLeft = new Calculator (27,73, "mercury");
    expect(yearsLeft.yearsLeft ()).toEqual(11);
  });
  test('should calculate years left on venus', () => {
    const yearsLeft = new Calculator (27,73, "venus");
    expect(yearsLeft.yearsLeft ()).toEqual(29);
  });
  test('should calculate years left on mars', () => {
    const yearsLeft = new Calculator (27,73, "mars",);
    expect(yearsLeft.yearsLeft ()).toEqual(86);
  });
  test('should calculate years left on jupiter', () => {
    const yearsLeft = new Calculator (27,73, "jupiter");
    expect(yearsLeft.yearsLeft ()).toEqual(546);
  });
  test('should calculate years left on saturn', () => {
    const yearsLeft = new Calculator (27,73, "saturn");
    expect(yearsLeft.yearsLeft ()).toEqual(1355);
  });
  test('should calculate years left on uranus', () => {
    const yearsLeft = new Calculator (27,73, "uranus");
    expect(yearsLeft.yearsLeft ()).toEqual(3864);
  });
  test('should calculate years left on neptune', () => {
    const yearsLeft = new Calculator (27,73, "neptune");
    expect(yearsLeft.yearsLeft ()).toEqual(7580);
  });
  test('should calculate years left on pluto', () => {
    const yearsLeft = new Calculator (27,73, "pluto");
    expect(yearsLeft.yearsLeft ()).toEqual(11435);
  });
  test('should calculate years left on earth', () => {
    const yearsLeft = new Calculator (27,73, "earth");
    expect(yearsLeft.yearsLeft ()).toEqual(46);
  });
  test('should calculate years over life expectancy on mercury', () => {
    const yearsOver = new Calculator (74,73, "mercury");
    expect(yearsOver.yearsOver ()).toEqual("0.24");
  });
  test('should calculate years over life expectancy on venus', () => {
    const yearsOver = new Calculator (74,73, "venus");
    expect(yearsOver.yearsOver ()).toEqual("0.62");
  });
  test('should calculate years over life expectancy on mars', () => {
    const yearsOver = new Calculator (74,73, "mars");
    expect(yearsOver.yearsOver ()).toEqual("1.88");
  });
  test('should calculate years over life expectancy on jupiter', () => {
    const yearsOver = new Calculator (74,73, "jupiter");
    expect(yearsOver.yearsOver ()).toEqual("11.86");
  });
  test('should calculate years over life expectancy on saturn', () => {
    const yearsOver = new Calculator (74,73, "saturn");
    expect(yearsOver.yearsOver ()).toEqual("29.46");
  });
  test('should calculate years over life expectancy on uranus', () => {
    const yearsOver = new Calculator (74,73, "uranus");
    expect(yearsOver.yearsOver ()).toEqual("84.01");
  });
  test('should calculate years over life expectancy on neptune', () => {
    const yearsOver = new Calculator (74,73, "neptune");
    expect(yearsOver.yearsOver ()).toEqual("164.79");
  });
  test('should calculate years over life expectancy on pluto', () => {
    const yearsOver = new Calculator (74,73, "pluto");
    expect(yearsOver.yearsOver ()).toEqual("248.59");
  });
  test('should calculate years over life expectancy on earth', () => {
    const yearsOver = new Calculator (74,73, "earth");
    expect(yearsOver.yearsOver ()).toEqual("1.00");
  });
  test('should calculate years over life expectancy on earth', () => {
    const yearsOver = new Calculator (72,73, "mars");
    expect(yearsOver.yearsOver ()).toEqual("You are not over the life expectancy in this planet");
  });
});

/* eslint-disable */