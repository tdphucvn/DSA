class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& mat) {
       if (mat.empty() || mat[0].empty()) return {};
        int m = (int)mat.size(), n = (int)mat[0].size();
        vector<int> res;
        res.reserve(m * n);

        int r = 0, c = 0;
        bool up = true;

        for (int k = 0; k < m * n; ++k) {
            res.push_back(mat[r][c]);
            if (up) {
                if (c == n - 1) { ++r; up = false; }
                else if (r == 0) { ++c; up = false; }
                else { --r; ++c; }
            } else {
                if (r == m - 1) { ++c; up = true; }
                else if (c == 0) { ++r; up = true; }
                else { ++r; --c; }
            }
        }
        return res;
    } 
};