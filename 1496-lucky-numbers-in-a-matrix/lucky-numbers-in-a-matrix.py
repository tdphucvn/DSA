class Solution:
    def find_max_with_index(self, arr: List[int]) -> List[int]:
        max_item = [0, 0]

        for i in range(len(arr)):
            if max_item[1] < arr[i]:
                max_item = [i, arr[i]]

        return max_item

    def luckyNumbers(self, matrix: List[List[int]]) -> List[int]:
        res: List[int] = []

        # check each column first
        for i in range(len(matrix[0])):
            current_check: List[int] = []
            for j in range(len(matrix)):
                current_check.append(matrix[j][i])
            [index, max_value] = self.find_max_with_index(current_check)
            if max_value == min(matrix[index]):
                res.append(max_value)

        return res