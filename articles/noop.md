# lodash 源码分析 —— noop

本文为 lodash 源码分析的第1篇, 也是我真正开始读源码的第一篇。小弟不才，先从 lodash 中最简单的一个方法开始读起。

## 源码分析

```javascript
function noop() {
  // No operation performed.
}
```

`noop` 这个方法属于 Util 这个类别，作用也很简单，这个方法就是返回一个 undefined。

从源码中也看到函数体里没有任何的代码，故而执行该函数就返回了 undefined。 作为一个工具函数，在 lodash 的其他方法中以及在我们使用的过程中，当给一个值为函数的变量赋默认值时会被用到。
