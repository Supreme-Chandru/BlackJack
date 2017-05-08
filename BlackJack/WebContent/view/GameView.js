define(['underscore','backbone','model/Card'], function (_, BackBone, Card) {
	//Not using Template because 
	var PlayerView = BackBone.View.extend({
		id:"game",
		tagName : "div",
		//better to put in one string than use jquery to append.
		template:'<div id="scoreboard"></div><section id="player"><div id="playerview"></div></section><section id="dealer"><div id="dealerview"></div></section>',
		
		initialize: function() {
			
			this.$parent=$("#page");
		    
			this.$overlay=$('<div id="overlay" style="display:none;"></div>');
			this.$message=$('<div id="message" style="display:none;"></div>');
			
		    this.render();
		},
		
		render:function(){
			
		    
		    this.$parent.append(this.el);
		    this.$el.append($(this.template));
		    this.$el.append(this.$overlay);
		    this.$el.append(this.$message);
		},
		
		events : {
			"click #start":"startGame",
			"click #nextround":"continueGame",
			"click #overlay":"hideNotification",
			"click #message":"hideNotification",
			
		},
		
		startGame:function(){
			this.model.startRound();
		},
		
		continueGame:function(){
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
			
			
		}
		
	});
	return PlayerView;
});