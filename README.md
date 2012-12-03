Simulates the effect of the Purple Junk buff in the game Glitch, on any 
website. Available as a standalone script or a bookmarklet. 

# Usage

The script requires jQuery, but is not constructed as a jQuery plugin. To 
begin, download a copy of the script and include both that and jQuery in 
your page. 

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="meebleforp.min.js"></script>

Then call the `meebleforp.start` function, like so: 

	meebleforp.start(2 * 60 * 1000);

The script exposes a single `meebleforp` object, which contains all the 
configuration options and methods. 

## Methods

### `meebleforp.start (duration)`

	// Two minutes of purple madness! 
	meebleforp.start(2 * 60 * 1000);

Begins the purple madness, which will end after `duration` milliseconds. 

**Default:** None - the purple madness will last forever! or until you use 
`meebleflop.stop()`. 

### `meebleforp.stop()`

Stops the purple madness. 

## Configuration 

### `meebleforp.purpleFlashInterval`

The length of time between each flash in milliseconds. Don't set this below 
1.5 seconds.

**Default:** 6000 

### `meebleforp.textStyle` and `meebleforp.overlayStyle`

Objects containing the styles used for the text and purple overlay 
respectively. For instance, if you want to change the color of the purple 
overlay, use 

    meebleforp.overlayStyle.backgroundColor = rgba(0, 0, 0, 0.6);

**Defaults:** See https://github.com/ZhangYiJiang/meebleforp.js/blob/gh-pages/meebleforp.js#L134


