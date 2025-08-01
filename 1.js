function sanhuu(){
    let hereglee=[500,-200,1000,-150,-50,800]
    let orlogo=0
    let zarlaga=0
for(let i=0;i<hereglee.length;i++){
    if (hereglee[i]>0){
        orlogo=orlogo+hereglee[i]
} else {
    zarlaga=zarlaga+hereglee[i]
}
}
const niit=orlogo+zarlaga
return niit
}  
  const result=sanhuu()
  console.log(result);
  
 