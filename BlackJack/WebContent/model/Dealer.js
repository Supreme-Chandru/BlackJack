define(['underscore','backbone','model/Player','collection/BlackJackHand'], function (_, BackBone, Player, BlackJackHand) {

	var Dealer = Player.extend({
		
		
		initialize:function(){
			this.constructor.__super__.initialize.apply(this,{});
		},
		
		play:function(){
			console.log(this.get("name")+" : ACTION --> PLAY");
			var hand = this.get("hand");
			var score = hand.getScore();
			
			//Hit. If, less than 17 OR soft 17
			while((score.get("value") < 17) || (score.get("value")===17 && score.get("type")==="Soft")){
				
				//dealer is extended from player, he can hit
				this.hit();
				score = hand.getScore();
			}
		},
		
		draw:function(player){
			var game = this.get("game");
			var deck = game.get("deck");
			var playerHand = player.get("hand");
			var card = deck.shift();
			
			playerHand.push(card);
			
			this.validateHand(player);  //evaluate score and check
		},
		
		validateHand:function(player){
			var scoreValue = player.get("hand").getScore().get("value");
			
			if(scoreValue>21){
				player.bust();
				this.get("game").endRound();
			}
			
		},
		
		endPlayerRound:function(player){
			var playerScoreValue = player.get("hand").getScore().get("value");
			
			//Player lose scenario
			if(playerScoreValue>21){
				player.bust();
				this.get("game").endRound();
			}
			else
			{
				//dealer will play & his score is calculated
				this.play();
				var dealerScoreValue = this.get("hand").getScore().get("value");
				
				//Player win Scenario
				if(dealerScoreValue < playerScoreValue){
					player.won();
				}
				//Player lost Scenario
				else if(dealerScoreValue > playerScoreValue){
					player.lost();
				}
				//Player & Dealer lost Scenario
				else if(dealerScoreValue === playerScoreValue){
					player.lost();
				}
			}
			
		},
		clearTable:function(){
			console.log(this.get("name")+" : ACTION --> CLEARTABLE");
			
			var game = this.get("game");
			var playerHand = game.get("player").get("hand");
			var deck = game.get("deck");
			var dealerHand = this.get("hand");
			
			deck.push(playerHand.models);
			deck.push(dealerHand.models);
			
			playerHand.reset(null);
			dealerHand.reset(null);
			
		}
	
	});


	return Dealer;
});