function identifyPrime(num) {
     let x=0;
    for(let i=1; i<=num; i++){
        if (num%i==0){
            x++;
        } 
        if (x==2){
            return true;
            }
             return false;
             
} 

let ans=identifyprime(13);

if(ans==true){

console.log("prime")

}
else{

console.log("not a prime")

}