/**
 * Definition for singly-linked list.
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// ===================================================

function merge2List(listNode1: ListNode | null, listNode2: ListNode | null) {
  let point = new ListNode();
  let result = point;

  while (listNode1 && listNode2) {
    if (listNode1.val <= listNode2.val) {
      point.next = new ListNode(listNode1.val);
      listNode1 = listNode1.next;
    } else {
      point.next = new ListNode(listNode2.val);
      listNode2 = listNode2.next;
    }

    point = point.next;
  }

  if (listNode1 == null) {
    point.next = listNode2;
  } else if (listNode2 == null) {
    point.next = listNode1;
  }

  return result.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists?.length <= 0) {
    return null;
  } else if (lists?.length == 1) {
    return lists?.[0];
  }

  const midIndex = Math.floor(lists?.length / 2)
  
  const left = lists?.slice(0, midIndex)
  const right = lists?.slice(midIndex)

  return merge2List(mergeKLists(left), mergeKLists(right))
}
