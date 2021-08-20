class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = function(nums) {

  const buildNode = function(left, right) {

    let max = -Infinity;
    let index = -1;

    if (left >= right) {
      return null;
    }

    for(i = left; i < right; i++) {
      if (nums[i] > max) {
        max = nums[i];
        index = i;
      }
    }

    const leftNode = buildNode(left, index);
    const rightNode = buildNode(index + 1, right);
    return new TreeNode(max, leftNode, rightNode);
  }

  return buildNode(0, nums.length);

};

const constructMaximumBinaryTreeSlice = function (nums) {
  const max = Math.max(...nums);
  const index = nums.findIndex(max);

  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTreeSlice(nums.slice(0, index));
  root.right = constructMaximumBinaryTreeSlice(index + 1, nums.length);

  return root;

}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoMaxTree = function(root, val) {

  const node = new TreeNode(val);

  // Break out statement. At the end of the tree
  if(!root) {
    return node;
  }

  // Insert node into left of the tree and return
  // recurrsive call
  if (val > root.val) {
    node.left = root;
    return node;
  }

  root.right = insertIntoMaxTree(root.right, val);
  return root;
};

console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));
console.log(insertIntoMaxTree([5,2,4,null,1], 3));

