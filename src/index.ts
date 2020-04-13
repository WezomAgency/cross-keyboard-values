import { ILayout } from './types';

export default (...layouts: ILayout[]) => {
	const keyboard: {[p: string]: string[] }= {};

	const length = layouts.length;
	for (let i = 0; i < length; i++) {
		const layout = layouts[i];
		for (const key in layout) {
			if (layout.hasOwnProperty(key)) {
				if (!keyboard.hasOwnProperty(key)) {
					keyboard[key] = [];
				}
				keyboard[key].push(layout[key]);
			}
		}
	}

	return (original: string): string[] => {
		return [original];
	}
}
