//method to write a buffer in stirng redability
var buf = Buffer.from('abc');
console.log(buf.toString());

//method to allocate a buffer
var newbuf = Buffer.alloc(4)
console.log(newbuf.toJSON())

//buffer.write method to write a buffer
var abuf = buf.write('this is bufer')
console.log(abuf)

//buffer.from method
var buffrom = Buffer.from('abc');
console.log(buffrom);

//comparing in buffer
var buffer1 = Buffer.from('ABCD');
var buffer2 = Buffer.from('ABC');
var result = buffer1.compare(buffer2);
console.log(result)

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}



//copy a buffer
buffer3= Buffer.from('buffer3')
buffer4= Buffer.from('buffer4')
buffer3.copy(buffer4);
console.log("buffer4 content: " + buffer4.toString())

//slicing a buffer
var buffer5 = Buffer.from('TutorialofBuffer');
var buffer6 = buffer5.slice(0,9);
console.log("buffer2 content: " + buffer6.toString());


//to find  length of a buffer
var lenbuffer = Buffer.from('tofindlengthofabuffer')
console.log('this is the length of a buffer',lenbuffer.length)