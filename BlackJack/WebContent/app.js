
/* * * * * * *
 * 
 * https://github.com/tastejs/todomvc/blob/gh-pages/examples/backbone_require/js/main.js
 * 
 * * * * * * */

/*global require*/

'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
		
	},
	paths: {
		jquery: 'lib/jquery-3.2.1.min',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		//backboneLocalstorage: '../node_modules/backbone.localstorage/backbone.localStorage',
		text: 'lib/text'
	}
});




$(document).ready(function(){
	require(['backbone','app','model/BlackJackCardGame','collection/BlackJackDeck','collection/BlackJackHand','view/CardView'], function (Backbone, AppView, BlackJackCardGame, Deck,BlackJackHand, CardView) {
		
		//Parameters
		var gameParameters={
				"numberOfSets" : 1,
				"shuffleRecoil" : 6
		};
		
		//Game is initiated
		var blackJackCardGame = new BlackJackCardGame(gameParameters);
		
	});
});