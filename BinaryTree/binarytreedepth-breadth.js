class Node{
    
    constructor(val) {
        this.val    = val;
        this.left   = null;
        this.right  = null;
    }
}
// Depth first = abdecf 
const depthFirstValues = (root) =>{
    if(root === null) return [];
   const  stack = [root];
   const result = [];
   while (stack.length>0){
       const current = stack.pop();
       result.push(current.val)
       if(current.right){
        stack.push(current.right);
       }
       if(current.left){
        stack.push(current.left);
       }
   }
    return result;
};

const breadthFirstValues = (root) =>{
    let values = [];
    if(root ===null) return [];
    const queue = [root];
    
    while(queue.length>0){
        const current = queue.shift();
        values.push(current.val);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return values;
}

// Breadth first abcdef
let a  = new Node('a');
let b  = new Node('b');
let c  = new Node('c');
let d  = new Node('d');
let e  = new Node('e');
let f  = new Node('f');

a.left = b;
a.right = c
b.left = d;
b.right = e;
c.left = f;

console.log(depthFirstValues(a))
console.log("**************")
console.log(breadthFirstValues(a));
 /*   a
    /\
  b     c
 /\     /
 d e    f
 */