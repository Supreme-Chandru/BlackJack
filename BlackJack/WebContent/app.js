
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
		//text: '../node_modules/requirejs-text/text'
	}
});




$(document).ready(function(){
/*
 * Using BackBone
 * 
 * Create Prototype/Abstract of card game and then extend it to BLackJack Card Game 
 * 
 * Suit - shape
 * Abstract CArd has Facevalue and Suit. It should have some status. Facevalue changes based on game.
 * 
 * Deck is a collection of CArd
 * 
 * Deck can dealhand, dealcard
 * 
 * Abstract Hand - is the player cards, keep track of score
 * 
 * 
 * Create models using backbomes
 * Extend to
 * -BlackJackGame
 * -BlackJackCard
 * -BlackJackScore
 * 
 * Extra functions such as Soft17, isAce, isFaceCArd, is21, isBlackjack, busted
 * 
 * 
 * Use Require.js
 * Keep each model in a seperate file
 * 
 * 
 * 
 * 
 * 
 */	

	//alert("Overall Idea");
	
	require(['backbone','app','model/BlackJackCardGame','collection/BlackJackDeck','collection/BlackJackHand'], function (Backbone, AppView, BlackJackCardGame, Deck,BlackJackHand) {
		
		// Initialize the application view
		var gameParameters={
				"numberOfSets" : 1
		};
		
		var blackJackCardGame = new BlackJackCardGame(gameParameters);
		var deck = blackJackCardGame.getDeck();
		//document.write(JSON.stringify(deck.toJSON()));
		var blackJackHand = new BlackJackHand(_.sample(deck.collect(),3));
		//document.write(JSON.stringify(blackJackHand.toJSON()));
		_.each(blackJackHand.models, function(blackJackCard,s){
			document.write(blackJackCard.getFaceName());
			document.write(blackJackCard.getFaceValue());
			document.write("\n");
		});
		var score = blackJackHand.getScore();
		document.write(score);
		document.write("\n");
		
	});
});