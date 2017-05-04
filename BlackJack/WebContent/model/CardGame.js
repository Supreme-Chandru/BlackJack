define(['underscore','backbone','collection/Deck'], function (_, BackBone,Deck) {
	

	var CardGame = BackBone.Model.extend({
		initialize:function(){
			var deck = new Deck([],{"numberOfSets":2});
			deck.createCards();
			this.deck = deck;
			
		},
		getDeck:function(){
			return this.deck;
		}
	
	});

	return CardGame;
});