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
	'money',
	'holocaust',
	'germany',
	'jews',
	'war',
	'rebel',
	'protest',
	'anarchy',


]    

let blue = {}
let red = {}
let neutral = {}
let black = {}

const RED_COLOR = '#eb4934'
const BLUE_COLOR = '#34a5eb'
const BLUE = 'blue'
const RED = 'red'
const NEUTRAL = 'neutral'
const BLACK = 'black'
let spyMasterView = false

const BLUE_TEAM = 1
const RED_TEAM = 0
let currentTeamEnum = {
	[BLUE_TEAM]: BLUE,
	[RED_TEAM]: RED
} 
let currentTeam = BLUE_TEAM
let players = []
let player
const TEAM_STYLE = {
	BLUE,
	RED,
	NEUTRAL,
	BLACK
}
const TEAM_NAME = {
	BLUE: 'B',
	RED: 'R',
	NEUTRAL: 'N',
	BLACK: 'BK'
}

let showWords = true
let elements = {}
const base62 = 'abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
const base62Length = base62.length

let teams = {
	[TEAM_STYLE.BLUE]: {},
	[TEAM_STYLE.RED]: {},
	[TEAM_STYLE.BLACK]: {},
	[TEAM_STYLE.NEUTRAL]: {}
}

const GAME_STATES = {
  JOINING: 0,
  PLAYING: 1,
  STOPPED: 2,
  WAITING_FOR_CLUE: 3,
  CLUE_GIVEN: 4,
  DONE: 5
}

let name
let words = []
let wordTeamDict = {}
let gameLoaded = false
// Check to see if its an invited session
let session_id = window.location.hash
let session
let clue
let isSpyMaster = false
let isAdmin = false
let timerEl = null
let timerGuessEl = null
let spyMasters = []
let admins = []
let currentState

function validateName (className) {
  const textFromInput = document.querySelector('.name').value
  if (textFromInput && textFromInput.trim()) {
	if (className === 'start') {
		name = textFromInput
		if (session_id) className = 'join'
	}
	else if (className === 'giveClue') clue = textFromInput
	document.querySelector(`.${className}`).disabled = false
  }
}

// Game states:
function start () {
	if (session_id) {
	  console.warn('Already in a session. Please stop it to start a new one.')
	  return
	}
	session_id = base62[Math.floor(Math.random() * base62Length)] + 
					base62[Math.floor(Math.random() * base62Length)] + 
					base62[Math.floor(Math.random() * base62Length)] + 
					base62[Math.floor(Math.random() * base62Length)] + 
					base62[Math.floor(Math.random() * base62Length)]

	window.location.replace(window.location.href + '#' + session_id)

	db.collection("sessions").doc(session_id).set({
	  owner: name,
	  players: [{name, team: BLUE_TEAM}],
	  words,
	  wordTeamDict,
	  teams,
	  spyMasters: [],
	  admins: [],
	  winner: null,
	  clue: '',
	  currentTeam: BLUE_TEAM,
	  status: GAME_STATES.JOINING
	}).then(function() {
		console.log("started new session")
		document.querySelector('.play').style.display = 'block'
		listenForUpdates()
	})
	.catch(function(err) {
		console.error("Error starting new session", error)
	})
}

function join () {
	let blueTeamCount = players.filter(p => !!p.team).length
	let redTeamCount = players.filter(p => !p.team).length
	db.collection("sessions").doc(session_id).set({
		players: [...players, {name, team: blueTeamCount > redTeamCount ? 0 : 1 }],
	  }, {merge: true}).then(function(_) {
		  console.log("started new session")
	  })
	  .catch(function(err) {
		  console.error("Error starting new session", err)
	  })
}

function play () {
	let spyMasters = chooseSpyMasters()
	let admins = chooseAdmins(spyMasters)
	db.collection("sessions").doc(session_id).set({
		spyMasters,
		admins,
		status: GAME_STATES.WAITING_FOR_CLUE
	  },{ merge: true }).then(function(docRef) {
		  console.log("playing new session")
	  })
	  .catch(function(err) {
		  console.error("Error starting new session", err)
	  })
}

function giveClue () {
	if (player.team !== currentTeam) return
	db.collection("sessions").doc(session_id).set({
	  clue,
	  status: GAME_STATES.CLUE_GIVEN
	}, {merge: true}).then(function (_) {
	}).catch(function(err){
		console.error("Error giving new clue", err)
	})
}

