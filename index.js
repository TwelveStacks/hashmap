// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
// }

class Hashmap {
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }
        return hashCode
    }
}

let test = new Hashmap
console.log(`Hash value: ${test.hash('hello')}`); // Outputs: Hash value: 94