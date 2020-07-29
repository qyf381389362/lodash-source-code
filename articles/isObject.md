# lodash 源码分析—— isObject

本文为 lodash 源码分析的第 2 篇。

`isObject` 这个方法属于 Lang 这个类别, 用来检查一个值是否为 Object,  例如：arrays, functions, objects, regexes, new Number(0) 以及 new String('')。

## 源码分析

```javascript
/**
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
*/
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}
```

从源码实现看到，该方法其实是依赖了 `typeof` 来进行判断。

首先，最主要的一点是排除了 `null`, 因为 `typeof null` 会返回 `object`。

其次就是对 `fuction` 做了特殊处理，`function` 其实也是 `object` 类型, 但是在使用 `typeof` 判断时，返回的是 `function`，所以要进行特殊处理。
