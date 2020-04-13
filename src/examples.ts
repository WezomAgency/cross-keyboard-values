import crossKeyboardValues from './index';
import en from './layouts/en';
import uk from './layouts/uk';
import ru from './layouts/ru';

const getValues = crossKeyboardValues(uk, ru, en);
console.log(getValues('text'));
