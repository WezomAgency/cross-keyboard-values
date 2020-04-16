export default (keys: { [p: string]: string[] }) => (
	origin: string
): [string, string] => {
	let alternative1 = '';
	origin.split('').forEach((key) => {
		if (keys.hasOwnProperty(key)) {
			const [letter1] = keys[key];
			alternative1 += letter1;
		} else {
			alternative1 += key;
		}
	});
	return [origin, alternative1];
};
