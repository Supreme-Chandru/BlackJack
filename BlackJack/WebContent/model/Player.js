define(['underscore','backbone','model/ScoreBoard','collection/BlackJackHand','model/Score'], function (_, BackBone, ScoreBoard, BlackJackHand, Score) {
	

	var Player = BackBone.Model.extend({
		
		initialize:function(){
			
			this.set("scoreBoard",new ScoreBoard());
			var blackJackHand = new BlackJackHand(null,{});
			
			this.set("hand",blackJackHand);
			
		},
		hit:function(){
			console.log(this.get("name")+" : ACTION --> HIT");
			var dealer = this.get("dealer");
			dealer.draw(this); //player asks dealer to draw the card for him
		},
		
		stand:function(){
			console.log(this.get("name")+" : ACTION --> STAND");
			var dealer = this.get("dealer");
			dealer.endPlayerRound(this);
		},
		bust:function(){
			console.log(this.get("name")+" : STATUS --> BUSTED");
			// dealer has busted him
			lost();
			
		},
		
		won:function(){
			console.log(this.get("name")+" : STATUS --> WON");
			var scoreBoard = this.set("scoreBoard");
			scoreBoard.incrementTotalWon();
			scoreBoard.incrementTotalPlayed();
		},
		
		lost:function(){
			console.log(this.get("name")+" : STATUS --> LOST");
			var scoreBoard = this.set("scoreBoard");
			scoreBoard.incrementTotalPlayed();
		}
	
		
	
	});


	return Player;
});