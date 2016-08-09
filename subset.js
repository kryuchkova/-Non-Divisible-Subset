function processData(input) {
var a = input.split("\n");
var c = [];
var bb = []
    function processIt(arr) {
        
        for (var i = 0; i < arr.length; i++){
            
            c.push(arr[i].split(" "));
            
        }
        
    }

    processIt(a);
    
function isNumber(arr) {
     for (var z = 0; z < arr.length;  z++){
        for(var e = 0; e < arr[z].length; e++){
            if(arr[z][e] > 0) {  bb.push(Number(arr[z][e]));}
        }
 }
 }
    isNumber(c);
    
var numArray = bb.splice(0,2)
var combos = [];
var solutions = []
var k =numArray[1];
    
    //console.log(a);
   //console.log(c);
    //console.log(bb);
    
function sPrime(arr) { 
    for (var i = 0; i < arr.length;i++) {
        for (var e = i + 1; e < arr.length; e++) {
            
            combos.push(arr[i] + arr[e]);
            
            
        }   
    }    
   } 
    
    sPrime(bb);
   
    
    function modK(arr) {
      
        for(var g= 0; g<arr.length; g++) {
            
           
           if(arr[g] % k == 0){
               
               solutions.push(arr[g]);
               
           } 
             
            
        }        
        
        
    }
    
    modK(combos);
    
   // console.log(combos);
    //console.log(solutions);
    console.log(solutions.length)
    


} 
