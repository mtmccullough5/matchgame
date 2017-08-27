// Jquery
// General form $(selector).action
var cardbtns = $('.card');
var card = {
    state: "inactive",
    frontimg: "A",
    backimg: "Card Back"
}
console.log(cardbtns)
for(i=0; i<cardbtns.length; i++){
    cardbtns[i].name = "Card" + i;
    cardbtns[i].state = "Inactive";
    cardbtns[i].backimg = "Card Back";
    cardbtns[i].frontimg = "Image" + i; 
    console.log(i);
}
console.log(cardbtns)
    

console.log(card)

$(document).ready(function(){
    $('.card').on('click',function(){
        console.log(this.frontimg)

    });
    
  });
   
 
  
  console.log("ItWorks")