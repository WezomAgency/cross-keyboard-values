import crossKeyboardValues from './index';
import en from './layouts/en';
import uk from './layouts/uk';
import ru from './layouts/ru';

const getValues = crossKeyboardValues(uk, ru, en);

const $input = document.getElementById('input') as HTMLInputElement | null;
const $output = document.getElementById('output') as HTMLPreElement | null;
if ($input != null && $output != null) {
	$input.addEventListener('keyup', () => {
		const values = getValues($input.value);
		// console.log(values);
		$output.textContent = JSON.stringify(values, undefined, '  ');
	});
}
