import { ILayout } from './types';

export default (...layouts: Partial<ILayout>[]) => {
	const coreLayout = layouts[0];
	const keyboard: { [p: string]: string[] } = {};

	const length = layouts.length;

	for (const key in coreLayout) {
		if (coreLayout.hasOwnProperty(key)) {
			if (!keyboard.hasOwnProperty(key)) {
				keyboard[key] = [];
			}
		}
	}

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

	return (original: string): string[] => {
		return [original];
	};
};
