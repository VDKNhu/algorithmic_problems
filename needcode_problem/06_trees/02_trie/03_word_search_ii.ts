class TrieNode03 {
    children: TrieNode03[];
    index: number;
    refs: number;
    constructor() {
        this.children = new Array(26).fill(null);
        this.index = -1;
        this.refs = 0;
    }

    addWord(word: string, i: number) {
        let cur = this as TrieNode03;
        cur.refs++;
        for (const c of word) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (cur.children[index] === null) {
                cur.children[index] = new TrieNode03();
            }
            cur = cur.children[index];
            cur.refs++;
        }
        cur.index = i;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]) {
        const root = new TrieNode03();
        for(let i = 0; i < words.length; i++) {
            root.addWord(words[i], i);
        }

        const ROWS = board.length, COLS = board[0].length;
        const res: string[] = [];

        const dfs = (r: number, c: number, node: TrieNode03) => {
            if (
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                board[r][c] === '*' ||
                node.children[this.getId(board[r][c])] === null
            ) {
                return;
            }

            let tmp = board[r][c];
            board[r][c] = '*';
            let prev = node;
            node = node.children[this.getId(tmp)];
            if (node.index !== -1) {
                res.push(words[node.index]);
                node.index = -1;
                node.refs--;
                if (node.refs === 0) {
                    prev.children[this.getId(tmp)] = null;
                    node = null;
                    board[r][c] = tmp;
                    return;
                }
            }

            dfs(r + 1, c, node);
            dfs(r - 1, c, node);
            dfs(r, c + 1, node);
            dfs(r, c - 1, node);

            board[r][c] = tmp;
        };

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++) {
                dfs(r, c, root);
            }
        }

        return Array.from(res);
    }

    getId(c: string) {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);
    }
}
