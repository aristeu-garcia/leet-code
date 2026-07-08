# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        current_node_list1 = list1
        current_node_list2 = list2
        dummy = ListNode(0)
        new_list = dummy
        while current_node_list1 is not None and current_node_list2 is not None:
            if current_node_list1.val > current_node_list2.val:
                new_list.next = current_node_list2
                current_node_list2 = current_node_list2.next
            else: 
                new_list.next = current_node_list1
                current_node_list1 = current_node_list1.next
            new_list = new_list.next
        if current_node_list1 is not None: 
            new_list.next = current_node_list1
        if current_node_list2 is not None:
            new_list.next = current_node_list2
        return dummy.next





        