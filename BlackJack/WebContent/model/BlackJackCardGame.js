define(['underscore','backbone','collection/BlackJackDeck','model/CardGame'], function (_, BackBone,BlackJackDeck, CardGame) {
	

	var BlackJackCardGame = CardGame.extend({
		
		
		createDeck:function(){
			
			 return new BlackJackDeck(null,this.deckParameter);
		}
	
	});

	return BlackJackCardGame;
});