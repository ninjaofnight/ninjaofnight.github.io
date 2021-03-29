var ghosts = ["Spirit", "Wraith", "Phantom", "Poltergeist", "Banshee", "Jinn", "Mare", "Revenant", "Shade", "Demon", "Yurei", "Oni"];

var starterEquipment = ['Spirit Box','Ghost Writing Book','Photo Camera','EMF Reader','Video Camera','UV Flashlight','Flashlight'];
var starterCount = [2,2,3,2,6,2,4];

var purchaseEquipment = ['Candle','Crucifix','Glow Stick','Head Mounted Camera','Infrared Light Sensor','Lighter','Motion Sensor','Parabolic Microphone','Salt Shaker','Sanity Pills','Smudge Sticks','Sound Sensor','Strong Flashlight','Thermometer','Tripod'];
var purchaseCount = [4,2,2,4,4,2,4,2,2,4,4,4,4,3,5];

var maps = ['Tanglewood Street House','Edgefield Street House','Ridgeview Road House','Grafton Farmhouse','Bleasdale Farmhouse','Brownstone High School','Prison','Asylum'];
var nouns = ["Fucker", "Hater", "Lover", "Killer", "Identifier", "Sucker", "Ejaculator"];
var exaggerated = ["Fucking", "Really", "Vehemently", "Strongly", "Aggressively", "Kinda"]
var verbs = ["Hate", "Love", "Dislike", "Enjoy"]
var rare = ["Live, Laugh, Lovecraftian","Laugh, Laugh, Cock"];
var moreLike = ['cum','phas-cock-phobia','me when','spazphobia'];

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
    case (x < 5):
		return get( "rare" );
        break;
    case (x < 10):
		return get( "ghosts" ) + " " + get( "nouns" );
        break;
	case (x < 20):
		return "Fuck " + get( "maps" );
		break;
    case (x < 30):
		return "I " + get( "exaggerated" ) + " " + get( "verbs" ) + " " + get( "maps" );
        break;
	case (x < 35):
		return "I " + get( "verbs" ) + " " + get( "maps" );
        break;
	case (x < 40):
		return "I " + get( "exaggerated" ) + " " + get( "verbs" ) + " the " + get( "starterEquipment" );
        break;
	case (x < 45):
		return "I " + get( "verbs" ) + " the " + get( "starterEquipment" );
        break;
	case (x < 50):
		return "I " + get( "exaggerated" ) + " " + get( "verbs" ) + " the " + get( "purchaseEquipment" );
        break;
	case (x < 55):
		return "I " + get( "verbs" ) + " the " + get( "purchaseEquipment" );
        break;
	case (x < 60):
		return "I " + get( "exaggerated" ) + " " + get( "verbs" ) + " " + get( "ghosts" ) + "s";
        break;
	case (x < 65):
		return "I " + get( "verbs" ) + " " + get( "ghosts" ) + "s";
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
	Monophonic
	DOOR STUCK
	Too Cold
	Tinnitus
	Little Baby
	Amish Haunting
	Big Brother
	Speedrun
	Gaming
	Isolated
	
	*/
	
	
	
	
	/*
	Details
	
	Say the ghost\'s name audibly with local chat during a hunt
	Once the ghost\'s room is found, put every single item in there
	You can\'t leave the house until you steal at least 15 objects
	3 star picture of the ghost
	Fully break a crucifix
	No sprinting (optionally unbind it)
	No placing equipment in the house ( except for Ghost Writing Book )
	You can only carry 2 items at a time
	You can\'t turn on any lights in the house ( flashlights etc. allowed )
	You can\'t leave until all players have a sanity below 25%
	Players with a sanity below 50% can\'t leave the van
	All players must set audio to mono
	No closing doors or closets once they are opened
	You must immediately leave the room when you see freezing breath
	Locate the ghosts room with the Parabolic Microphone ( small maps only )
	Use starter equipment only, unless specified by another rule
	No using any technology outside of the starter equipment, unless specified by another rule
	Purchase and set up every single camera and head mounted camera before doing anything else. Pick one person to day in the van and monitor
	Once you enter, no leaving the house until you identify the ghost ( tip: leave someone in the van for orbs )
	Finish 2 objectives before looking for other evidence
	You cannot hide in the same room as someone else during a hunt
	
	*/
	
	tempChallengeArray = ["Say the ghost's name audibly with local chat during a hunt","Once the ghost's room is found, put every single item in there","You can't leave the house until you steal at least 10 objects","3 star picture of the ghost","Fully break a crucifix","No sprinting (optionally unbind it)","No placing equipment in the house ( except for Ghost Writing Book )","You can only carry 2 items at a time","You can't turn on any lights in the house ( flashlights etc. allowed )","You can't leave until all players have a sanity below 25%","Players with a sanity below 50% can\'t leave the van","All players must set audio to mono","No closing doors or closets once they are opened","You must immediately leave the room when you see freezing breath"];
	tempTitleArray = ['Kill Me','Hoarder','Klepto','Say Cheese!','Oh Fuck','Sanic','The Ground Is Lava','Lightweight','Lights Out','Insane','Mental Health Day','Monophonic','DOOR STUCK','Too Cold'];
	
	challengeArray = ["Say the ghost's name audibly with local chat during a hunt","Once the ghost's room is found, put every single item in there","You can't leave the house until you steal at least 10 objects","3 star picture of the ghost","Fully break a crucifix","No sprinting (optionally unbind it)","No placing equipment in the house ( except for Ghost Writing Book )","You can only carry 2 items at a time","You can't turn on any lights in the house ( flashlights etc. allowed )","You can't leave until all players have a sanity below 25%","Players with a sanity below 50% can\'t leave the van","All players must set audio to mono","No closing doors or closets once they are opened","You must immediately leave the room when you see freezing breath"];
	titleArray = ['Kill Me','Hoarder','Klepto','Say Cheese!','Oh Fuck','Sanic','The Ground Is Lava','Lightweight','Lights Out','Insane','Mental Health Day','Monophonic','DOOR STUCK','Too Cold'];
	
	
	challenge = "";
	
	max = 3;
	n = Math.floor(Math.random() * max ) + 1;
	
	var i;
	for (i = 0; i < n; i++) {
		
		challenge += "<p>";
		
		challenge += "<input type='checkbox' id='num" + i + "'>";
		challenge += "<label for='num" + i + "'>";
		
		
		choice = Math.floor(Math.random() * challengeArray.length );
		challenge += "<b> " + titleArray[choice] + "</b> - ";
		challenge += challengeArray[choice];
		
		titleArray.splice(choice, 1);
		challengeArray.splice(choice, 1);
		
		challenge += "</label>";
		
		challenge += "</p>";
	}
	
	challengeArray = tempChallengeArray;
	titleArray = tempTitleArray;
	
	$("#body").html( challenge );
	
}

