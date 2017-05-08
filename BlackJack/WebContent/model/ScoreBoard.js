define(['underscore','backbone'], function (_, BackBone) {
	
	
	var ScoreBoard = BackBone.Model.extend({
		
		defaults:{
			totalWon:0,
			totalPlayed:0
		},
		
		incrementTotalWon : function(){
			// incrementing score by 1 
			var newTotalWon = this.get("totalWon")+1;
			this.set("totalWon",newTotalWon);
			this.view.trigger("changed",{},this);
			
		},
		
		incrementTotalPlayed : function(){
			var newTotalPlayed = this.get("totalPlayed")+1;
			this.set("totalPlayed",newTotalPlayed);
			this.view.trigger("changed",{},this);
		}
	
		 
		
	});
	return ScoreBoard;
});