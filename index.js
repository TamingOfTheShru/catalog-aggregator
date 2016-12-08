const RootCategory = require('./catalog-data');

var treeData = JSON.stringify(RootCategory, null, 2);
//console.log(treeData);

var stack = [],
    array = [],
    hashMap = {},
    i = 0,
    j = 0,
    k = 0,
    sortedArray = [],
    mergeArray = [];
stack.push(treeData);

while (stack.length !== 0) {
    var node = stack.pop();
    var nodeL1 = JSON.parse(node);
    if (nodeL1.children === null) {
        visitNode(node, hashMap, array);
    } else {
        for (i = nodeL1.children.length - 1; i >= 0; i--) {
            console.log("nodeL1:");
            console.log(nodeL1.children);
            if (nodeL1.children[i].children === null) {
                visitNode(node, hashMap, array);
            } else {
                var nodeL2 = nodeL1.children[i].children;
                console.log("nodeL2:");
                console.log(nodeL2);
                console.log("length:");
                var counter = 0;
                console.log(nodeL2[i].children.length);
                for (j = nodeL2[i].children.length - 1; j >= 0; j--) {
                    var nodeL3 = nodeL2[i].children[j].children;
                    console.log("nodeL3:");
                    console.log(nodeL3);
                    var sortedList = quickSort(nodeL3);
                    console.log("sortedArray");
                    console.log(sortedArray);
                    mergeArray[counter++] = sortedArray;
                }
                console.log("mergeArray[0]");
                console.log(mergeArray[0]);
                console.log("mergeArray[1]");
                console.log(mergeArray[1]);
                var finalArray = merge(mergeArray[0], mergeArray[1]);
                console.log("finalArray");
                console.log(finalArray);
            }

        }
    }
}


function visitNode(node, hashMap, array) {
    if (!hashMap[node.price]) {
        hashMap[node.price] = true;
        array.push(node);
    }
    console.log(array);
}

function quickSort(t) {
    return _quickSort(t, 0, t.length - 1, 0, t.length - 1);
}

function _quickSort(t, s, e, sp, ep) {
    if (s >= e) return;
    while (sp < ep && t[sp].price < t[e].price) sp++;
    if (sp == e) {
        _quickSort(t, s, e - 1, s, e - 1);
    } else {
        while (t[ep].price >= t[e].price && sp < ep) ep--;
        if (sp == ep) {
            var temp = t[sp].price;
            t[sp].price = t[e].price;
            t[e].price = temp;
            if (s != sp) {
                _quickSort(t, s, sp - 1, s, sp - 1);

            }
            _quickSort(t, sp + 1, e, sp + 1, e);

        } else {
            var temp = t[sp].price;
            t[sp].price = t[ep].price;
            t[ep].price = temp;
            _quickSort(t, s, e, sp + 1, ep);
        }
    }
    sortedArray = t;
}

function merge(left, right) {
    var result = [];
    if (left == undefined || right == undefined) {
        if(left != null){
            return left;
        }
        else if(right != null){
            return right;
        }
    }
    while (left.length && right.length) {
        if (left[0].price <= right[0].price) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}
