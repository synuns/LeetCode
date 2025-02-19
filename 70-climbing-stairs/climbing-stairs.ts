function climbStairs(n: number): number {
    const steps = Array.from({length: n}, () => 0);
    steps[1] = 1;
    steps[2] = 2;
    for(let i = 3; i <= n; i++) {
        steps[i] = steps[i-2] + steps[i-1];
    }

    return steps[n];
};