define(['underscore','backbone','model/BlackJackCard','collection/Deck'], function (_, BackBone, BlackJackCard,Deck) {
	

	var BlackJackDeck = Deck.extend({
		
		model:BlackJackCard,
		
	});

	return BlackJackDeck;
});