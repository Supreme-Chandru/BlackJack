define(['underscore','backbone','model/Card','view/PlayerView'], function (_, BackBone, Card, PlayerView) {
	
	var DealerView = PlayerView.extend({
		el : "#dealerview",
		template:"<div class='score'></div><div class='hand'></div>",
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