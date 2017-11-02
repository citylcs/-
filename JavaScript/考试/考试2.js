// 函数search用于在一个已排序的数字数组中查找指定数字。
// 语法如下：
// let index = search(arr, dst);
// 使用范例如下：
// let arr = [1, 2, 4, 6, 7, 9, 19,20, 30, 40, 45, 47];
// search(arr, 45);		返回值： 10
// 请写出函数search的实现代码 请给出函数，要求不能使用Array的原型方法，且算法时间复杂度低于O(n)。

function search(arr,dst){
    let l,r;
    l = 0;
    r=arr.length-1;
    while(l <= r){
        let m = Math.floor((l+r)/2);
        if(dst<arr[m]){r=m-1;}
        else if(arr[m]<dst){l=m+1;}
        else{
            if(arr[m-1]==dst){return m-1;}//添加一个判断
            return m;
        }
    }
    return -1;
}

let arr= [1, 2, 4, 6, 7, 9, 19,20, 30, 40, 45, 47];
search(arr, 45);//10

let arr1= [1,2,3,4,4,5];
search(arr, 4);//3
