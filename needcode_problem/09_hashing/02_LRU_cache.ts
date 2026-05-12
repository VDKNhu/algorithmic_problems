class LRUCache {
    /**
     * @param {number} capacity
     */
    capacity: number;
    cache: Map<number, number>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number) {
        if(!this.cache.has(key)) {
            return -1;
        } 
        const value = this.cache.get(key) as number;
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number) {
        if(this.cache.has(key)) {
            this.cache.delete(key);
        } else if(this.cache.size === this.capacity) {
            const firstKey = this.cache.keys().next().value as number;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
}
