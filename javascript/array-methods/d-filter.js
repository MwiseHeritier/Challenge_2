let ages = [15, 21, 17, 30, 12];
agesAbove = ages.filter(function(age){
   return age >= 18;
})
console.log(agesAbove);