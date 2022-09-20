function check_prime(num)
{
let count=0;
for(let i=0; i<num; i++)
{
if(num%i==0)
{ count++;
}
}
if(count==1){
return true;
}return false;
}

let ans=check_prime(13)
if(ans==true){
console.log("prime");
}
else{
console.log("Not prime");
}


