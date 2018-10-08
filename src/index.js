class Sorter {
    constructor() {
        this.arr = [];
    }

    add(element) {
        this.element = element;
        this.arr.push(element);
        return this.arr;
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return Array.from(this.arr);
    }

    sort(indices) {
        this.indices = indices;
        this.sortArr = [];
        this.indices.sort(function (a, b) {
            return a - b;
        });
        for (let i in this.arr) {
            for (let j in this.indices) {
                if (i == this.indices[j]) {
                    this.sortArr.push(this.arr[i]);
                }
                this.sortArr.sort(this.SortFunction);

                function initialCompare(a, b) {
                    return a - b;
                };
                this.SortFunction = this.compareFunction || initialCompare;
                for (let k in this.sortArr) {
                    this.arr.splice(this.indices[k], 1, this.sortArr[k]);
                }
            }
        }
        return this.arr;
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
        return this.arr;
    }
}

module.exports = Sorter;