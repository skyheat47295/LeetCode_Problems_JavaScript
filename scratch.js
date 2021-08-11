function foo(obj) {
    return {
        a: obj.bar,
        b: obj.baz
    }
    }
const { a } = foo({bar: 27, baz: 41})
console.log(a)