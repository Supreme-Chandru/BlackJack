define(['underscore','backbone','model/Card'], function (_, BackBone, Card) {
	
	var CardView = BackBone.View.extend({
		tagName: "div",
		className: "card",
		template: _.template("<p></p>"),
		initialize: function(options) {
			
			var hand = options.parentModel;
			var player = hand.parentModel;
			var playerView = player.view;
			this.$hand = playerView.$el.find(".hand");
		    this.listenTo(this.model, "change", this.render);
		    this.render();
		},
		render:function(){
			var p = $(this.template());
			var suit = this.model.get("suit").toLocaleLowerCase();
			var faceName = this.model.get("faceName");
			p.html(faceName);
			this.$el.addClass("suit"+suit);
			this.$el.append(p);
			this.$hand.append(this.$el);
			return this;
		}
		
	});
	return CardView;
});