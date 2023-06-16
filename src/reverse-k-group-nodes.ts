class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// ====================================================

function size(list: ListNode | null) {
  if (list == null) {
    return 0;
  }

  let size = 0;

  while (list) {
    size = size + 1;
    list = list.next;
  }

  return size;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head == null) {
    return null;
  }

  const listSize = size(head);

  if (k > listSize) {
    return head;
  }

  if (k <= 1) {
    return head;
  }

  let result = new ListNode();
  let resultHead = result;

  let point: ListNode | null = head;

  let nodeIndex = 0;
  let reversedKList: ListNode | null = null;
  
  while (point) {
    if (size(point) < k && size(point) + size(resultHead.next) == listSize) {
      result.next = point;
      break;
    }

    if (nodeIndex < k) {
      let newNode = new ListNode(point.val)

      newNode.next = reversedKList;
      reversedKList = newNode;
      
      nodeIndex = nodeIndex + 1;
      point = point.next;
    }
    
    if (nodeIndex == k) {
      result.next = reversedKList;
      
      while (result.next) {
        result = result.next;
      }
      
      nodeIndex = 0;
      reversedKList = null;
    }
  }
  
  const res = resultHead.next;
  
  return res;
};