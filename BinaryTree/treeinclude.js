// Problem : Find the target in the tree  like e exists in the tree or not 
/*   a
    /\
  b     c
 /\     /
 d e    f
 */

 class Node{
    constructor(val){
        this.val    = val;
        this.left   = null;
        this.right  = null;
    }    
 }

 let a = new Node(a);
 let b = new Node(b);
 let c = new Node(c);
 let d = new Node(d);
 let e = new Node(e);
 let f = new Node(f);

 a.left = b;
 a.right = c
 b.left = d;
 b.right = e;
 c.left = f;

 const treeIncludes = (root,target) =>{
    if(root ===null) return [];
    let queue = [root];

    while(queue.length >0){
        let current = queue.shift();
        if(current.val === target) return true;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return false;

 }
  // Sum of Tree by recursive method
/*const treeSum = (root) =>{
     if(root===null) return 0;
     return root.val + rootSum(root.left)+ rootSum(root.right);
}*/

// Sum of tee by iterative 
const treeSum = (root) =>{
    if (root===null) return 0;
    
    const queue = [root]
    let totalSum = 0;
    while(root.length>0){
        let current = queue.shift();
        totalSum+= current;
        if(current.right) queue.push(current.right);
        if(current.left) queue.push(current.left);
    }
    return totalSum;
}
 console.log(treeIncludes(a,"b"));

