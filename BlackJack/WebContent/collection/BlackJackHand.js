define(['underscore','backbone','model/BlackJackCard','collection/Hand','model/Score'], function (_, BackBone, BlackJackCard, Hand, Score) {
	
	var BlackJackHand = Hand.extend({
		
		initialize:function(models,attributes){
			this.score = new Score({"type":"Hard", "value":0});
		},
		model:BlackJackCard,
		getScore:function(){
			
			//calculating hardScore, where Ace is treated as 1
			var hardScore = this.constructor.__super__.constructor.getScore.apply(this,{});
			var aces = _.filter(this.models, function(blackJackCard){ 
				 	return blackJackCard.getFaceName()=="Ace"; 
				 });
			var numberOfAces=aces.length;
			
			//To get max value and make sure score does not get more than 21
			//if the hand is a softHand then the hardScore must be <=11, So Considering Ace as 11 will not exceed 21
			
			
			if(numberOfAces > 0 && hardScore <=11 ){
				//10 is added because 1 is already added in hardScore
				var softScore = hardScore+10;
				
				var score = this.score;
				score.set("type","Soft");
				score.set("value",softScore);
				return score;
				
			}
			
			return this.score.set("value",hardScore);	
			 
		}
		
	});

	return BlackJackHand;
});