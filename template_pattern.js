class Game {
	constructor() {
		
	}
	
	initialize() {
		
	}
	
	startPlay() {
		
	}
	
	endPlay() {
		
	}
	
	play() {
		this.initialize();
		this.startPlay();
		this.endPlay();
	}
}

class Cricket extends Game {
	constructor() {
		super();
	}
	
	endPlay() {
		console.log('Cricket Game Finished!');
	}
	
	initialize() {
		console.log('Cricket Game Initialized!');
	}
	
	startPlay() {
		console.log('Cricket Game Started. Enjoy the game!');
	}
}

const cricket_game = new Cricket();
cricket_game.play();