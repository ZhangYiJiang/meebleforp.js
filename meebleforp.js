var meebleforp = {
	start: function (duration) {
		var that = this;

		if (!this.purpleOverlay) {
			this.init();
		}
		
		this.purpleIntervalId = setInterval(function(){
			that.flashPurple();
		}, this.purpleFlashInterval);

		this.flashPurple();
		this.flashStartingText();

		setTimeout(function(){
			that.textIntervalId = setInterval(function(){
				var r = Math.floor(Math.random() * that.randomPhrases.length);
				that.flashText(that.randomPhrases[r]);
			}, that.purpleFlashInterval * 2);
		}, that.purpleFlashInterval);

		setTimeout(function(){
			clearInterval(that.textIntervalId);
			clearInterval(that.purpleIntervalId);
		}, duration);
	},

	textWidth: 360, 
	margin: 100,
	purpleFlashInterval: 6000,

	init: function () {
		var purpleOverlay = $('<div>', {
			css: {
				position: 'fixed', 
				top: 0, bottom: 0, right: 0, left: 0,
				backgroundColor: 'rgba(165, 93, 204, 0.7)', 
				zIndex: 10000
			}
		}).hide().appendTo('body');

		this.purpleOverlay = purpleOverlay;
	},

	flashPurple: function () {
		this.purpleOverlay.fadeIn(500, function(){
			$(this).delay(200).fadeOut(500);
		});
	},

	flashText: function (text, duration) {
		if (!duration) duration = 2800;

		var textEle = $('<span>', {
				css: {
					position: 'absolute', 
					width: this.textWidth, 

					textAlign: 'center', 
					fontSize: 34, 
					fontWeight: 'bold',
					fontFamily: 'Arial, sans-serif', 
					textShadow: '1px 1px 4px rgba(0, 0, 0, 0.9)', 
					color: '#fff',
					zIndex: 20000
				}, 
				text: text, 
				'class': 'purple-text'
			});

		var	wHeight = this.purpleOverlay.height(), 
			wWidth = this.purpleOverlay.width(), 
			textHeight = textEle.height(), 
			tries = 0, maxTries = 10; // Try, but don't try too much! 

		do {
			textEle.offset({
				top: Math.random() * (wHeight - this.margin * 2 - textHeight) + this.margin, 
				left: Math.random() * (wWidth - this.margin * 2 - this.textWidth) + this.margin
			});

			tries ++;
		// Make sure the text isn't colliding after randomizing
		} while (this.checkCollision(textEle) && tries <= maxTries);

		textEle.appendTo('body')
			.fadeIn(300).delay(duration)
		.fadeOut(600, function(){
			$(this).remove();
		});
	},

	flashStartingText: function () {
		var delay = (this.purpleFlashInterval - 400) / this.startingPhrases.length, 
			that = this;

		for (var i = 0; i < this.startingPhrases.length; i++) {
			setTimeout(function (phrase){
				that.flashText(phrase, delay * 2);
			}, i * delay, this.startingPhrases[i]);
		}

		setTimeout(function(){
			that.flashText(that.finalStartingPhrase, 3000);
		}, this.purpleFlashInterval + 400);
	},

	checkCollision: function (ele) {
		var elePosition = ele.offset(), 
			foundCollision = false;

		$('span.purple-text').each(function(){
			var position = $(this).offset();

			if (Math.abs(elePosition.left - position.left) < this.textWidth && 
				Math.abs(elePosition.top - position.top) < ele.height()) {

				foundCollision = true;
				return;
			}
		});

		return foundCollision;
	},

	startingPhrases: [	
		"Ugh...", 
		"Whoa...", 
		"I do not feel right.", 
		"I do not feel right at all.",
		"I am feelin' mflerblwerb...", 
		"A little heeblwob...", 
		"Zibblezibzob...", 
		"Hoopdeboop...", 
		"Hurf..."
	],

	finalStartingPhrase: "I should NOT have eaten that.",

	randomPhrases: [
		"What if this never goes away? What if I feel like this forever?",
		"'Twas brillig, and the slithy toves did gyre and gimble in the wabe...",
		"Misfiguring misfigfnl. Butterscotch woooooo...",
		"I'm a banana.",
		"I tried to bleepadoobapoop beep whoop.",
		"I want to go back to the blue room.",
		"You used to be about the music, but now you're all about the shrimp.",
		"My hands are huge, but they can touch anything but themselves.",
		"I liked their first album, before they got all whibbly and blue.",
		"Whoops, there goes Mr. Jelly.",
		"Over there I saw a horbleblorp.",
		"Meebleforp.",
		"Whizzlehizz.",
		"I wonder if hoopyhoobadoop?"
    ]
};