const RootCategory = require('./catalog-data');

var treeData = JSON.stringify(RootCategory, null, 2);
console.log(treeData);

//function convertTreeToList(treeData) {
var stack = [],
    array = [],
    hashMap = {},
    i = 0,
    j = 0,
    k = 0,
    sortedArray = [],
    mergeArray = {};
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
            console.log(mergeArray);
            //stack.push(nodeJson.children[i]);
        }
    }
}
//return array;
//}

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


var a = [1, 3, 5, 7, 7, 8, 8, 9, 9];
var b = [2, 4, 5, 6, 7, 8, 9];
var c = [];
var len;

// if 2 is < than 1, push 1 to c , if 1 is < than 2, push 2 to c, if they are equal, push both to c

if (a.length <= b.length) len = b.length
else len = a.length


for (var i = 0; i < len; i++) {

    // if they are equal, just put them both in c, and return, no further processing necessary!
    if (a[i] === b[i]) {
        c.push(a[i]); // 0 false, false, true, false, true
        c.push(b[i]);
        continue;
    }

    if (a[i] && b[i]) {
        // get one of the 2 to go into c right away
        if (a[i] < b[i]) {
            c.push(a[i]); // 0 = false, 1 false, false, true, false	
            if (b[i + 1]) {
                if (b[i] < a[i + 1]) {
                    c.push(b[i]);
                }
            } else {
                c.push(b[i]);
            }
        }

        if (b[i] < a[i]) {
            c.push(b[i]);
            if (b[i + 1]) {
                if (a[i] < b[i + 1]) {
                    c.push(a[i]);
                }
            } else {
                c.push(a[i]);
            }
        }
    } else if (!b[i]) {
        c.push(a[i]);
    } else if (!a[i]) {
        c.push(b[i]);
    }
}

var str = c.join();
console.log(str);

//var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

/*function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;
 
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
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
 
console.log(mergeSort(a));*/

/*{
  "name": "ROOT",
  "children": [
    {
      "name": "L1_1",
      "children": [
        {
          "name": "L1_1_L2_1",
          "children": [
            {
              "name": "L1_1_L2_1_L3_1",
              "children": [
                {
                  "name": "L1_1_L2_1_L3_1_P1",
                  "price": 37466
                },
                {
                  "name": "L1_1_L2_1_L3_1_P2",
                  "price": 42370
                },
                {
                  "name": "L1_1_L2_1_L3_1_P3",
                  "price": 28263
                },
                {
                  "name": "L1_1_L2_1_L3_1_P4",
                  "price": 41527
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "L1_2",
      "children": [
        {
          "name": "L1_2_L2_1",
          "children": [
            {
              "name": "L1_2_L2_1_L3_1",
              "children": [
                {
                  "name": "L1_2_L2_1_L3_1_P1",
                  "price": 18978
                },
                {
                  "name": "L1_2_L2_1_L3_1_P2",
                  "price": 31657
                },
                {
                  "name": "L1_2_L2_1_L3_1_P3",
                  "price": 27969
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
*/
