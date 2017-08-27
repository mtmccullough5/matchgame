// Jquery
// General form $(selector).action
var card = $('.card');
for(i=0; i<card.length; i++){
  card[i].name = "Card" + i;
  card[i].state = "Inactive";
  card[i].backImg = "Card Back";
  card[i].frontImg = "Image" + i;
  card[i].revealed = false; 
}
  

console.log(card)

$(document).ready(function(){
  var revealedCard = null;
  $('.card').on('click',function(){
    var cardChoice = this;
    console.log(cardChoice);
    cardChoice.revealed = true;
    cardChoice.innerText = cardChoice.frontImg;
    if (revealedCard === null){
      revealedCard = cardChoice;
      console.log(revealedCard);
      return revealedCard;
    } else if (revealedCard === cardChoice.frontImg){
      console.log(revealedCard)
      console.log("Second Card Choice")
      return revealedCard = null;
    } else { setTimeout(function(){
      console.log("cardChoice")
      console.log(cardChoice)
      revealedCard.innerText = revealedCard.backImg;
      cardChoice.innerText = cardChoice.backImg;
      console.log(this.backImg)
      return revealedCard = null
    },2500)};
    console.log(this.frontImg)

  });
});
   
 
  
  console.log("ItWorks")