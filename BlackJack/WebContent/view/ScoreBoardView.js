define(['underscore','backbone','model/ScoreBoard'], function (_, BackBone, ScoreBoard) {
	
	var ScoreBoardView = BackBone.View.extend({
		el:"#scoreboard",
		template: _.template('<div>Wins : <span id="totalwins">0</span></div><div>Total Played : <span id="totalplayed">0</span></div><div>Win Rate : <span id="winrate">0</span>%</div>'),
		initialize: function(options) {
			//bind view as model's view
			this.model.view=this;
			this.on("changed", this.render, this);
			var content = $(this.template());
			this.$el.append(content);
			this.$totalWins = this.$el.find("#totalwins");
			this.$totalPlayed = this.$el.find("#totalplayed");
			this.$winRate = this.$el.find("#winrate");
		    this.render();
		},
		render:function(){
			
			var scoreBoard = this.model;
			this.$totalWins.html(scoreBoard.get("totalWon"));
			this.$totalPlayed.html(scoreBoard.get("totalPlayed"));
			
			if(scoreBoard.get("totalPlayed") == 0 ){
				this.$winRate.html(0);
			}else{
				var winRate = (scoreBoard.get("totalWon")/scoreBoard.get("totalPlayed"))*100;
				this.$winRate.html(parseFloat(winRate).toPrecision(4));
			}
			
			
		}
		
	});
	return ScoreBoardView;
});