class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {

  const depthFirstSearch = function(tree) {
    if(!tree) {
      return 0;
    }

    const left = depthFirstSearch(tree.left);
    const right = depthFirstSearch(tree.right);

    maxDifference = Math.max(maxDifference, Math.abs(left - right));

    return Math.max(left, right) + 1;

  }

  let maxDifference = 0;
  depthFirstSearch(root);
  return maxDifference <= 1;
};

