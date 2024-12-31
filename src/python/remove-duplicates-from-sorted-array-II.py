class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        l = 0
        r = 0

        while l < len(nums) and r < len(nums):
            if nums[l] == nums[r]:
                r = r + 1
                if r >= len(nums) - 1:
                    nums[l + 2:r] = []
            else:
                if (r - 1) - l >= 2:
                    nums[l + 2:r] = []

                l = r

        return len(nums)
