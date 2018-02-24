class Sorter {
  constructor() {
    // your implementation
	this.arr = [];
  }

  add(element) {
    // your implementation
	this.element = element;
	this.arr.push(element);
	return this.arr;
  }

  at(index) {
    // your implementation
	return this.arr[index];
  }

  get length() {
    // your implementation
	return this.arr.length;
  }

  toArray() {
    // your implementation
	return Array.from(this.arr);
  }

  sort(indices) {
    // your implementation	
	this.indices = indices;
	this.sort_arr=[];	
	this.indices.sort(function(a, b) {
		return a - b;
	});	
	for(var i in this.arr){
		for(var j in this.indices){
	
			if(i==this.indices[j]){
				this.sort_arr.push(this.arr[i]);
			}
			this.sort_arr.sort(this.SortFunction);	
	
			function S(a, b){
				return a - b;
			};
			this.SortFunction = this.compareFunction || S;
		
			for(var k in this.sort_arr){
				this.arr.splice(this.indices[k], 1, this.sort_arr[k]);	
			}			
		}  
	}		
	return this.arr;	
  }

  setComparator(compareFunction) {
    // your implementation
	this.compareFunction = compareFunction;		
	return this.arr;
  }
}

module.exports = Sorter;