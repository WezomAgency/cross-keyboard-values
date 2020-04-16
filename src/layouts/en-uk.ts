// -----------------------------------------------------------------------------
// Core
// -----------------------------------------------------------------------------

import alternativeValues from '../alt1';

// -----------------------------------------------------------------------------
// Keys
// -----------------------------------------------------------------------------

const keys = {
	// row 0
	'`': [''],
	'~': ['₴'],
	'#': ['№'],
	$: [';'],
	'@': ['"'],
	'^': [':'],
	'₴': ['~'],

	// row 1
	q: ['й'],
	w: ['ц'],
	e: ['у'],
	r: ['к'],
	t: ['е'],
	y: ['н'],
	u: ['г'],
	i: ['ш'],
	o: ['щ'],
	p: ['з'],
	'[': ['х'],
	']': ['ї'],
	Q: ['Й'],
	W: ['Ц'],
	E: ['У'],
	R: ['К'],
	T: ['Е'],
	Y: ['Н'],
	U: ['Г'],
	I: ['Ш'],
	O: ['Щ'],
	P: ['З'],
	'{': ['Х'],
	'}': ['Ї'],
	ц: ['w'],
	у: ['e'],
	к: ['r'],
	е: ['t'],
	н: ['y'],
	г: ['u'],
	ш: ['i'],
	щ: ['o'],
	з: ['p'],
	х: ['['],
	ї: [']'],
	Ц: ['W'],
	У: ['E'],
	К: ['R'],
	Е: ['T'],
	Н: ['Y'],
	Г: ['U'],
	Ш: ['I'],
	Щ: ['O'],
	З: ['P'],
	Х: ['{'],
	Ї: ['}'],

	// row 2
	a: ['ф'],
	s: ['і'],
	d: ['в'],
	f: ['а'],
	g: ['п'],
	h: ['р'],
	j: ['о'],
	k: ['л'],
	l: ['д'],
	';': ['ж'],
	"'": ['є'],
	A: ['Ф'],
	S: ['І'],
	D: ['В'],
	F: ['А'],
	G: ['П'],
	H: ['Р'],
	J: ['О'],
	K: ['Л'],
	L: ['Д'],
	':': ['Ж'],
	'"': ['Є'],
	ф: ['a'],
	і: ['s'],
	в: ['d'],
	а: ['f'],
	п: ['g'],
	р: ['h'],
	о: ['j'],
	л: ['k'],
	д: ['l'],
	ж: [';'],
	є: ["'"],
	Ф: ['A'],
	І: ['S'],
	В: ['D'],
	А: ['F'],
	П: ['G'],
	Р: ['H'],
	О: ['J'],
	Л: ['K'],
	Д: ['L'],
	Ж: [':'],
	Є: ['"'],
	'|': ['/'],

	// row 3
	z: ['я'],
	x: ['ч'],
	c: ['с'],
	v: ['м'],
	b: ['и'],
	n: ['т'],
	m: ['ь'],
	',': ['б'],
	'.': ['ю'],
	Z: ['Я'],
	X: ['Ч'],
	C: ['С'],
	V: ['М'],
	B: ['И'],
	N: ['Т'],
	M: ['Ь'],
	'<': ['Б'],
	'>': ['Ю'],
	я: ['z'],
	ч: ['x'],
	с: ['c'],
	м: ['v'],
	и: ['b'],
	т: ['n'],
	ь: ['m'],
	б: [','],
	ю: ['.'],
	ё: ['`'],
	Я: ['Z'],
	Ч: ['X'],
	С: ['C'],
	М: ['V'],
	И: ['B'],
	Т: ['N'],
	Ь: ['M'],
	Б: [','],
	Ю: ['.']
};

// -----------------------------------------------------------------------------
// Export
// -----------------------------------------------------------------------------

export default alternativeValues(keys);
