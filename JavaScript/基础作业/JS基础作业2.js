// 函数parseQuery用于解析url查询参数。
// 语法如下：
// let obj = parseQuery(query)
// query是被解析的查询参数，函数返回解析后的对象。
// 使用范例如下：
// let jerry = parseQuery("name=jerry&age=1");
// jerry; 	返回值：{name: " jerry ", age: "1"}
// let tom = parseQuery("name= tom &age=12&gender&");
// tom; 	返回值：{name: "tom", age: "12", gender: ""}
// 请写出函数parseQuery的实现代码。

let parseQuery = function(query){
    let reg = /([^=&\s]+)[=\s]*([^=&\s]*)/g;
    let object = {};
    while(reg.exec(query)){
        object[RegExp.$1] = RegExp.$2;
    }
    return object;
};
let jerry = parseQuery("name=jerry&age=1");
console.log(jerry);

let tom = parseQuery("name= tom &age=12&gender&");
console.info(tom);