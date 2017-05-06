define(['underscore','backbone'], function (_, BackBone) {
	
	
	var Score = BackBone.Model.extend({
		
		defaults:{
			type:"Hard",
			value : 0
		}
		
		
		 
		
	});
	return Score;
});