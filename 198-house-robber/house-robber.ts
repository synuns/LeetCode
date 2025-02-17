function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    const pocket = Array.from({ length: nums.length }, () => 0);
    pocket[0] = nums[0];
    pocket[1] = Math.max(nums[0], nums[1]);

    for(let i = 2; i < nums.length; i++) {
        pocket[i] = Math.max(pocket[i-1], pocket[i-2] + nums[i]);
    }

    return Math.max(...pocket.slice(-2, ));
};