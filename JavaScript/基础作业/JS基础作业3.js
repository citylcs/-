// 函数multiply用于计算多个数字的乘积。
// 语法如下：
// let product = multiply (number0, number1[, number2, ….])；
// 使用范例如下：
// multiply(2, 3);	 返回值： 6
// multiply(-1, 3, 4);	返回值： -12
// multiply(1, 2, 3, 4, 5);    返回值： 120
// 请写出函数multiply的实现代码。

function multiply(){
    let length=arguments.length,
        product=1,
        para;
    for(let i=0;i<length;i++){
        para=arguments[i];
        product=product*para;
    }
    return product;
}
alert(multiply(4, 6, 23));