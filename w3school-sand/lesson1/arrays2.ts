// arrays type can additionly be readonly as to not be changed
 const x: readonly string[] = ["hellcat"];
 x.push("jack")

 console.log(x)
 // when ran it throws error 
// try without readonlu