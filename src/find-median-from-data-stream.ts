class MedianFinder {
  stream: number[];

  constructor() {
      this.stream = [];
  }

  size(): number {
      return this.stream.length;
  }

  addNum(num: number): void {
      let leftIndex = 0;
      let rightIndex = this.stream.length;

      while (leftIndex < rightIndex) {
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (num < this.stream[midIndex]) {
          rightIndex = midIndex;
        } else {
          leftIndex = midIndex + 1;
        }
      }

      this.stream.splice(leftIndex, 0, num);
  }

  findMedian(): number {
      const sizeIsEven = this.size() % 2 == 0;
      const midIndex = Math.floor(this.size() / 2);

      return sizeIsEven 
          ? (this.stream[midIndex - 1] + this.stream[midIndex]) / 2 
          : this.stream[midIndex];
  }
}


const medianFinder = new MedianFinder();

medianFinder.addNum(-1);
console.log(medianFinder.findMedian());
medianFinder.addNum(-2);
console.log(medianFinder.findMedian());
medianFinder.addNum(-3);
console.log(medianFinder.findMedian());
medianFinder.addNum(-4);
console.log(medianFinder.findMedian());
medianFinder.addNum(-5);
console.log(medianFinder.findMedian());