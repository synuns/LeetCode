function getFrequentNumbers(nums: number[]) {
    const freqNumObj = {};

    for(const num of nums) {
        if(num in freqNumObj) {
            freqNumObj[num]++;
        } else {
            freqNumObj[num] = 1;
        }
    }

    return freqNumObj;
}

function getMostNumber(numObj: Record<string, number>, length: number) {
    const sortedNumObj = Object.entries(numObj).sort(([, a], [, b]) => b - a);
    const mostNumArr = []
    
    for(let i = 0; i < length; i++) {
        mostNumArr.push(Number(sortedNumObj[i][0]));
    }
    return mostNumArr;
}

function topKFrequent(nums: number[], k: number): number[] {
    const freqNumObj = getFrequentNumbers(nums);
    const result = getMostNumber(freqNumObj, k);
    return result;
};