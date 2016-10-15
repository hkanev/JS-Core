function sumLastKNumbersSequence([n, k]) {
    let nums = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let prev = i - k; prev <= i - 1; prev++)
            if (prev >= 0)
                sum += nums[prev];
        nums[i] = sum;
    }
    console.log(nums.join(' '));

}
sumLastKNumbersSequence(['8', '2']);