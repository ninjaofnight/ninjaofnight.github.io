var ghosts = ["Spirit", "Wraith", "Phantom", "Poltergeist", "Banshee", "Jinn", "Mare", "Revenant", "Shade", "Demon", "Yurei", "Oni"];

var starterEquipment = ['Spirit Box','Ghost Writing Book','Photo Camera','EMF Reader','Video Camera','UV Flashlight','Flashlight'];
var starterCount = [2,2,3,2,6,2,4];

var purchaseEquipment = ['Candle','Crucifix','Glow Stick','Head Mounted Camera','Infrared Light Sensor','Lighter','Motion Sensor','Parabolic Microphone','Salt Shaker','Sanity Pills','Smudge Sticks','Sound Sensor','Strong Flashlight','Thermometer','Tripod'];
var purchaseCount = [4,2,2,4,4,2,4,2,2,4,4,4,4,3,5];

var maps = ['Tanglewood Street House','Edgefield Street House','Ridgeview Road House','Grafton Farmhouse','Bleasdale Farmhouse','Brownstone High School','Prison','Asylum'];
var nouns = ["Fucker", "Hater", "Lover", "Killer", "Identifier", "Locator", "Ejaculator"];
//var exaggerated = ["Fucking", "Really", "Vehemently", "Strongly", "Aggressively", "Kinda"];
//var verbs = ["Hate", "Love", "Dislike", "Enjoy"];
var rare = ["Live, Laugh, Lovecraft","Laugh, Laugh, Cock"];
var moreLike = ['cum','phas-cock-phobia','me when','spazmophobia','cock','amogus','pop cat','special needs','trans rights are human rights'];

var desc = ['professional', 'pedantic','amateur','lazy','dead','tired','depressed','special needs','six foot two','nine inch','boosted','chad','virgin','incel','scared','afraid','terrified'];
var professions = ['ghost hunter','man who dies to ghosts','investigator','paranorman','ghost locator','man who wants to have sex with a ghost','league of legends player','van gremlin','ghostbuster'];
/*
	Templates
	
	"I " + get( "exaggerated" ) + " " + get( "verbs" ) + " " + get( "maps" );
	I really hate tanglewood street house
	
	"I " + get( "exaggerated" ) + " " + get( "verbs" ) + " the " + get( "starterEquipment" );
	I fucking love the spirit box
	
	"I " + get( "exaggerated" ) + " " + get( "verbs" ) + " the " + get( "purchaseEquipment" );
	I fucking love the Candle

	"I " + get( "exaggerated" ) + " " + get( "verbs" ) + " " + get( "ghosts" ) + "s";
	I vehemently dislike wraiths

	get( "ghosts" ) + " " + get( "nouns" );
	spirit fucker
	
	"Fuck " + get( "maps" );
	Fuck Tanglewood Street House

*/

function get( name ) {
	return window[name][Math.floor(Math.random() * window[name].length)];
}

function newLine( string ) {
	
	return "<p>" + string + "</p>";
	
}

function generateHeader() {
	
	const x = Math.floor(Math.random() * 100);
	switch (true) {
	case (x < 2):
		return "owo :3";
        break;
    case (x < 5):
		return get( "rare" );
        break;
    case (x < 20):
		return "Fuck " + get( "maps" );
        break;
	case (x < 35):
		return "Fuck your " + get( "equipment" );
        break;
	case (x < 80):
		return get( "desc" ) + " " + get( "professions" );
        break;
	case (x < 90):
		return get( "desc" ) + " " + get( "ghosts" );
        break;
	case (x < 101):
		return get( "ghosts" ) + " " + get( "nouns" );
        break;
    default:
        return "something broke";
        break;
	}
	
}

