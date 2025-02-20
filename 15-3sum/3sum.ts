function threeSum(nums: number[]): number[][] {
    const sortedNums = nums.sort((a, b) => a - b);
    const length = nums.length;
    const threeSums = [];

    for(let i = 0; i < length - 2; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

        let left = i + 1;
        let right = length - 1;

        while (left < right) {
            const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
            if (sum === 0) {
                threeSums.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                while (left < right && sortedNums[left] === sortedNums[left + 1]) left++;
                while (left < right && sortedNums[right] === sortedNums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return threeSums;
}