// Jquery
// General form $(selector).action
var matchingImages = [
  "Image1", "Image2", "Image3", "Image4", "Image5", "Image6", "Image7", "Image8",
  "Image1", "Image2", "Image3", "Image4", "Image5", "Image6", "Image7", "Image8"
]
var card = $('.card');
for(i=0; i<card.length; i++){
  card[i].name = "Card" + i;
  card[i].state = "Inactive";
  card[i].backImg = "Card Back";
  imgSplice = Math.floor((Math.random() * matchingImages.length-1) + 1);
  console.log(matchingImages)
  console.log(imgSplice)
  card[i].frontImg = matchingImages[imgSplice];
  matchingImages.splice(imgSplice,1)
  card[i].revealed = false; 
}
  
$(document).ready(function(){
  var revealedCard = null;
  $('.card').on('click',function(){
    var cardChoice = this;
    cardChoice.disabled = true;
    cardChoice.revealed = true;
    cardChoice.innerText = cardChoice.frontImg;
    if (revealedCard === null){
      revealedCard = cardChoice;
      console.log(cardChoice)
      return revealedCard;
    } else if (revealedCard.frontImg === cardChoice.frontImg){
      console.log(revealedCard)
      console.log("Second Card Choice")
      return revealedCard = null;
    } else { 
      console.log(cardChoice)
      setTimeout(function(){
      revealedCard.innerText = revealedCard.backImg;
      cardChoice.innerText = cardChoice.backImg;
      revealedCard.disabled = false;
      cardChoice.disabled = false;
      return revealedCard = null
    },2000)};
  });
});