define(['underscore','backbone','model/Card'], function (_, BackBone, Card) {
	
	var PlayerView = BackBone.View.extend({
		el : "#playerview",
		template:"<div class='hand'></div><div id='playeraction'><button id='hit'>HIT</button><button id='stand'>STAND</button></div>",
		initialize: function() {
			this.model.view = this;
		    this.$el.append(this.template);
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
		
		render:function(){
			
		}
		
	});
	return PlayerView;
});