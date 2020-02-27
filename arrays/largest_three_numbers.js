// Find three largest numbers in an array
// Time - O(N)
// Space - O(1)

function threeLargestNumbers(array){
	let largest = [null, null, null];
	for(el in array){
		update(largest, el);
	}
	return largest
}

function update(largest, el){
	if(largest[2] == null || largest[2] <= el){
		shiftAndUpdate(largest, el, 2)
	}
	else if(largest[1] == null || largest[1] <= el){
		shiftAndUpdate(largest, el, 1)
	}
	else if(largest[0] == null || largest[0] <= el){
		shiftAndUpdate(largest, el, 0)
	}
}

function shiftAndUpdate(largest, el, index){
	// to do
}

console.log(threeLargestNumbers[32,5,343,3454,34,4232,23,32])




