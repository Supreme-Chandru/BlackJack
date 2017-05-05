define(['underscore','backbone','collection/Deck'], function (_, BackBone,Deck) {
	

	var CardGame = BackBone.Model.extend({
		initialize:function(){
			//create deck
			this.deck = new Deck([],{"numberOfSets":2});
			this.deck.createCards();
			
			
			
		},
		getDeck:function(){
			return this.deck;
		}
	
	});

	return CardGame;
});