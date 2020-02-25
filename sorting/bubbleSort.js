// Bubble sort 
// Time - O(N^2)
// Space - O(N)

function bubbleSort(array){
	for(let i=0; i<array.length; i++){
		let swap = false;
		for(let j=0; j<array.length - i - 1; j++){
			if(array[j] >= array[j+1]){
				swap = true;
				[array[j], array[j+1]] = [array[j+1], array[j]];
			}
		}
		if(swap === false){
			break;
		}
	}
	return array;
}
