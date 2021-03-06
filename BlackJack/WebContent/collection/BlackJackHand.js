define(['underscore','backbone','model/BlackJackCard','collection/Hand','model/Score','view/CardView'], function (_, BackBone, BlackJackCard, Hand, Score, CardView) {
	
	var BlackJackHand = Hand.extend({
		
		initialize:function(models,attributes){
			this.score = new Score({"type":"Hard", "value":0});
			this.on("add",this.onCardAdd);
			this.on("remove",this.onCardRemove);
			this.parentModel = attributes.parent ;
		},
		
		model:BlackJackCard,
		
		onCardAdd : function(){
			var card = _.last(this.models);
			
			var playerView = this.parentModel.view;
			playerView.trigger("cardAdded",card,this);
			
		},
		
		onCardRemove : function(removedCard){
			
			var playerView = this.parentModel.view;
			playerView.trigger("cardRemoved",removedCard);
			
			
		},
		
		getScore:function(){
			
			//calculating hardScore, where Ace is treated as 1
			var hardScore = this.constructor.__super__.constructor.getScore.apply(this,{});
			var aces = _.filter(this.models, function(blackJackCard){ 
				 	return blackJackCard.getFaceName()=="A"; 
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