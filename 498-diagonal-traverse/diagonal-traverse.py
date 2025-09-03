
class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
        res: List[int] = []
        m = len(mat)
        n = len(mat[0])
        hashmap = {i: 0 for i in range(m)}
        direction = True

        while True:
            iteration_items: List[List[int]] = []
            for key, value in hashmap.items():
                if value == n:
                    continue

                iteration_items.append([key, value])
                hashmap[key] = value + 1
                if value == 0:
                    break

            if direction:
                iteration_items.reverse()
                for pair in iteration_items:
                    res.append(mat[pair[0]][pair[1]])
            else:
                for pair in iteration_items:
                    res.append(mat[pair[0]][pair[1]])

            direction = not direction
            if len(iteration_items) == 0:
                break

        return res