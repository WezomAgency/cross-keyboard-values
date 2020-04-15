import crossKeyboardValues from './index';
import en from './layouts/en';
import uk from './layouts/uk';
import ru from './layouts/ru';

const getValues = crossKeyboardValues(uk, ru, en);

const $input = document.getElementById('input') as HTMLInputElement | null;
const $output = document.getElementById('output') as HTMLPreElement | null;
if ($input != null && $output != null) {
	const handleKeyup = () => {
		const values = getValues($input.value);
		$output.textContent = JSON.stringify(values, undefined, '  ');
	};
	$input.addEventListener('keyup', handleKeyup);
	handleKeyup();
}
