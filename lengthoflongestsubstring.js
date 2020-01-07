var lengthOfLongestSubstring = function(s) {
    let n = s.length
    let i = 0
    let j = 0
    let ans = 0
    let set = new Set()

    while (i < n && j < n) {
        if (!set.has(s.charAt(j))) {
            set.add(s.charAt(j++))
            ans = Math.max(ans, j - i)
        } else {
            set.delete(s.charAt(i++))
        }
    }

    return ans
};
