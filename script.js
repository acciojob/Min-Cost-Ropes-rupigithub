function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort();
  let min_cost = 0;
	let ref_cost = 0;
	arr.foreach(v => {
		ref_cost += v;
		min_cost += ref_cost;
	})
	return min_cost;
}

module.exports=mincost;
