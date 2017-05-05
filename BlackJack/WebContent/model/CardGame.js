define(['underscore','backbone','collection/Deck'], function (_, BackBone,Deck) {
	

	var CardGame = BackBone.Model.extend({
		
		defaults:{
			"numberOfSets":1
		},
		
		initialize:function(attributes){
			//create deck
			this.deckParameter={
					"numberOfSets":this.get("numberOfSets")
					};
			this.deck = this.createDeck();
			
		},
		
		createDeck:function(numberOfSets){
			
			 return new Deck(null,this.deckParameter);
		},
		
		getDeck:function(){
			return this.deck;
		}
	
	});

	return CardGame;
});