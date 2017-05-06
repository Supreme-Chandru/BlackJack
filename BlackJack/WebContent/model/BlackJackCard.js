define(['underscore','backbone','model/Card'], function (_, BackBone,Card) {
	
	
	var BlackJackCard = Card.extend({
		
		 
		getFaceValue:function(){
			// calling the parent/super getFaceValue()
			var value = this.get("faceValue");
			
			//In BlackJack, K,Q,J is treated as faceValue 10
			if(value > 10 && value < 14){
				return 10;
			}
			this.set("faceValue",value);
			return value;
		}
	});
	return BlackJackCard;
});