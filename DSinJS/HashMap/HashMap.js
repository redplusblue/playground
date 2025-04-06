// Note to self: need to fix the resize function

class HashMap {
    constructor(loadFactor = 0.75, size = 0) {
        this.loadFactor = loadFactor;
        this.size = size;
        this.map = new Array(16).fill(null).map(() => []);
        this.count = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.map.length;
    }

    resize() {
        const oldMap = this.map;
        this.map = new Array(oldMap.length * 2).fill(null).map(() => []);
        this.count = 0;

        for (const bucket of oldMap) {
            for (const item of bucket) {
                this.set(item.key, item.value);
            }
        }

        this.size = this.map.length;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.map[index];

        for (const item of bucket) {
            if (item.key === key) {
                item.value = value;
                return;
            }
        }

        bucket.push({ key, value });
        this.count++;

        if (this.count / this.map.length > this.loadFactor) {
            this.resize();
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.map[index];

        for (const item of bucket) {
            if (item.key === key) {
                return item.value;
            }
        }

        return null;
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.map[index];

        for (const item of bucket) {
            if (item.key === key) {
                return true;
            }
        }

        return false;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.map[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this.count--;
                return true;
            }
        }

        return false;
    }

    length() {
        return this.count;
    }

    clear() {
        this.map = new Array(16).fill(null).map(() => []);
        this.count = 0;
    }

    keys() {
        const keys = [];
        for (const bucket of this.map) {
            for (const item of bucket) {
                keys.push(item.key);
            }
        }
        return keys;
    }

    values() {
        const values = [];
        for (const bucket of this.map) {
            for (const item of bucket) {
                values.push(item.value);
            }
        }
        return values;
    }

    entries() {
        const entries = [];
        for (const bucket of this.map) {
            for (const item of bucket) {
                entries.push([item.key, item.value]);
            }
        }
        return entries;
    }
}

// Example usage
const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

// Print current map
console.log(test.length()) // 12;

// Overwrite existing key
test.set('apple', 'green')

// Print updated map
console.log(test.length()) // 12;

// Expand
test.set('moon', 'silver')
// Print updated map
console.log(test.length()) // 13;

// Overwrite some more
test.set('banana', 'blue')
test.set('carrot', 'purple')
test.set('dog', 'black')

console.log(test.get('apple')) // green
console.log(test.has('banana')) // true
console.log(test.remove('carrot')) // true