// Set up board
function loadGame (blueStarts = true) {
	if (!words.length) {
		const count = 25
		let arr = new Array(count)
		if (!setupSpyMasterViewIfRequired()) {
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
						teams[TEAM_STYLE.BLUE][w] = 1
						wordTeamDict[w] = TEAM_STYLE.BLUE
						break
					case TEAM_NAME.RED:
						teams[TEAM_STYLE.RED][w] = 1
						wordTeamDict[w] = TEAM_STYLE.RED
						break
					case TEAM_NAME.NEUTRAL:
						teams[TEAM_STYLE.NEUTRAL][w] = 1
						wordTeamDict[w] = TEAM_STYLE.NEUTRAL
						break
					case TEAM_NAME.BLACK:
						teams[TEAM_STYLE.BLACK][w] = 1
						wordTeamDict[w] = TEAM_STYLE.BLACK
						break
				}
			})
		}
	}

	// cache in local storage
	localStorage.setItem('words', JSON.stringify(words))
	localStorage.setItem('wordTeamDict', JSON.stringify(wordTeamDict))

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
		wordDiv.id = w
		if (!spyMasterView) {
			wordDiv.addEventListener('click', function (e) {
				if (!isAdmin || player.team !== currentTeam) {
					return
				}
				let teamBelongingTo = wordTeamDict[w]
				// delete teams[teamBelongingTo][w]
				let objToUpdate = {}
				const cloneTeams = Object.assign({}, teams)
				const cloneTeamBelongingTo = Object.assign({}, cloneTeams[teamBelongingTo])
				delete cloneTeamBelongingTo[w]
				cloneTeams[teamBelongingTo] = cloneTeamBelongingTo
				objToUpdate.teams = cloneTeams
				let winner
				if (teamBelongingTo === BLACK) {
					// alert(currentTeam ? 'Team blue has lost the game' : 'Team red has lost the game')
					winner = !currentTeam
				}
				if (team.size === 0) {
					winner = currentTeam
					// alert(`Team ${teamBelongingTo} has won the game! :)`)
				}
				if (winner) {
				  objToUpdate.winner = winner
				  objToUpdate.status = GAME_STATES.DONE
				}
				db.collection("sessions").doc(session_id).set(objToUpdate, {merge: true}).then(function(_){
					if (teamBelongingTo === TEAM_STYLE.NEUTRAL || teamBelongingTo != currentTeamEnum[currentTeam]) {
						endTurn()
					}
				}).catch(function (err){
				})
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
	gameLoaded = true
}

function chooseSpyMasters () {
	let blueTeam = players.filter(p => !!p.team)
	let redTeam = players.filter(p => !p.team)
	let blueSpyMaster = blueTeam[Math.floor(Math.random() * blueTeam.length)]
	let redSpyMaster = redTeam[Math.floor(Math.random() * redTeam.length)]
	return [blueSpyMaster, redSpyMaster]
}

function chooseAdmins (spyMasters) {
	const nonSpyMasters = players.filter(p => !spyMasters.some(s => s.name === p.name))
	let blueTeam = nonSpyMasters.filter(p => !!p.team)
	let redTeam = nonSpyMasters.filter(p => !p.team)
	let blueAdmin = blueTeam[Math.floor(Math.random() * blueTeam.length)]
	let redAdmin = redTeam[Math.floor(Math.random() * redTeam.length)]
	return [blueAdmin, redAdmin]
}

function loadSpyMasterView (_) {
	// localStorage.setItem('spyMasterView', JSON.stringify(true))
	// localStorage.setItem('spyMasterName', name)
	// window.open(document.location.href, '_blank')
	toggleSpyMaster()
}
function toggleSpyMaster (_) {
	spyMasterView = !spyMasterView
	words.forEach(w => {
		let teamBelongingTo = wordTeamDict[w]
		let el = elements[w]
		let teamAssociatedWithTheWord = wordTeamDict[w]
		let wordRevealed = !teams[teamAssociatedWithTheWord][w]
		if (spyMasterView && !wordRevealed)
		  el.classList.add(teamBelongingTo)
		else if (!spyMasterView && !wordRevealed) {
		  el.classList.remove(teamBelongingTo)
		}
	})
}

function endTurn (_) {
	currentTeam = !currentTeam
	document.querySelector(".clue").style.disabled = true
	db.collection("sessions").doc(session_id).set({
	  currentTeam,
	  status: GAME_STATES.WAITING_FOR_CLUE
	}, {merge: true})
}

function setCurrentTeam () {
	const currentTeamEl = document.querySelector('.currentTeam')
	const name = currentTeamEnum[currentTeam]
	currentTeamEl.innerText = name
	if (currentTeamEl.classList.length > 1 ) currentTeamEl.classList.remove(currentTeamEnum[!currentTeam])
	currentTeamEl.classList.add(name)
}

function startNewTimerForClueGiver () {
	const inviteEl = document.querySelector('.invite')
	if (timerEl !== null) inviteEl.removeChild(timerEl)
	const template = document.getElementById('x-timer')
	timerEl = template.content.cloneNode(true)
	inviteEl.appendChild(timerEl)
}

function startNewTimerForGuessers () {
	const inviteEl = document.querySelector('.invite')
	if (timerGuessEl !== null) inviteEl.removeChild(timerGuessEl)
	const template = document.getElementById('x-timer')
	timerGuessEl = template.content.cloneNode(true)
	inviteEl.appendChild(timerGuessEl)
}

document.querySelector('.endTurn').addEventListener('click', endTurn)

function onSnapshotCb (doc) {
	if (!name) {
		document.querySelector('.join').style.display = 'block'
	}

	session = doc.data()
	currentState = session.status

	if (currentState === GAME_STATES.DONE) {
		alert(`Team ${currentTeamEnum[session.winner]} has won! :)`)
		return
	}
	let updated_players = session.players
	if (!updated_players.some(p => p.name === name)) {
		// Check if the game has already begun
		if (currentState === GAME_STATES.WAITING_FOR_CLUE) {
			console.warn('The game is already in progress. Please wait till the next session is open')
			return
		}
	}
	currentTeam = session.currentTeam
	setCurrentTeam()

	player = updated_players.find(p => p.name === name)
	if (player) {
		const welcomeMsg = document.querySelector('.welcome')
		if (!welcomeMsg.innerText) {
			welcomeMsg.innerText = `Welcome ${name}. You are part of team ${currentTeamEnum[player.team]}`
		}
	}
	if (!spyMasters.length) {
		spyMasters = session.spyMasters
		isSpyMaster = spyMasters.find(s => s.name === name) !== undefined
	}

	clue = session.clue

	if (isSpyMaster) {
		document.querySelector('.spymaster').style.display = 'block'
		document.querySelector('.show-clue').style.display = 'none'
		document.querySelector('.spymasterContainer').style.display = 'block'
	} else {
	document.querySelector('.show-clue').innerText = clue
	}

	if (!admins.length) {
	admins = session.admins
	isAdmin = admins.some(a => a.name === name)
	}

	if (!words.length) {
		words = session.words
		wordTeamDict = session.wordTeamDict
	}

	teams = session.teams
	words.forEach(w => {
		const wordDiv = document.getElementById(w)
		const teamAssociatedWithTheWord = wordTeamDict[w]
		if (!teams[teamAssociatedWithTheWord][w] && !wordDiv.classList.contains(teamAssociatedWithTheWord)) wordDiv.classList.add(teamAssociatedWithTheWord)
	})

	const playersList = document.querySelector('.players')
	new Array(...playersList.children).forEach(c => playersList.removeChild(c))
	updated_players.forEach(p => {
		const li = document.createElement('li')
		li.innerText = 
			`${p.name} ${admins.some(a => a.name === p.name) ? `(Admin)` : ``} ${spyMasters.some(s => s.name === p.name) ? `(Spymaster)`: ``}`
		li.style.color = p.team ? BLUE_COLOR : RED_COLOR
		playersList.appendChild(li)
		})
	players = updated_players

	if (currentState === GAME_STATES.WAITING_FOR_CLUE) startNewTimerForClueGiver()
	if (currentState === GAME_STATES.CLUE_GIVEN) startNewTimerForGuessers()

	if (!gameLoaded) loadGame()
}

function listenForUpdates () {
	db.collection("sessions").doc(session_id).onSnapshot(onSnapshotCb)
}

function setupSpyMasterViewIfRequired () {
	spyMasterView = JSON.parse(localStorage.getItem('spyMasterView'))
	if (spyMasterView) {
		document.querySelector('.spymaster').style.display = 'none'
		document.querySelector('.info').style.display = 'none'
		wordTeamDict = JSON.parse(localStorage.getItem('wordTeamDict'))
		words = JSON.parse(localStorage.getItem('words'))
		localStorage.clear()
		return true
	}
	return false
}

if (session_id) {
	session_id = session_id.slice(1)
	if(!setupSpyMasterViewIfRequired()) listenForUpdates()
} else {
  localStorage.clear()
  document.querySelector('.inviteInfo').style.display = 'block'
  document.querySelector('.start').style.display = 'block'
  loadGame()
}

/**
 * Custom timer component
 * attributes: time (seconds), on-timer-end callback function
 */
class Timer extends HTMLElement {
	constructor () {
		super()
		const shadow = this.attachShadow({mode: 'open'})
		let time = this.getAttribute('time')
		this.onTimerEndCallback = this.getAttribute('on-timer-end')
		const label = document.createElement('label')
		const style = document.createElement('style')
		style.textContent = `
		 label {
			 padding: 1rem;
		 }
		`
		const timer_event = new CustomEvent('timer')
		function updateTime () {
			label.innerText = `${time} seconds left`
			if (time <= 15) label.style.color = RED_COLOR
		}
		const oneSecondInMillisecond = 1000
		setTimeout(() => {
			this.dispatchEvent(timer_event)
		}, time * oneSecondInMillisecond)
		const id =  setInterval(() => {
			time-- 
			updateTime()
			if (time === 0) clearInterval(id)
		}, oneSecondInMillisecond)

		updateTime()

		shadow.appendChild(style)
		shadow.appendChild(label)
	}

	connectedCallback() { 
	  this.addEventListener('timer', function (e) {
		self[this.onTimerEndCallback]()
	  })
	}
}

customElements.define('x-timer', Timer)







