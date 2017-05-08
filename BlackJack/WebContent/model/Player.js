define(['underscore','backbone','model/ScoreBoard','collection/BlackJackHand','model/Score','view/PlayerView.js'], function (_, BackBone, ScoreBoard, BlackJackHand, Score, PlayerView) {
	

	var Player = BackBone.Model.extend({
		
		initialize:function(){
			
			this.set("scoreBoard",this.get("game").get("scoreBoard"));
			var blackJackHand = new BlackJackHand(null,{"parent":this});
			
			this.set("hand",blackJackHand);
			
			this.gameView = this.get("game").get("view");
			
			//bind player the View
			//var playerView = new PlayerView({model : this});
			
			
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
			this.gameView.notifyPlayer("Busted");
			console.log(this.get("name")+" : STATUS --> BUSTED");
			// dealer has busted him
			var scoreBoard = this.get("scoreBoard");
			scoreBoard.incrementTotalPlayed();
			
		},
		
		won:function(){
			this.gameView.notifyPlayer("You Won");
			console.log(this.get("name")+" : STATUS --> WON");
			var scoreBoard = this.get("scoreBoard");
			scoreBoard.incrementTotalWon();
			scoreBoard.incrementTotalPlayed();
		},
		
		lost:function(){
			this.gameView.notifyPlayer("You Lost");
			console.log(this.get("name")+" : STATUS --> LOST");
			var scoreBoard = this.get("scoreBoard");
			scoreBoard.incrementTotalPlayed();
		},
		
		tie:function(){
			this.gameView.notifyPlayer("Push");
			console.log(this.get("name")+" : STATUS --> TIE");
			var scoreBoard = this.get("scoreBoard");
			scoreBoard.incrementTotalPlayed();
		}
	
		
	
	});


	return Player;
});