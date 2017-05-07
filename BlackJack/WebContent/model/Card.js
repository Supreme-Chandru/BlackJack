define(['underscore','backbone'], function (_, BackBone) {

	var Card = BackBone.Model.extend({
		
		defaults:{
			suit:-1,   //value ranges from 1 to 4
			faceValue:-1   //value ranges from 1 to 13
		},
		
		//initializing card with its Face Value, Face Name, 
		initialize: function(attributes){
			
				this.set("faceName",this.getFaceName());
				this.set("faceValue",this.getFaceValue());
				this.set("suit",this.getSuit());
			
		},
		
		//By Default facevalue will be from  1 to 13 
		getFaceValue:function(){
			var value = this.get("faceValue");
			return value;
		},
		
		//By Default faceName will be Ace,Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten,Jack,Queen,King
		getFaceName :function(){
			
			var faceDictionary={
					"1":"A",
					"2":"2",
					"3":"3",
					"4":"4",
					"5":"5",
					"6":"6",
					"7":"7",
					"8":"8",
					"9":"9",
					"10":"10",
					"11":"J",
					"12":"Q",
					"13":"K"
				}
			
			
			return faceDictionary[this.get("faceValue").toString()];
			
		},
		
		//Heart, Spade, Club, Diamond 
		getSuit : function(){
			var suitDictionary={
					"1":"Heart",
					"2":"Spade",
					"3":"Club",
					"4":"Diamond"
					
				}
			return suitDictionary[this.get("suit").toString()];
			
		}
		
	});

	return Card;
});