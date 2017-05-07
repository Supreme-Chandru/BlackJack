define(['underscore','backbone','model/Card','view/CardView'], function (_, BackBone, Card, CardView) {
	
	var PlayerView = BackBone.View.extend({
		el : "#playerview",
		template:"<div class='hand'></div><div id='playeraction'><button id='hit'>HIT</button><button id='stand'>STAND</button></div>",
		initialize: function() {
			this.model.view = this;
		    this.$el.append(this.template);
		    this.on("cardRemoved",this.removeCard,this);
		    this.on("cardAdded",this.addCard,this);
		    
		},
		events : {
			"click #hit":"onHit",
			"click #stand":"onStand"
		},
		
		onHit:function(){
			var player = this.model;
			player.hit();
		},
		
		onStand:function(){
			var player = this.model;
			player.stand();
		},
		
		addCard:function(card, hand){
			
			//Create CardView
			var cardView = new CardView({model:card,"parentModel":hand});
			card.view= cardView;
			console.log("card added to UI");
			
		},
		
		removeCard:function(card){
			// Remove card from view
			card.view.remove();
			console.log("card removed from UI");
		},
		
		render:function(){
			
		}
		
	});
	return PlayerView;
});