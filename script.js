function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort();
  let min_cost = 0;
	let ref_cost = 0;
	for(let i=0; i< arr.length; i++){
		ref_cost += arr[i];
		min_cost += ref_cost;
	}
	return min_cost;
}

module.exports=mincost;
