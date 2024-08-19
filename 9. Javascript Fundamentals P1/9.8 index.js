function drawTriangle(triangleSize) {
   var element = "*";
   var i = 1
   // TODO: Add your solution here
   for (i = 1; i <= triangleSize; i++) {
      console.log(element.repeat(i));
   }
   
}

console.log("Testing drawTriangle()...");

// TODO: Test drawTriangle() with different arguments
drawTriangle(4);


// Do NOT remove the following line
export default drawTriangle;