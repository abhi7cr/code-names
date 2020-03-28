//word list
const word_dict = [
	'sea',
	'pole',
	'water',
	'king',
	'red',
	'tin',
	'ball',
	'argentina',
	'nail',
	'yolk',
	'pen',
	'prince',
	'mice',
	'rainbow',
	'light',
	'quite',
	'inspect',
	'jewel',
	'poland',
	'ostrich',
	'kill',
	'movie',
	'pencil',
	'poll',
	'open',
	'yellow',
	'fish',
	'white',
	'academy',
	'field',
	'brown',
	'juice',
	'hollow',
	'lips',
	'prudent',
	'jinx',
	'africa',
	'mice',
	'wales',
	'car',
	'bull',
	'green',
	'call',
	'feet',
	'ink',
	'blue',
	'salt',
	'ginger',
	'yugoslavia',
	'neon',
	'root',
	'kin',
	'parabola',
	'mole',
	'vice',
	'jealous',
	'utopia',
	'orange',
	'zoo',
	'garlic',
	'photo',
	'phone',
	'pillow',
	'bag',
	'school',
	'black',
	'keyboard',
	'letters',
	'speaker',
	'pod',
	'bedsheet',
	'wall',
	'table',
	'charger',
	'suitcase',
	'zip',
	'pant',
	'shoe',
	'show',
	'back',
	'milk',
	'pensive',
	'tablet',
	'organ',
	'play',
	'glass',
	'cover',
	'wind',
	'chile',
	'proud',
	'pace',
	'cinnamon',
	'blinder',
	'mongolia',
	'bottle',
	'copper',
	'canada',
	'desert',
	'pale',
	'cat',
	'dog',
	'lion',
	'palace',
	'meteor',
	'low',
	'sky',
	'juice',
	'apple',
	'pen',
	'yard',
	'black',
	'queen',
	'brick',
	'heir',
	'forest',
	'orange',
	'can',
	'peace',
	'under',
	'world',
	'planet',
	'vintage',
	'minister',
	'saw',
	'detective',
	'cold',
	'pin',
	'leaf',
	'rubber',
	'china',
	'indigo',
	'book',
	'block',
	'dream',
	'hole',
	'container',
	'queer',
	'casino',
	'cake',
	'laptop',
	'coconut',
	'bird',
	'window',
	'mountain',
	'couch',
	'sponge',
	'mat',
	'norway',
	'waterfall',
	'hair',
	'meat',
	'india',
	'apple',
	'screen',
	'boomerang',
	'wand',
	'modem',
	'apron',
	'chopper',
	'autopilot',
	'sabotage',
	'destruction',
	'terminal',
	'flower',
	'canopy',
	'chandelier',
	'cable',
	'card',
	'pause',
	'avocado',
	'cone',
	'stem',
	'archipelago',
	'island',
	'new zeland',
	'biscuit',
	'gravy',
	'stop',
	'estuary',
	'plain',
	'cup',
	'cloud',
	'pot',
	'witch',
	'sauna',
	'devil',
	'eye',
	'dreamcatcher',
	'desk',
	'nigeria',
	'socket',
	'iron',
	'gym',
	'rod',
	'weight',
	'goal',
	'football',
	'wave',
	'tissue',
	'rope',
	'knife',
	'fox',
	'spoon',
	'fork',
	'line',
	'close',
	'follow',
	'cushion',
	'square',
	'rectangle',
	'round',
	'circle',
	'gray',
	'hound',
	'pack',
	'hungary',
	'alps',
	'peak',
	'cast',
	'shy',
	'scream',
	'volatile',
	'paris',
	'tower',
	'castle',
	'smoke',
	'fire',
	'ash',
	'pane',
	'frugal',
	'finland',
	'axe',
	'dark',
	'portugal',
	'rich',
	'rock',
	'crane',
	'judge',
	'doctor',
	'patient',
	'virus',
	'frog',
	'door',
	'wick',
	'button',
	'shirt',
	'candle',
	'sway',
	'soldier',
	'police',
	'gun',
	'austria',
	'music',
	'basket',
	'joker',
	'nurse',
	'boy',
	'fellow',
	'hero',
	'film',
	'himalayas',
	'cranberry',
	'question',
	'jar',
	'chime',
	'loop',
	'vinegar',
	'surface',
	'leech',
	'monster',
	'widow',
	'assembly',
	'left',
	'room',
	'inkling',
	'telescope',
	'radius',
	'glow',
	'sun',
	'star',
	'vaccine',
	'glue',
	'night',
	'day',
	'dusk',
	'match',
	'wait',
	'clock',
	'speed',
	'attack',
	'pistol',
	'hunt',
	'meander',
	'lake',
	'victory',
	'pair',
	'sort',
	'order',
	'twinkle',
	'pedestal',
	'flag',
	'march',
	'television',
	'puncture',
	'wound',
	'tide',
	'sin',
	'host',
	'pan',
	'headphones',
	'rubber',
	'password',
	'signal',
	'hide',
	'army',
	'boulder',
	'sunset',
	'abyss',
	'maple',
	'ski',
	'snow',
	'rain',
	'thunder',
	'oasis',
	'bone',
	'bear',
	'snake',
	'gift',
	'parcel',
	'thread',
	'cash',
	'money'
]


let blue = new Set()
let red = new Set()
let neutral = new Set()
let black = new Set()
let words = []
let wordTeamDict = {}
let currentTeam = true // blue
const BLUE = 'blue'
const RED = 'red'
const NEUTRAL = 'neutral'
const BLACK = 'black'
let spyMasterView
let randomNum
let currentTeamEnum = {
	[true]: BLUE,
	[false]: RED
} 
let TEAM_STYLE = {
	BLUE,
	RED,
	NEUTRAL,
	BLACK
}
let TEAM_NAME = {
	BLUE: 'B',
	RED: 'R',
	NEUTRAL: 'N',
	BLACK: 'BK'
}
let showWords = true
let elements = {}

