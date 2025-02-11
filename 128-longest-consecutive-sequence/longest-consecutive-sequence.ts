function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let max = 0;

    for(const num of numSet) {
        if(numSet.has(num+1)) continue;

        let curNum = num;
        let counter = 1;
        while(numSet.has(curNum-1)) {
            curNum--;
            counter++;
        }

        max = Math.max(max, counter);
    }

    return max;
};