var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    let alfa = path.split(".");
    let obj = object;
    for(let i of alfa){
        if(obj[i] === undefined){
            return undefined;
        }
        obj = obj[i];
    }
    return obj;
}

console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.j')); // false
console.log(findPath(obj, 'a.b.j.k')); // undefined
console.log(findPath(obj, 'a.k')); // null