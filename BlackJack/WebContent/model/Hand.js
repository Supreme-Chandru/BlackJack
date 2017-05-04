define(['underscore','backbone'], function (_, BackBone) {
	

	var Hand = BackBone.Collection.extend({
		model:Card
	});

	return Hand;
});