/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

// ==========================================================================================

function treeHeight(node: TreeNode | null): number {
if (node == null) {
    return 0;
}

return 1 + Math.max(treeHeight(node.left), treeHeight(node.right));
}

function isBalanced(root: TreeNode | null): boolean {
if (!root || !root?.left && !root?.right) {
    return true;
}

const leftHeight = treeHeight(root.left);
const rightHeight = treeHeight(root.right);

return Math.abs(leftHeight - rightHeight) <= 1;
};