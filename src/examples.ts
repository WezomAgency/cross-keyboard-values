// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import enUk from './layouts/en-uk';
import enRu from './layouts/en-ru';
import ukRu from './layouts/uk-ru';
import enUkRu from './layouts/en-uk-ru';

// -----------------------------------------------------------------------------
// Demo helper
// -----------------------------------------------------------------------------

const example = (
	getValuesFn: (value: string) => string[],
	inputId: string,
	outputId: string
) => {
	const $input = document.getElementById(inputId) as HTMLInputElement | null;
	const $output = document.getElementById(outputId) as HTMLPreElement | null;
	if ($input != null && $output != null) {
		const handleKeyup = () => {
			const values = getValuesFn($input.value);
			$output.textContent = JSON.stringify(values, undefined, '  ');
		};
		$input.addEventListener('keyup', handleKeyup);
		handleKeyup();
	}
};

// -----------------------------------------------------------------------------
// Initialize
// -----------------------------------------------------------------------------

example(enUk, 'input-en-uk', 'output-en-uk');
example(enRu, 'input-en-ru', 'output-en-ru');
example(ukRu, 'input-uk-ru', 'output-uk-ru');
example(enUkRu, 'input-en-uk-ru', 'output-en-uk-ru');
