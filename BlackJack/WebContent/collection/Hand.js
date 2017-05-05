define(['underscore','backbone','model/Card'], function (_, BackBone,Card) {
	

	var Hand = BackBone.Collection.extend({
		//hand has cards
		model:Card,
		getScore:function(){
			//calculating score of normal card game by summing up all the facevalue
			 return _.reduce(this.models, function(sum, card){ 
				 	return sum + card.getFaceValue(); 
				 }, 0);
		}
	});

	return Hand;
});