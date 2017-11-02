// 实现type函数用于识别标准类型和内置对象类型，语法如下：
// let t = type(obj);
// 使用举例如下：
// let t = type(1) // t==="number"
// let t = type(new Number(1)) // t==="number"
// let t = type("abc") // t==="string"
// let t = type(new String("abc")) // t==="string"
// let t = type(true) // t==="boolean"
// let t = type(undefined) // t==="undefined"
// let t = type(null) // t==="null"
// let t = type({}) // t==="object"
// let t = type([]) // t==="array"
// let t = type(new Date) // t==="date"
// let t = type(/\d/) // t==="regexp"
// let t = type(function(){}) // t==="function"

function type(obj){
    if(obj){
        return obj.constructor.toString().match(/function\s*([^(]*)/)[1]
    }
    else{
        return Object.prototype.toString.call(obj).slice(8,-1)
    }
}