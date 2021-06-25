export default function Calculator (age, lifeExpectancy, planet) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
  this.planet = planet
}

Calculator.prototype.ageCalculator = function () {
  if (this.planet === "mercury") {
    return((Math.round(this.age * 0.24)))
  }else if (this.planet === "venus") {
    return((Math.round(this.age * 0.62)))
  }else if (this.planet === "mars") {
    return((Math.round(this.age * 1.88)))
  }else if (this.planet === "jupiter") {
    return((Math.round(this.age * 11.86)))
  }else if (this.planet === "saturn") {
    return((Math.round(this.age * 29.46)))
  }else if (this.planet === "uranus") {
    return((Math.round(this.age * 84.01)))
  }else if (this.planet === "neptune") {
    return((Math.round(this.age * 164.79)))
  }else if (this.planet === "pluto") {
    return((Math.round(this.age * 248.59)))  
}else {
  return((Math.round(this.age * 1)))
}
}

Calculator.prototype.yearsLeft = function () {

  if (this.planet === "mercury") {
    return Math.round(((this.lifeExpectancy * 0.24) - (this.age * 0.24)))
  } else if (this.planet === "venus") {
    return Math.round(((this.lifeExpectancy * 0.62) - (this.age * 0.62)))
}else if (this.planet === "mars") {
  return Math.round(((this.lifeExpectancy * 1.88) - (this.age * 1.88)))
}else if (this.planet === "jupiter") {
  return Math.round(((this.lifeExpectancy * 11.86) - (this.age * 11.86)))
}else if (this.planet === "saturn") {
  return Math.round(((this.lifeExpectancy * 29.46) - (this.age * 29.46)))
}else if (this.planet === "uranus") {
  return Math.round(((this.lifeExpectancy * 84.01) - (this.age * 84.01)))
}else if (this.planet === "neptune") {
  return Math.round(((this.lifeExpectancy * 164.79) - (this.age * 164.79)))
}else if (this.planet === "pluto") {
  return Math.round(((this.lifeExpectancy * 248.59) - (this.age * 248.59)))
}else {
  return Math.round(((this.lifeExpectancy * 1) - (this.age * 1)))
}
}
  
Calculator.prototype.yearsOver = function () {
  if (this.planet === "mercury" && (this.lifeExpectancy * 0.24) <= (this.age*0.24)) {
    return ((this.age*0.24) - (this.lifeExpectancy * 0.24)).toFixed(2)
} else if (this.planet === "venus" && (this.lifeExpectancy * 0.62) <= (this.age*0.62)) {
  return ((this.age*0.62) - (this.lifeExpectancy * 0.62)).toFixed(2)
}
}
  
