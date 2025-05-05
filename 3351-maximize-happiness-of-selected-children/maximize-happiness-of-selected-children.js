/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
// function maximumHappinessSum(happiness, k) {
//   const kLargest = happiness.sort((a, b) => b - a).slice(0, k);
//   const sum = kLargest.reduce((prev, curr, index) => {
//     const decrementedCurr = Math.max(curr - index, 0);

//     return prev + decrementedCurr;
//   }, 0);

//   return sum;
// }


/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
function maximumHappinessSum(happiness, k) {
  // Use a max-heap to extract the k largest elements
  const maxHeap = new MaxHeap(happiness);
  let sum = 0;

  for (let i = 0; i < k; i++) {
    const max = maxHeap.extractMax();
    const decrementedMax = Math.max(max - i, 0);
    sum += decrementedMax;
  }

  return sum;
}

// Helper class for MaxHeap
class MaxHeap {
  constructor(arr) {
    this.heap = [...arr];
    this.buildHeap();
  }

  buildHeap() {
    for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  heapifyDown(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }
    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.heapifyDown(largest);
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }
}
