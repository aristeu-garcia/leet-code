
def two_sum(nums, target):
    seen = {}
    for index, num in enumerate(nums):
        valeuTarget = target - num
        if valeuTarget in seen:
           return [seen[valeuTarget], index]
        seen[num] = index
    return seen


print(two_sum([2, 7, 11, 15], 9))

nums = [3, 2, 4]
target = 6
print(two_sum(nums, target))
