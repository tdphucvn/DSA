class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& mat) {
       if (mat.empty() || mat[0].empty()) return {};
        int m = (int)mat.size(), n = (int)mat[0].size();
        vector<vector<int>> diags(m + n - 1);

        for (int i = 0; i < m; ++i) {
            const auto& row = mat[i];
            for (int j = 0; j < n; ++j) {
                diags[i + j].push_back(row[j]);
            }
        }

        vector<int> res;
        res.reserve(m * n);
        for (int k = 0; k < (int)diags.size(); ++k) {
            const auto& d = diags[k];
            if ((k & 1) == 0) {
                // even diagonal: reverse order
                for (int t = (int)d.size() - 1; t >= 0; --t) res.push_back(d[t]);
            } else {
                for (int t = 0; t < (int)d.size(); ++t) res.push_back(d[t]);
            }
        }
        return res;
    } 
};