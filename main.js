function largestRect(arr) {
	var largest = 0;
	for (var i = 0; i < arr.length; i++) {
		var tempCount = 1;
		for (var x = i-1; x >= 0; x--) {
			if (arr[x] >= arr[i]) {
				tempCount++
			} else {
				x = 0;
			}
		}
		for (var y = i+1; y < arr.length; y++) {
			if (arr[y] >= arr[i]) {
				tempCount++;
			} else {
				y = arr.length;
			}
		}
		var thisLargest = tempCount * arr[i];
		if (thisLargest > largest) {
			largest = thisLargest
		}
	}
	return largest;
}

console.log(largestRect([3, 5, 12, 4, 10]));
console.log(largestRect([6, 2, 5, 4, 5, 1, 6]));
console.log(largestRect([9, 7, 5, 4, 2, 5, 6, 7, 7, 5, 7, 6, 4, 4, 3, 2]));