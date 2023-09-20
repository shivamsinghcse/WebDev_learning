var num = [];
var count = 1;

    

function fizzbuzz(){
    while(count <= 100){
    if(count%3 ==0 && count%5!=0){
        num.push("fizz");
    }else if(count%3 != 0 && count%5 == 0){
        num.push("buzz");
    }
    else if(count%3 ==0 && count%5==0){
        num.push("fizzbuzz")
    }
    else{
        num.push(count);
    }
    count++;
    console.log(num);
    }
}