function merge(lhs, rhs) {
    let ans = [];
    let i = 0;
    let j = 0;
    while (i < lhs.length || j < rhs.length) {
        if (j === rhs.length || (i !== lhs.length && lhs[i] <= rhs[j])) {
            ans.push(lhs[i]);
            i++;
        } else {
            ans.push(rhs[j]);
            j++;
        }
    }
    return ans;
}

function mergeSort(a) {
    if (a.length < 2) {
        return a;
    }

    let lhs = a.slice(0, a.length / 2);
    let rhs = a.slice(a.length / 2, a.length);
    return merge(mergeSort(lhs), mergeSort(rhs));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
