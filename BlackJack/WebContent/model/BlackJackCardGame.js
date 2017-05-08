define(['underscore','backbone','collection/BlackJackDeck','model/CardGame','model/Player','model/Dealer','view/PlayerView','view/DealerView','view/GameView'], 
		function (_, BackBone,BlackJackDeck, CardGame, Player, Dealer, PlayerView, DealerView, GameView) {

	var BlackJackCardGame = CardGame.extend({
		defaults:{
			shuffleRecoil:6
		},
		
		initialize:function(attributes){
			
			this.constructor.__super__.initialize.apply(this,attributes);
			this.set("round",0);
			
			//Create the game view and bind
			var gameView = new GameView({model:this});
			this.set("view",gameView);
			
			var game = this;
			
			
			//Initialize Dealer, Player
			var dealer = new Dealer({name:"DEALER", game:game});
			var player = new Player({name:"PLAYER", game:game});
			
			//Binding: player to the game
			this.set("player",player);
			
			//Binding: dealer to game & game to dealer
			this.set("dealer",dealer);
			dealer.set("game",game);
			
			//Binding: player to dealer
			player.set("dealer",dealer);
			player.set("game",game);
			
			//Binding: dealer to dealer, dealer draws his own cards
			dealer.set("dealer",dealer);
			
			
			
			
			//Create View for Dealer and Player
			var dealerView = new DealerView({model:dealer});
			var playerView = new PlayerView({model:player});
			
			
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
			this.incrementRound();
			
		},
		
		incrementRound:function(){
			var round = this.get("round");
			this.set("round",round+1);
		}
	
	});

	return BlackJackCardGame;
});