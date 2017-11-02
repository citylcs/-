// 函数getCookies()解析document.cookie， 并返回一个对象， 该对象的属性名为cookie的name，属性值为cookie的value。请写出该函数的实现代码

function getCookies() {

    let cookie={};
    let all= document.cookie;
    if(all === "")
        return cookie;
    let list =all.split(";");
    for(let i=0;i<list.length;i++){
        let item =list[i];
        let p=item.indexOf("=");
        let name=item.substring(0,p);
        name=decodeURLComponent(name);
        let value=item.substring(p+1);
        value=decodeURLComponent(value);
        cookie[name]=value;
    }
    return cookie;
}
getCookies();