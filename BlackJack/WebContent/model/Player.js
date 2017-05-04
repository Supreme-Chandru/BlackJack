define(['underscore','backbone'], function (_, BackBone) {
	

	Player = BackBone.model.extend({
		
		initialize:function(){
			this.gamesPlayed=0,
			this.gamesWon=0,
			this.gamesLost=0
		}
	});


	return Player;
});