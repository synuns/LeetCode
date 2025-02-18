function isAnagram(s: string, t: string): boolean {
    const dictionary: { [key: string]: number } = {};
    if(s.length !== t.length) return false;

    for(let char of s) {
        dictionary[char] = (dictionary[char] || 0) + 1;
    }

    for(let char of t) {
        if(!dictionary[char]) return false;
        dictionary[char]--;
    }

    Object.keys(dictionary).forEach((char) => {
        if(dictionary[char] !== 0) return false;
    })

    return true
};