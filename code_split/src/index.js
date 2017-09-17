// import _  from 'lodash'
// import $ from 'jquery'
console.log(_.join(['index', 'module', 'loaded!'], ' '));
import print from 'src/print'
/*
function lazyload() {
    var element = document.createElement('div')
    var button = document.createElement('button')
    var br = document.createElement('br')

    button.innerHTML = 'click me and look at the console!'
    element.appendChild(br)
    element.appendChild(button)
    button.onclick= e =>import(/!* webpackChunkName: 'print'*!/ './print').then(module=> {
        var print = module.default
        print()
    })
    return element
}
document.body.appendChild(lazyload())*/
print()
console.log('cache index');
let arr = [2,4,3,6,4,74,1]
$.each(arr, function(index, elem) {
    console.log(elem);
})
