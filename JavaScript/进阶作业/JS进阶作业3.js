// 高版本的firefox,chrome及ie10以上的浏览器实现了Function.prototype.bind方法，bind方法调用语法为：
// functionObj.bind(thisArg[, arg1[, arg2[, ...]]])
// 使用范例参考如下:
//     function move(x, y) {
//         this.x += x;
//         this.y += y;
//     }
// let point = {x:1, y:2};
// let pointmove = move.bind(point, 2, 2);
// pointmove(); // {x:3, y:4}

function.prototype.bind=function(obj){
    let aa = this;
    args = arguments;
    return function(){
        aa.apply(obj,Array.prototype.slice.call(args,1))
    }
};
function move(x, y) {
    this.x += x;
    this.y += y;
}
let point = {x:1, y:2};
let pointmove = move.bind(point, 2, 2);
pointmove();
console.log(point);