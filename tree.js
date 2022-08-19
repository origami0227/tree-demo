const createTree = (value) => {
  return {
    //返回一个节点
    data: value,
    children: null,
    parent: null,
  };
};

const addChild = (node, value) => {
  const newNode = {
    //创建一个节点
    data: value,
    children: null,
    parent: node,
  };
  node.children = node.children || []; //保底
  node.children.push(newNode);
  return newNode;
};

// const find = (tree, node) => {
//   if (tree === node) {
//     return tree;
//   } else if (tree.children) {
//     for (let i = 0; i < tree.children.length; i++) {
//       const result = find(tree.children[i], node);
//       if (result) {
//         return result;
//       }
//     }
//     return undefined;
//   } else {
//     return undefined;
//   }
// };

const removeNode = (tree, node) => {
  const siblings = node.parent.children; //这个节点的兄弟姐妹
  let index = 0;
  for (let i = 1; i < siblings.length; i++) {
    //拿到下标
    if (siblings[i] === node) {
      index = i;
    }
  }
  siblings.splice(index, 1);
};

const travel = (tree, fn) => {
  //遍历
  //先遍历根节点，再把子节点作为一棵树继续遍历
  fn(tree.data);
  if (!tree.children) {
    return;
  }
  for (let i = 0; i < tree.children.length; i++) {
    travel(tree.children[i]);
  }
};

const tree = createTree(10);
const node2 = addChild(tree, 20);
const node3 = addChild(tree, 30);
addChild(tree, 40);
addChild(tree, 50);
node2.addChild(node2, 201); //给孩子加孩子
node2.addChild(node2, 202);
node2.addChild(node2, 203);
console.log(tree);
travel(tree, (node) => {
  console.log(node.data);
});
