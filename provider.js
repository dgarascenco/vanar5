module.exports.RandomDataProvider = class RandomDataProvider {
constructor(min, max){
  this.min = min;
  this.max = max;
}
  
  random(min,max) {
    return Math.random() * (max-min) + min
  }
  
  next() {
    return Math.trunc(this.random(this.min,this.max))
  }

  
}