function loadGame (blueStarts = true) {
    words = []
    const count = 25
	let arr = new Array(count)
	spyMasterView = JSON.parse(localStorage.getItem('spyMasterView'))
	if (spyMasterView) {
		document.querySelector('.spymaster').style.display = 'none'
		document.querySelector('.info').style.display = 'none'
		const cachedItems = localStorage.getItem('arr')
		arr = JSON.parse(cachedItems)
		wordTeamDict = JSON.parse(localStorage.getItem('wordTeamDict'))
		words = JSON.parse(localStorage.getItem('words'))
		localStorage.clear()
	}
	else {
			{
				let min = 0
				let max = word_dict.length - 1
				while (min < count) {
					let randomIndex =  Math.ceil(Math.random() * (max - min)) + min //0-24
					let temp = word_dict[randomIndex]
					word_dict[randomIndex] = word_dict[min]
					word_dict[min] = temp
					words.push(temp)
					min++
				}
			}
		let bLen = blueStarts ? 9 : 8
		let rLen = blueStarts ? 8 : 9
		let nLen = 7
		let b = new Array(bLen).fill(TEAM_NAME.BLUE)
		let r = new Array(rLen).fill(TEAM_NAME.RED)
		let n = new Array(nLen).fill(TEAM_NAME.NEUTRAL)
		arr = [...b,...r,...n, TEAM_NAME.BLACK]
		let min = 0
		let max = count-1
		while (min < count) {
				let randomIndex =  Math.ceil(Math.random() * (max - min)) + min //0-24
				let temp = arr[randomIndex]
				arr[randomIndex] = arr[min]
				arr[min] = temp
				min++
		}
		arr.forEach((a, i) => {
			const w = words[i]
			switch(a) {
				case TEAM_NAME.BLUE:
					blue.add(w)
					wordTeamDict[w] = [TEAM_STYLE.BLUE, blue]
					break
				case TEAM_NAME.RED:
					red.add(w)
					wordTeamDict[w] = [TEAM_STYLE.RED, red]
					break
				case TEAM_NAME.NEUTRAL:
					neutral.add(w)
					wordTeamDict[w] = [TEAM_STYLE.NEUTRAL, neutral]
					break
				case TEAM_NAME.BLACK:
					black.add(w)
					wordTeamDict[w] = [TEAM_STYLE.BLACK, black]
					break
			}
		})
		// cache in local storage
		localStorage.setItem('words', JSON.stringify(words))
		localStorage.setItem('arr', JSON.stringify(arr))
		localStorage.setItem('blue', JSON.stringify(blue))
		localStorage.setItem('red', JSON.stringify(red))
		localStorage.setItem('neutral', JSON.stringify(neutral))
		localStorage.setItem('black', JSON.stringify(black))
		localStorage.setItem('wordTeamDict', JSON.stringify(wordTeamDict))
	}

	drawGrid(words)
	setCurrentTeam()
}

function drawGrid (words) {
	const codeNamesDiv = document.querySelector('.codenames')
	Array(...codeNamesDiv.children).forEach(c => codeNamesDiv.removeChild(c))
    let fragment = document.createDocumentFragment()
    words.forEach(w => {
        let wordDiv = document.createElement('div')
				wordDiv.classList.add('word')
				if (!spyMasterView) {
					wordDiv.addEventListener('click', function (e) {
							let [teamBelongingTo, team] = wordTeamDict[w]
							wordDiv.classList.add(teamBelongingTo)
							team.delete(w)
							if (teamBelongingTo === 'black') {
								alert(currentTeam ? 'Team blue has lost the game' : 'Team red has lost the game')
								loadGame()
								return
							}
							if (team.size === 0) {
									alert(`Team ${teamBelongingTo} has won the game! :)`)
									loadGame()
							}
							if (teamBelongingTo === TEAM_STYLE.NEUTRAL || teamBelongingTo != currentTeamEnum[currentTeam]) {
								const shakeAnimation = [
									{transform: 'rotate(2deg)'},
									{transform: 'rotate(-2deg)'},
									{transform: 'rotate(1deg)'},
									{transform: 'rotate(-1deg)'}
								]
								wordDiv.animate(shakeAnimation, {
									duration: 1000,
									easing: 'ease-in-out'
								})
								endTurn()
							}
							
					})
				}
				wordDiv.innerText = w.toUpperCase()
				elements[w] = wordDiv
        fragment.appendChild(wordDiv)
    })
		codeNamesDiv.appendChild(fragment)
		if (spyMasterView) {
			toggleSpyMaster()
		}
}

function loadSpyMasterView (_) {
	localStorage.setItem('spyMasterView', JSON.stringify(true))
	window.open(document.location.href, '_blank')
}
function toggleSpyMaster (_) {
	words.forEach(w => {
		let [teamBelongingTo, _] = wordTeamDict[w]
		let el = elements[w]
		el.classList.add(teamBelongingTo)
	})
	localStorage.setItem('spyMasterView', JSON.stringify(false))
}

function endTurn (_) {
	currentTeam = !currentTeam
	setCurrentTeam()
}

function setCurrentTeam () {
	const currentTeamEl = document.querySelector('.currentTeam')
	const name = currentTeamEnum[currentTeam]
	currentTeamEl.innerText = name
	if (currentTeamEl.classList.length > 1 ) currentTeamEl.classList.remove(currentTeamEnum[!currentTeam])
	currentTeamEl.classList.add(name)
}

document.querySelector('.endTurn').addEventListener('click', endTurn)
loadGame()