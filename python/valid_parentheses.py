class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        opens = ["(", "{", "["]
        closers = [")", "}", "]"]
        for string_element in s:
            if string_element in opens:
                stack.append(string_element)
            if string_element in closers:
                if not stack:
                    return False
                if opens.index(stack[-1]) == closers.index(string_element):
                    stack.pop()
                else:
                    return False
        if len(stack) == 0:
            return True
        else: 
            return False
