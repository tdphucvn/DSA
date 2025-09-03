class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& mat) {
       int m = (int)mat.size();
        if (m == 0) return {};
        int n = (int)mat[0].size();

        vector<int> res;
        res.reserve((size_t)m * n);

        // pos[i] == next column to consume from row i
        vector<int> pos(m, 0);
        bool direction = true; // reverse the collected diagonal when true

        while (true) {
            vector<pair<int,int>> items;
            items.reserve(min(m, n));

            for (int i = 0; i < m; ++i) {
                int v = pos[i];
                if (v == n) continue;           // row exhausted
                items.emplace_back(i, v);
                ++pos[i];
                if (v == 0) break;              // match your Python break
            }

            if (items.empty()) break;

            if (direction) {
                for (int k = (int)items.size() - 1; k >= 0; --k) {
                    auto [r, c] = items[k];
                    res.push_back(mat[r][c]);
                }
            } else {
                for (auto [r, c] : items) {
                    res.push_back(mat[r][c]);
                }
            }
            direction = !direction;
        }
        return res;
    } 
};