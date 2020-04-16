export default (keys: { [p: string]: string[] }) => (
	origin: string
): [string, string, string] => {
	let alternative1 = '';
	let alternative2 = '';
	origin.split('').forEach((key) => {
		if (keys.hasOwnProperty(key)) {
			const [letter1, letter2 = letter1] = keys[key];
			alternative1 += letter1;
			alternative2 += letter2;
		} else {
			alternative1 += key;
			alternative2 += key;
		}
	});
	return [origin, alternative1, alternative2];
};
