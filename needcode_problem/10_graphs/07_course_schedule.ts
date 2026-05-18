class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const courseMap = new Map();
        for(let i = 0; i < numCourses; i++) {
            courseMap.set(i, []);
        }

        for(const [crs, prev] of prerequisites) {
            courseMap.get(crs).push(prev);
        }

        const visiting = new Set();
        const dfs = (crs: number): boolean => {
            if(visiting.has(crs)) {
                return false;
            }

            const prevs = courseMap.get(crs);
            if(prevs.length === 0) {
                return true;
            }

            visiting.add(crs);
            for(const prev of prevs) {
                if(!dfs(prev)) {
                    return false;
                }
            }
            visiting.delete(crs);
            courseMap.set(crs, []);
            return true;
        }

        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) {
                return false;
            }
        }
        return true;
    }
}
