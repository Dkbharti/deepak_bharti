const getSecondLargest=(nums)=>{
    
    let numSet=new Set(nums)    
    numSet.delete(Math.max(...numSet))
    return Math.max(...numSet)


}


x=getSecondLargest([2,3,6,6,5])
console.log(x);