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
			
			//draw the card from deck
			var card = deck.shift();
			
			//give card to player hand
			playerHand.push(card);
			
			this.validateHand(player);  //evaluate score and check
		},
		
		isBlackJack:function(player){
			var scoreValue = player.get("hand").getScore().get("value");
			
			if(scoreValue==21 &&  player.get("hand").length == 2){
				
				this.play();  // dealer will play
				
				var dealerScoreValue = this.get("hand").getScore().get("value");
				
				// If dealer also is blackjack
				if(dealerScoreValue==21 &&  this.get("hand").length == 2){
					player.tie();
				}else{
					//player is blackjack
					player.blackJack();
				}
				
			}
		},
		
		validateHand:function(player){
			var scoreValue = player.get("hand").getScore().get("value");
			
			if(scoreValue>21){
				player.bust();
			}
			
		},
		
		endPlayerRound:function(player){
			var playerScoreValue = player.get("hand").getScore().get("value");
			
			//Player lose scenario
			if(playerScoreValue>21){
				player.bust();
			}
			else
			{
				//dealer will play & his score is calculated
				this.play();
				var dealerScoreValue = this.get("hand").getScore().get("value");
				
				//Dealer already would have player as won and ended the round 
				if(dealerScoreValue>21){
					player.won();
					return ;
				}
				//log the scores of both dealer and player
				console.log(this.get("name")+" : SCORE --> "+ dealerScoreValue);
				console.log(player.get("name")+" : SCORE --> "+ playerScoreValue);
				
				
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
					player.tie();
				}
			}
			//this.get("game").endRound();
			
		},
		clearTable:function(){
			console.log(this.get("name")+" : ACTION --> CLEARTABLE");
			
			var game = this.get("game");
			var playerHand = game.get("player").get("hand");
			var deck = game.get("deck");
			var dealerHand = this.get("hand");
			
			//put the cards back to Deck 
			this.addCardBacktoDeck(deck, playerHand);
			this.addCardBacktoDeck(deck, dealerHand);
			
		},
		
		addCardBacktoDeck:function(deck, hand){
			//get all cards from hand and add it to deck
			while(hand.length!=0) {
				var card = hand.shift();
				deck.push(card); 
			}
		},
		
		bust:function(){
			
		},
		
		blackJack:function(){
			//dealer cannot be blackjack
		}
	
	});


	return Dealer;
});