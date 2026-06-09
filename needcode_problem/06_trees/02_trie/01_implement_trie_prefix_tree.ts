class TrieNode {
    children: Map<string, TrieNode>;
    endOfWord: boolean;
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class PrefixTree {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string) {
        let cur: TrieNode = this.root;
        for(const c of word) {
            if(!cur.children.has(c)) {
                cur.children.set(c, new TrieNode());
            }
            cur = cur.children.get(c) as TrieNode;
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string) {
        let cur = this.root;
        for(const c of word) {
            if(!cur.children.has(c)) {
                return false;
            }
            cur = cur.children.get(c) as TrieNode;
        }
        return cur.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string) {
        let cur = this.root;
        for(const c of prefix) {
            if(!cur.children.has(c)) {
                return false;
            }
            cur = cur.children.get(c) as TrieNode;
        }
        return true;
    }
}
