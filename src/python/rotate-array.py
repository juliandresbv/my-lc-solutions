class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        size = len(nums)
        safe_k = k % size

        if size <= 1 or safe_k == 0:
            return
        
        nums[0:0] = nums[-safe_k:]
        nums[-safe_k:] = []
