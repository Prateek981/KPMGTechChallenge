
//function for retreiveing key values.
function getObjectKeys(object, key) {
    const keys = key.split('/');
    let obj = object;
    for (let ikey of keys) {
        for (let [objKey, value] of Object.entries(obj)) {
            if(!keys.includes(objKey)) {
                continue;
            }
            obj = value;
        }
    }
    return obj;
}


let obj = {
    a: {
        b: {           
                c: 'd',        
        },
    },
    x: {
        y: 
            {
                z: 'a',
            }
    }
};

//print output for nested object
console.log(getObjectKeys(obj, 'a/b/c'));
console.log(getObjectKeys(obj, 'x/y/z'));