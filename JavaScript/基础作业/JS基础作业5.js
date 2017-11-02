// 函数escapeHTML用于转义html字符串中的特殊字符(<>"&)。
// 语法如下：
// let escapedStr = escapeHTML(htmlStr);
// 使用范例如下：
// escapeHTML('<div>Tom&Jerry</div> ');
// 返回值：
// '&lt;div&gt;Tom&amp;Jerry&lt;/div&gt; '
// escapeHTML('<input type="text" name="mobile"> ');
//     返回值：
//     '&lt;inputtype=&quot;text&quot; name=&quot;mobile&quot;&gt; '
//     请写出函数escapeHTML的实现代码。

function escapeHTML(htmlStr){
    htmlStr.replace(/[<>]/g,function(m0){
        switch(m0){
            case "<" :
                return "<" ;
            case ">" :
                return ">" ;
        }
    });
    return htmlStr;
}
escapeHTML('<div>Tom&Jerry</div> ');