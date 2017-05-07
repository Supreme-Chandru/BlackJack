define(['underscore','backbone','model/Card','view/PlayerView'], function (_, BackBone, Card, PlayerView) {
	
	var DealerView = PlayerView.extend({
		el : "#dealerview",
		template:"<div class='hand'></div>",
		initialize: function() {
			this.model.view = this;
			this.$el.append(this.template);
		},
		events : {
			
		},
		
		onHit:function(){
			
		},
		
		onStand:function(){
			
		},
		
		render:function(){
			
		}
		
	});
	return DealerView;
});