// Find three largest numbers in an array
// Time - O(N)
// Space - O(1)

function threeLargestNumbers(array){
	console.log(array)
	let largest = [null, null, null];
	for(let i=0; i<array.length; i++){
		update(largest, array[i]);
	}
	return largest

}

function update(largest, el){
	if(largest[2] == null || largest[2] <= el){
		largest[0] = largest[1];
		largest[1] = largest[2];
		largest[2] = el;
	}
	else if(largest[1] == null || largest[1] <= el){
		largest[0] = largest[1];
		largest[1] = el;
	}
	else if(largest[0] == null || largest[0] <= el){
		largest[0] = el;
	}
}

