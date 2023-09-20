function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var num=[0];
        var a=0;
        var b=1;
        var c=1;
        for(var i=1; i<n; i++){
            num.push(c);
            c=a+b;
            a=b;
            b=c;
        }
        console.log(num);

        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
fibonacciGenerator(100);
   