// for
const arr = [1,2,3,4,5,6,7,8,9]

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// break the loop khali scope se baher lega shown below matlab do loop hai inner loop mai break hai to kya hua outerloop chalega 

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = 0; j < arr.length; j++) {
        const element = arr[j];
        if (arr[j]==0) {
            break;
        }
        console.log(arr[j]);
    }
    console.log(element);
    
}

// continue

const ar = [100,200,300,400]
for (let index = 0; index < ar.length; index++) {
    const element = ar[index];
    if (ar[index]==200) {
        continue
    }
    console.log(ar[index]);
    
}