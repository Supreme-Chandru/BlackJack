define(['underscore','backbone'], function (_, BackBone) {
	

	var Card = BackBone.Model.extend({
		defaults:{
			suit:-1,
			faceValue:-1
		}
		
		
	});

	return Card;
});