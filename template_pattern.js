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

class Football extends Game {
	constructor() {
		super();
	}
	
	endPlay() {
		console.log('Football Game Finished!');
	}
	
	initialize() {
		console.log('Football Game Initialized!');
	}
	
	startPlay() {
		console.log('Football Game Started. Enjoy the game!');
	}
}

const cricket_game = new Cricket();
cricket_game.play();
console.log('');
const football_game = new Football();
football_game.play();