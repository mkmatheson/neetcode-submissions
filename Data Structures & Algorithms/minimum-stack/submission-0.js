class MinStack {
    stackArray;
    minStack;
    constructor() {
        this.stackArray = [];
        this.minStack = [];
    }

    push(value) {
        // what DS adds values in constant time
        if (this.minStack.length < 1 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value)
        }
        return this.stackArray.push(value);
    }

    pop() {
        // what DS removes end values in constant time
        const removedValue = this.stackArray.pop();
        if (removedValue === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        return removedValue;
    }

    top() {
        // what DS gets its top element in constant time?
        return this.stackArray[this.stackArray.length - 1];
    }

    getMin() {
        // what DS can get a min number in constant time? or could I store it?
        return this.minStack[this.minStack.length - 1];

    }
}
