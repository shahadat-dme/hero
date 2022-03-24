function find_max(nums){
    let max_num = Number.NEGATIVE_INFINITY;
    for(let num of nums) {
        if(num > max_num){
            // num = max_num
            // max_num += num
            // max_num += 1
            max_num = num
        }
    }
    return max_num
}
const nums = [1,2,4,3]
console.log(find_max(nums));