function generateChallenge() {
	/*
	Titles
	
Kill Me
Hoarder
Klepto
Say Cheese!
Oh Fuck
Sanic
The Ground Is Lava
Lightweight
Lights Out
Insane
Mental Health Day
DOOR STUCK
Too Cold
Tinnitus
F2P
Amish Haunting
Big Brother
Speedrun
Gaming
Isolated
Lucky Guess
Fire Hazard
Salty Surprise
Drug Deal
Incest
Herr Doktor
Movie Set
Who Needs Light
Mechanic
Best Friends
Bone Hurting Juice
ADHD
Tunnel Vision
Tidy
Bloody Mary
Hide And Seek
5th Grade Birthday Party
Bustin Makes Me Feel Good
Logan Paul
Radio Silence
What Ghost?
Radio Loudness
Haunted House
MTV Cribs
Heavyweight
Penny Pincher
P2W

	*/
	
	/*
	Details
	
Each player must say the ghost\'s name audibly with local chat during a hunt
Once the ghost\'s room is found, put every single item in there
You can\'t leave the house until you steal at least 15 objects
Get at least 3 pictures worth 3 stars
Fully break a crucifix
No sprinting (optionally unbind it)
No placing equipment in the house ( except for Ghost Writing Book )
You can only carry 2 items at a time
You can\'t turn on any lights in the house ( flashlights etc. allowed )
You can\'t leave until all players have a sanity below 25%
Players with a sanity below 50% can\'t leave the van
No closing doors or closets once they are opened
You must immediately leave the room when you see freezing breath
Locate the ghosts room ( or the general area ) with the Parabolic Microphone - small maps only
Use starter equipment only, unless specified by another rule
No using any technology outside of the starter equipment, unless specified by another rule
Purchase and set up every single camera and head mounted camera before doing anything else. Pick one person to stay in the van and monitor
Once you enter, no leaving the house until you identify the ghost ( tip: leave someone in the van for orbs )
Finish 2 objectives before looking for other evidence
You cannot hide in the same room as someone else during a hunt
Once you find 2 pieces of evidence, you are not allowed to get the third. Guess the ghost from behavior
No using the lighter while inside of the house
Place all salt as soon as the game starts, with a limit of one salt pile per room
All players must pick up a sanity pill bottle at the start of the game. Once you use the pills, you can put other equipment in that slot
Use all available smudge sticks at the start of the match to set the mood
Designate one player to be the Doktor. They must always carry sanity pills, a thermometer, and a flashlight. They have complete control over who gets prescribed pills, and you must be prescribed pills to use them
Purchase and set up every single camera and tripod at the start of the game. No moving tripods once they are placed
Players can only use the regular flashlights
Find a tool in the garage at the start of the game, and carry it around with you. If the car alarm goes off, you can put it back in the garage ( requires a garage )
Grab a stuffed animal at the start of the game, and carry it around with you. If you hear a child laugh, you can put it back ( requires a kid\'s room )
Once you find the chicken bone, you are not allowed to enter that room or pick it up ( If the bone is in a hallway, this rule is voided )
Swap out all of your equipment every time you enter the van
Once you identify the ghost\'s room, you are only allowed to have the light in that room on
Keep the site clean! When the ghost moves something, put it back where it came from. Leave no equipment behind!
Before leaving the site, each player must find a bathroom, turn off all lights/flashlights, chant bloody mary three times, and then wait in there for at least 5 seconds
Trigger at least 2 hunts
Trigger a hunt using only fortnite terminology
Chant \"Bustin\'\" whenever you are in the ghost\'s room
Get a picture of a dead body
No walkie-talkies allowed, only local chat ( this rule is void for discord users )
Hold conversation during hunts. Bonus points for taunting the ghost!
Only global chat allowed, no local chat ( this rule is void for discord users )
All players must move as a group. Leave nobody behind!
One player must guide the others around the site like a house tour, describing it like they live there
You cannot leave the site unless all of your equipment slots are full
Each player can bring $200 in equipment max, and players can only use the equipment they bring ( starter equipment price not included, and can be used by everyone )
Bring every single piece of equipment, and use as much of it as you can

	*/
	
	titleArray = 
	['Kill Me',
	'Hoarder',
	'Klepto',
	'Say Cheese!',
	'Oh Fuck',
	'Sanic',
	'The Ground Is Lava',
	'Lightweight',
	'Lights Out',
	'Insane',
	'Mental Health Day',
	'DOOR STUCK',
	'Too Cold',
	'Tinnitus',
	'F2P',
	'Amish Haunting',
	'Big Brother',
	'Speedrun',
	'Gaming',
	'Isolated',
	'Lucky Guess',
	'Fire Hazard',
	'Salty Surprise',
	'Drug Deal',
	'Incest',
	'Herr Doktor',
	'Movie Set',
	'Who Needs Light',
	'Mechanic',
	'Best Friends',
	'Bone Hurting Juice',
	'ADHD',
	'Tunnel Vision',
	'Tidy',
	'Bloody Mary',
	'Hide And Seek',
	'5th Grade Birthday Party',
	'Bustin Makes Me Feel Good',
	'Logan Paul',
	'Radio Silence',
	'What Ghost?',
	'Radio Loudness',
	'Haunted House',
	'MTV Cribs',
	'Heavyweight',
	'Penny Pincher',
	'P2W'
	];
	
	challengeArray = 
	['Each player must say the ghost\'s name audibly with local chat during a hunt',
	'Once the ghost\'s room is found, put every single item in there',
	'You can\'t leave the house until you steal at least 15 objects',
	'Get at least 3 pictures worth 3 stars',
	'Fully break a crucifix',
	'No sprinting (optionally unbind it)',
	'No placing equipment in the house ( except for Ghost Writing Book )',
	'You can only carry 2 items at a time',
	'You can\'t turn on any lights in the house ( flashlights etc. allowed )',
	'You can\'t leave until all players have a sanity below 25%',
	'Players with a sanity below 50% can\'t leave the van',
	'No closing doors or closets once they are opened',
	'You must immediately leave the room when you see freezing breath',
	'Locate the ghosts room ( or the general area ) with the Parabolic Microphone - small maps only',
	'Use starter equipment only, unless specified by another rule',
	'No using any technology outside of the starter equipment, unless specified by another rule',
	'Purchase and set up every single camera and head mounted camera before doing anything else. Pick one person to stay in the van and monitor',
	'Once you enter, no leaving the house until you identify the ghost ( tip: leave someone in the van for orbs )',
	'Finish 2 objectives before looking for other evidence',
	'You cannot hide in the same room as someone else during a hunt',
	'Once you find 2 pieces of evidence, you are not allowed to get the third. Guess the ghost from behavior',
	'No using the lighter while inside of the house',
	'Place all salt as soon as the game starts, with a limit of one salt pile per room',
	'All players must pick up a sanity pill bottle at the start of the game. Once you use the pills, you can put other equipment in that slot',
	'Use all available smudge sticks at the start of the match to set the mood',
	'Designate one player to be the Doktor. They must always carry sanity pills, a thermometer, and a flashlight. They have complete control over who gets prescribed pills, and you must be prescribed pills to use them',
	'Purchase and set up every single camera and tripod at the start of the game. No moving tripods once they are placed',
	'Players can only use the regular flashlights',
	'Find a tool in the garage at the start of the game, and carry it around with you. If the car alarm goes off, you can put it back in the garage ( requires a garage )',
	'Grab a stuffed animal at the start of the game, and carry it around with you. If you hear a child laugh, you can put it back ( requires a kid\'s room )',
	'Once you find the chicken bone, you are not allowed to enter that room or pick it up ( If the bone is in a hallway, this rule is voided )',
	'Swap out all of your equipment every time you enter the van',
	'Once you identify the ghost\'s room, you are only allowed to have the light in that room on',
	'Keep the site clean! When the ghost moves something, put it back where it came from. Leave no equipment behind!',
	'Before leaving the site, each player must find a bathroom, turn off all lights/flashlights, chant bloody mary three times, and then wait in there for at least 5 seconds',
	'Trigger at least 2 hunts',
	'Trigger a hunt using only fortnite terminology',
	'Chant \"Bustin\'\" whenever you are in the ghost\'s room',
	'Get a picture of a dead body',
	'No walkie-talkies allowed, only local chat ( this rule is void for discord users )',
	'Hold conversation during hunts. Bonus points for taunting the ghost!',
	'Only global chat allowed, no local chat ( this rule is void for discord users )',
	'All players must move as a group. Leave nobody behind!',
	'One player must guide the others around the site like a house tour, describing it like they live there',
	'You cannot leave the site unless all of your equipment slots are full',
	'Each player can bring $200 in equipment max, and players can only use the equipment they bring ( starter equipment price not included, and can be used by everyone )',
	'Bring every single piece of equipment, and use as much of it as you can'
	];
	
	tempChallenges = [];
	tempTitles = [];
	
	
	challenge = "";
	
	max = 3;
	n = Math.floor(Math.random() * max ) + 1;
	
	var i;
	for (i = 0; i < n; i++) {
		
		challenge += "<p>";
		
		challenge += "<input type='checkbox' id='num" + i + "'>";
		challenge += "<label for='num" + i + "'>";
		
		
		choice = Math.floor(Math.random() * challengeArray.length );
		
		// Weighted random
		if( choice > Math.floor( challengeArray.length / 2 ) ){
			choice = Math.floor(Math.random() * challengeArray.length );
			
			if( choice > Math.floor( challengeArray.length / 2 ) ){
				
				choice = Math.floor(Math.random() * challengeArray.length );

			}
			
		}
		
		
		
		challenge += "<b> " + titleArray[choice] + "</b> - ";
		challenge += challengeArray[choice];
		
		tempTitles.push( titleArray.splice(choice, 1) );
		tempChallenges.push( challengeArray.splice(choice, 1) );
		
		challenge += "</label>";
		
		challenge += "</p>";
	}
	
	for (i = 0; i < n; i++) {
		
		tempChallenges.push( challengeArray.pop() );
		tempTitles.push( titleArray.pop() );
		
	}
	
	//challengeArray = tempChallengeArray;
	//titleArray = tempTitleArray;
	
	document.getElementById("body").innerHTML = challenge;
	
}

	
