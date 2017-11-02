// getElementsByClassName函数实现获取指定类名的子元素列表，语法如下：
// let elements = getElementsByClassName(element, names);
// 使用示例如下：
// 如果html元素
// <div id="example">
//     <p id="p1" class="aaa bbb"/>
//     <p id="p2" class="aaa ccc"/>
//     <p id="p3" class="bbb ccc"/>
//     </div>
//     对应的DOM节点为example, 那么
// getElementsByClassName(example, “aaa”); 运行结果为包含id为p1, id为p2的元素列表
// getElementsByClassName(example, “bbb ccc”);运行结果为包含id为p3的元素列表
// getElementsByClassName(example, “ccc bbb”);运行结果为包含id为p3的元素列表
// 请实现getElementsByClassName方法，要求浏览器兼容。

function getElementsByClassName(element, names){

    let children = element.getElementsByTagName('*');
    let elements = [];
    let child, attr_class_name, flag;
    names = names.split(' ');
    for (let i = 0; child = children[i]; i++) {
        attr_class_name = ' ' + child.className + ' ';
        flag = true;
        for (let j = 0, name; name = names[j]; j++) {
            if (attr_class_name.indexOf(' ' + name + ' ') === -1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            elements.push(child);
        }
    }
    return elements;

}


getElementsByClassName('example', "aaa bbb");