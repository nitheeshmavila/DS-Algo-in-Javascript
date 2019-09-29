// Two Sum

// Input 
//  1. array -> integer array
//  2. target_sum - > int
// Output - boolean
//  True - if array has a, b elements such that a+b = target_sum
//  False if it can't find the target_sum


// Solution 1
// Using two for loops

function twoSum(array, targetSum){

	// O(n^2) time
	// O(1) space

	const arraySize = array.length;
	for(let i=0; i<arraySize - 1; i++){
		firstNum = array[i];
		for(let j=i+1; j<arraySize; j++){
			secondNum = array[i];
			if(firstNum + secondNum == targetSum){
				return true;
			}
		}
	}
	return false
}

// Solution 2
// Using hash map

function twoSum(array, targetSum){

	// O(n) time
	// O(n) space

	const arraySize = array.length;
	let numbers = {};
	for(let i=0; i<arraySize; i++){
		number = array[i];
		targetNumber = targetSum - number;
		if(targetNumber in numbers){
			return true;
		}else{
			numbers[number] = true;
		}
	}
	return false;
}

// Solution 3
// Using two pointers

function twoSum(array, targetSum) {
	
	// O(nlog(n)) time
	// O(1) space

	array.sort(function(a, b){return a - b});
	let left = 0;
	let right = array.length - 1;
	while(left < right){
		const currentSum = array[left] + array[right];
		if(currentSum == targetSum){
			return true;
		}
		else if(currentSum > targetSum){
			right--;
		}else{
			left++;
		}
	}
	return false;
}
