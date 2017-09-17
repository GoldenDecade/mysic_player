import {square, cube} from './math.js'
console.log(square(6))
console.log(cube(4))

if(process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}