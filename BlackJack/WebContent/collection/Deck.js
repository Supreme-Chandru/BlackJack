define(['underscore','backbone','model/Card'], function (_, BackBone,Card) {
	

	var Deck = BackBone.Collection.extend({
		model:Card,
		
		initialize: function(models, parameters) {
		    this.numberOfSets = parameters.numberOfSets;
		    this.numberOfCards = 52;
		    this.createCards();
		 },
		 
		createCards:function(){
			var Card =this.model;
			_.each(_.range(0,this.numberOfSets),function(){
				_.map(_.range(0,this.numberOfCards),function(index){
					var suit = Math.floor(index/13) + 1; // indexes 1 to 4
					var faceValue = (index%13)+1;   // indexes 1 to 13
					var card = new Card({suit:suit,faceValue: faceValue});
					this.push(card);
				},this);
			},this);
			
		}
		
	});

	return Deck;
});