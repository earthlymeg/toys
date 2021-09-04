console.log('hello')

setTimeout( ()=> {
    console.log('hello from set timeout')
}, 0)

process.nextTick(() => {
    console.log('hello 2')
})

console.log('hello3')
