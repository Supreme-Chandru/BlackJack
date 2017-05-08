define(['underscore','backbone','model/Card'], function (_, BackBone, Card) {
	//Not using Template because 
	var GameView = BackBone.View.extend({
		id:"game",
		tagName : "div",
		//better to put in one string than use jquery to append.
		template:'<div id="scoreboard"></div><section id = "players" class="group"><section id="player"><div id="playerview"></div></section><section id="dealer"><div id="dealerview"></div></section></section>',
		
		initialize: function() {
			
			this.$parent=$("#page");
		    
			this.$deal=$('<button id="deal" style="display:none;">Deal</div>');
			this.$overlay=$('<div id="overlay" style="display:none;"></div>');
			this.$message=$('<div id="message" style="display:none;"></div>');
			
			this.$parent.append(this.el);
		    this.$el.append($(this.template));
		    this.$el.append(this.$deal);
		    this.$el.append(this.$overlay);
		    this.$el.append(this.$message);
		    
		    this.render();
		},
		
		render:function(){
			this.$deal.show();
		    
		},
		
		events : {
			
			"click #overlay":"hideNotification",
			"click #message":"hideNotification",
			"click #deal":"deal"
			
		},
		
		deal :function(){
			
			this.$deal.hide();
			//start round
			this.startRound();
			//notify playerview that user clicked on deal
			var playerView = this.model.get("player").view;
			var dealerView = this.model.get("dealer").view;
			playerView.trigger("deal","");
			dealerView.trigger("deal","");
		},
		
		startRound:function(){
			
			this.model.startRound();
		},
		
		notifyPlayer:function(message){
			this.$overlay.show();
			this.$message.show();
			this.$message.html(message);
		},
		
		hideNotification:function(){
			
			this.$message.html("");
			this.$message.hide();
			this.$overlay.hide();
			
			this.model.endRound();
			
			//notify player view & dealer view that user clicked on deal
			var playerView = this.model.get("player").view;
			var dealerView = this.model.get("dealer").view;
			playerView.trigger("roundEnd","");
			dealerView.trigger("roundEnd","");
			
			this.render();
		}
		
	});
	return GameView;
});