class TrieNode02 {
    children: TrieNode02[];
    word: boolean;
    constructor() {
        this.children = new Array(26).fill(null);
        this.word = false;
    }
}

class WordDictionary {
    root: TrieNode02;
    constructor() {
        this.root = new TrieNode02();
    }

    getIndex(c: string) {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string) {
        let cur = this.root as TrieNode02;
        for(const c of word) {
            const index = this.getIndex(c);
            if(!cur.children[index]) {
                cur.children[index] = new TrieNode02();
            }
            cur = cur.children[index];
        }
        cur.word = true;
    }

    dfs(word: string, j: number, root: TrieNode02) {
        let cur = root;
        for(let i = j; i < word.length; i++) {
            const c = word[i];
            if(c === '.') {
                for(const child of cur.children) {
                    if(child !== null && this.dfs(word, i + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                const index = this.getIndex(c);
                if(!cur.children[index]) {
                    return false;
                }
                cur = cur.children[index]
            }
        }
        return cur.word;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string) {
        return this.dfs(word, 0, this.root);
    }
}
