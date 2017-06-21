function myForEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

Array.prototype.myForEach = function (func) {
  for(var i = 0; i < this.length; i++) {
    func(this[i]);
  }
}
