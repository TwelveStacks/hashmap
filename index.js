// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
// }

class Hashmap {
    constructor(size = 16) {
        this.bucket = new Array(size); // Array that will store key value pairs
        this.size = size; // Initial size of hashmap
        this.count = 0 // Keep track of # of keys in the bucket

    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }
        return hashCode % this.size;
    }

    set(key, value) {
        const index = this.hash(key) // Get index to store the pair in bucket array
        if (!this.bucket[index]) { // Check if key valye pair is already present at given index
            this.bucket[index] = []; // If no key-value pair exists at this index, initialize an array
        }

        for (let i = 0; i < this.bucket[index].length; i++) {
            if (this.bucket[index][i][0] === key) {
                this.bucket[index][i][1] = value // Update the value if key already exists
                return;
            }
        }

        this.bucket[index].push([key, value]); // Push a new key-value pair into the bucket
        this.count++; // Increment count as we have added a new element to the bucket
    }

    get(key) {
        // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
        const index = this.hash(key);
        if (!this.bucket[index]) {
            return null;
        }

        for (let bucket of this.bucket[index]) {
            if (bucket[0] === key) {
                return bucket[1]; // Get value at corresponding key from bucket
            }
        }
    }

    has(key) {
        // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
        const index = this.hash(key);

        if (!this.bucket[index]) {
            return false;
        }

        // Check if key exists at index

        for (let i = 0; i < this.bucket[index].length; i++) {
            if (this.bucket[index][i][0] === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        // takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.

        const index = this.hash(key)

        if (!this.bucket[index]) {
            return false;
        }

        for (let i = 0; i < this.bucket[index].length; i++) {
            if (this.bucket[index][i][0] === key) {
                console.log(this.bucket[index])
                this.bucket[index].splice(i, 1);
                return true;
            }
        }
        return false;
    }

    length() {
        // returns the number of stored keys in the hash map.
        return this.count;
    }

    clear() {
        // removes all entries in the hash map
        this.bucket = new Array(this.size)
        this.count = 0;
    }

    keys() {
        // returns an array containing all the keys inside the hash map
        const keys = [];
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i]) {
                for (let j = 0; j < this.bucket[i].length; j++) {
                    keys.push(this.bucket[i][j][0]);
                }
            }
        }
        return keys;
    }

    values() {
        // returns an array containing all the values.

        const values = [];
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i]) {
                for (let j = 0; j < this.bucket[i].length; j++) {
                    values.push(this.bucket[i][j][1]);
                }
            }
        }
        return values;
    }

    entries() {
        // returns an array that contains each key, value pair.Example: [[firstKey, firstValue], [secondKey, secondValue]]

        const pairs = [];
        for (let i = 0; i < this.bucket.length; i++) {
            if (this.bucket[i]) {
                for (let j = 0; j < this.bucket[i].length; j++) {
                    pairs.push(this.bucket[i][j]);
                }
            }
        }
        return pairs;
    }
}

let test = new Hashmap
console.log(`Hash value of Carla: ${test.hash('Carla')}`);
console.log(`Hash value of Carlos: ${test.hash('Carlos')}`);
console.log(`Hash value of Ryan: ${test.hash('Ryan')}`);
console.log(`Hash value of Bill: ${test.hash('Bill')}`);
test.set('Bill', 12);
test.set('Ryan', 45);
test.set('Carla', 'Manager');
test.set('Carlos', 'Employee');

console.log(test.get("Carlos"));
// console.log(test.remove('Carlos'));
console.log(test.has('Carlos'))
console.log(test.keys());
console.log(test.values());
console.log(test.entries());