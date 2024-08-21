function fibs(len) {
    let ans = [0, 1];
    if (len < 2) {
        ans = ans.slice(0, len);
    }
    for (let i = 3; i <= len; i++) {
        ans.push(ans[i - 3] + ans[i - 2]);
    }
    return ans;
}

function fibRec(len) {
    if (len === 0) {
        return [];
    } else if (len === 1) {
        return [0];
    } else if (len === 2) {
        return [0, 1];
    } else {
        let pre = fibRec(len - 1);
        pre.push(pre[pre.length - 2] + pre[pre.length - 1]);
        return pre;
    }
}

console.log(fibs(10));
console.log(fibRec(10));
