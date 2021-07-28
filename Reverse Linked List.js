/*
206. Reverse Linked List
Easy

7828

145

Add to List

Share
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let current = head;
    if (!current) {
        return current;
    }
    let curPre = head.next;
    current.next = null;
    while (curPre) {
        // save the next node
        let tmp = curPre.next;
        curPre.next = current;
        current = curPre;
        curPre = tmp;
    }
    return current;    
};