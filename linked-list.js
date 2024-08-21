class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._head = null;
    }

    append(val) {
        const newNode = new Node(val);
        if (this._head === null) {
            this._head = newNode;
        } else {
            return this.at(this.size() - 1).next = newNode;
        }
    }

    prepend(val) {
        const newNode = new Node(val);
        newNode.next = this._head;
        this._head = newNode;
    }

    size() {
        let now = 0;
        for (let i = this._head; i !== null; i = i.next) {
            now++;
        }
        return now;
    }

    head() {
        return this._head;
    }

    tail() {
        return this.at(this.size() - 1);
    }

    at(ind) {
        let i = this._head;
        for (let j = 0; j < ind; j++) {
            i = i.next;
        }
        return i;
    }

    pop() {
        let len = this.size();
        if (len === 1) {
            this._head = null;
        } else {
            this.at(len - 2).next = null;
        }
    }

    contains(val) {
        for (let i = this._head; i !== null; i = i.next) {
            if (i.val === val) {
                return true;
            }
        }
        return false;
    }

    find(val) {
        let i = this._head;
        for (let j = 0; i !== null; j++) {
            if (i.val === val) {
                return j;
            }
        }
        return null;
    }

    toString() {
        let ans = "";
        for (let i = this._head; i !== null; i = i.next) {
            ans += `( ${i.val} ) -> `;
        }
        ans += "null";
        return ans;
    }
}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

