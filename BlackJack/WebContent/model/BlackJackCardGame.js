define(['underscore','backbone','collection/BlackJackDeck','model/CardGame','model/Player','model/Dealer'], 
		function (_, BackBone,BlackJackDeck, CardGame, Player, Dealer) {

	var BlackJackCardGame = CardGame.extend({
		defaults:{
			shuffleRecoil:6
		},
		
		initialize:function(attributes){
			
			this.constructor.__super__.initialize.apply(this,attributes);
			this.set("round",0);
			//Initialize Dealer, Player
			var dealer = new Dealer({name:"DEALER"});
			var player = new Player({name:"PLAYER"});
			
			var game = this;
			
			//Binding: player to the game
			this.set("player",player);
			
			//Binding: dealer to game & game to dealer
			this.set("dealer",dealer);
			dealer.set("game",game);
			
			//Binding: player to dealer
			player.set("dealer",dealer);
			
			//Binding: dealer to dealer, dealer draws his own cards
			dealer.set("dealer",dealer);
			
			// If there are multiple players then the all players has to be set
			this.startRound();
		},
		
		createDeck:function(){
			 return new BlackJackDeck(null,this.deckParameter);
		},
		
		startRound:function(){
			var round = this.get("round");
			console.log("round = "+round);
			
			var shuffleRecoil = this.get("shuffleRecoil");
			//shuffle based on shuffleRecoil
			if(round % shuffleRecoil == 0){
				this.get("deck").shuffle();
			}
			
			var player = this.get("player");
			var dealer = this.get("dealer");
			
			player.hit(); 
			player.hit(); // player will be given 2 Cards
			
			dealer.hit();    //only one card to dealer will be given (other not visible, so not using draw)
			
		},
		
		endRound:function(){
	
			var dealer = this.get("dealer");
			dealer.clearTable();
			incrementRound();
			
		},
		
		incrementRound:function(){
			var round = this.get("round");
			this.set("round",round+1);
		}
	
	});

	return BlackJackCardGame;
});