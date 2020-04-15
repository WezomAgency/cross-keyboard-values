import { ILayout } from './types';

export default (...layouts: Partial<ILayout>[]) => {
	const coreLayout = layouts[0];
	const keyboard: { [p: string]: string[] } = {};
	const length = layouts.length;

	const _addKey = (key: string, value: string) => {
		if (keyboard[key].indexOf(value) < 0) {
			keyboard[key].push(value);
		}
	};

	const _getFromSiblings = (current: number, key: string) => {
		const values: string[] = [];
		if (length < 2) {
			return values;
		}
		for (let i = 0; i < length; i++) {
			if (i === current) {
				continue;
			}
			const value = layouts[i][key];
			if (value !== undefined) {
				values.push(value);
			}
		}
		return values;
	};

	for (const key in coreLayout) {
		if (coreLayout.hasOwnProperty(key)) {
			if (!keyboard.hasOwnProperty(key)) {
				keyboard[key] = [];
			}
		}
	}

	for (let i = 0; i < length; i++) {
		const layout = layouts[i];
		for (const key in layout) {
			if (layout.hasOwnProperty(key)) {
				const value: string = layout[key];
				if (value !== key) {
					if (keyboard.hasOwnProperty(key)) {
						_addKey(key, value);
					}
					if (value.length) {
						if (!keyboard.hasOwnProperty(value)) {
							keyboard[value] = [];
						}
						_addKey(value, key);
						const siblings = _getFromSiblings(i, key);
						const sLength = siblings.length;
						for (let s = 0; s < sLength; s++) {
							const sValue = siblings[s];
							if (sValue !== key) {
								_addKey(value, sValue);
							}
						}
					}
				}
			}
		}
	}

	// console.log(keyboard);

	return (original: string): string[] => {
		const letters = original.split('');
		const length = letters.length;
		let values: string[] = [];

		const _addValues = (value: string[]) => {
			if (values.length === 0) {
				values.push(...value);
			} else {
				const variants = values
					.map((v1) => value.map((v2) => v1 + v2))
					.reduce((acc, arr) => acc.concat(arr), []);
				values = variants.filter((v, i) => variants.indexOf(v) === i);
				console.log(variants);
				/*let vLength = value.length;
				let vsLength = values.length;
				if (vsLength < vLength) {
					console.log('vs');
					// _grow(vsLength, vLength, values);
					const last = values[vsLength - 1];
					const diffLength = vLength - vsLength;
					console.log(diffLength);
					for (let i = 0; i < diffLength; i++) {
						values.push(last);
					}
				} else if (vLength < vsLength) {
					console.log('v');
					// _grow(vLength, vsLength, value);
					const last = value[vLength - 1];
					const diffLength = vsLength - vLength;
					for (let i = 0; i < diffLength; i++) {
						value.push(last);
					}
				}

				console.log(value, values);
				vLength = value.length;
				for (let i = 0; i < vLength; i++) {
					values[i] = values[i] + value[i];
				}*/
			}
		};

		for (let i = 0; i < length; i++) {
			const key = letters[i];
			if (keyboard.hasOwnProperty(key)) {
				_addValues(keyboard[key]);
			} else {
				_addValues([key]);
			}
		}
		return [original, ...values];
	};
};
