(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var crossKeyboardValues = (function () {
        var layouts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            layouts[_i] = arguments[_i];
        }
        var coreLayout = layouts[0];
        var keyboard = {};
        var length = layouts.length;
        var _addKey = function (key, value) {
            if (keyboard[key].indexOf(value) < 0) {
                keyboard[key].push(value);
            }
        };
        var _getFromSiblings = function (current, key) {
            var values = [];
            if (length < 2) {
                return values;
            }
            for (var i = 0; i < length; i++) {
                if (i === current) {
                    continue;
                }
                var value = layouts[i][key];
                if (value !== undefined) {
                    values.push(value);
                }
            }
            return values;
        };
        for (var key in coreLayout) {
            if (coreLayout.hasOwnProperty(key)) {
                if (!keyboard.hasOwnProperty(key)) {
                    keyboard[key] = [];
                }
            }
        }
        for (var i = 0; i < length; i++) {
            var layout = layouts[i];
            for (var key in layout) {
                if (layout.hasOwnProperty(key)) {
                    var value = layout[key];
                    if (value !== key) {
                        if (keyboard.hasOwnProperty(key)) {
                            _addKey(key, value);
                        }
                        if (value.length) {
                            if (!keyboard.hasOwnProperty(value)) {
                                keyboard[value] = [];
                            }
                            _addKey(value, key);
                            var siblings = _getFromSiblings(i, key);
                            var sLength = siblings.length;
                            for (var s = 0; s < sLength; s++) {
                                var sValue = siblings[s];
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
        return function (original) {
            var letters = original.split('');
            var length = letters.length;
            var values = [];
            var _addValues = function (value) {
                if (values.length === 0) {
                    values.push.apply(values, value);
                }
                else {
                    var vLength = value.length;
                    var vsLength = values.length;
                    if (vsLength < vLength) {
                        console.log('vs');
                        // _grow(vsLength, vLength, values);
                        var last = values[vsLength - 1];
                        var diffLength = vLength - vsLength;
                        console.log(diffLength);
                        for (var i = 0; i < diffLength; i++) {
                            values.push(last);
                        }
                    }
                    else if (vLength < vsLength) {
                        console.log('v');
                        // _grow(vLength, vsLength, value);
                        var last = value[vLength - 1];
                        var diffLength = vsLength - vLength;
                        for (var i = 0; i < diffLength; i++) {
                            value.push(last);
                        }
                    }
                    console.log(value, values);
                    vLength = value.length;
                    for (var i = 0; i < vLength; i++) {
                        values[i] = values[i] + value[i];
                    }
                }
            };
            for (var i = 0; i < length; i++) {
                var key = letters[i];
                if (keyboard.hasOwnProperty(key)) {
                    _addValues(keyboard[key]);
                }
                else {
                    _addValues([key]);
                }
            }
            return __spreadArrays([original], values);
        };
    });

    var layout = {
        // 1 row
        '`': '`',
        '~': '~',
        '@': '@',
        '#': '#',
        $: '$',
        '^': '^',
        '&': '&',
        // 2 row
        q: 'q',
        w: 'w',
        e: 'e',
        r: 'r',
        t: 't',
        y: 'y',
        u: 'u',
        i: 'i',
        o: 'o',
        p: 'p',
        '[': '[',
        ']': ']',
        Q: 'Q',
        W: 'W',
        E: 'E',
        R: 'R',
        T: 'T',
        Y: 'Y',
        U: 'U',
        I: 'I',
        O: 'O',
        P: 'P',
        '{': '{',
        '}': '}',
        // 3 row
        a: 'a',
        s: 's',
        d: 'd',
        f: 'f',
        g: 'g',
        h: 'h',
        j: 'j',
        k: 'k',
        l: 'l',
        ';': ';',
        "'": "'",
        A: 'A',
        S: 'S',
        D: 'D',
        F: 'F',
        G: 'G',
        H: 'H',
        J: 'J',
        K: 'K',
        L: 'L',
        ':': ':',
        '"': '"',
        // 4 row
        z: 'z',
        x: 'x',
        c: 'c',
        v: 'v',
        b: 'b',
        n: 'n',
        m: 'm',
        ',': ',',
        '.': '.',
        Z: 'Z',
        X: 'X',
        C: 'C',
        V: 'V',
        B: 'B',
        N: 'N',
        M: 'M',
        '<': '<',
        '>': '>'
    };

    var layout$1 = {
        // 1 row
        '`': '',
        '~': '₴',
        '@': '"',
        '#': '№',
        $: ';',
        '^': ':',
        '&': '?',
        // 2 row
        q: 'й',
        w: 'ц',
        e: 'у',
        r: 'к',
        t: 'е',
        y: 'н',
        u: 'г',
        i: 'ш',
        o: 'щ',
        p: 'з',
        '[': 'х',
        ']': 'ї',
        Q: 'Й',
        W: 'Ц',
        E: 'У',
        R: 'К',
        T: 'Е',
        Y: 'Н',
        U: 'Г',
        I: 'Ш',
        O: 'Щ',
        P: 'З',
        '{': 'Х',
        '}': 'Ї',
        // 3 row
        a: 'ф',
        s: 'і',
        d: 'в',
        f: 'а',
        g: 'п',
        h: 'р',
        j: 'о',
        k: 'л',
        l: 'д',
        ';': 'ж',
        "'": 'є',
        A: 'Ф',
        S: 'І',
        D: 'В',
        F: 'А',
        G: 'П',
        H: 'Р',
        J: 'О',
        K: 'Л',
        L: 'Д',
        ':': 'Ж',
        '"': 'Є',
        // 4 row
        z: 'я',
        x: 'ч',
        c: 'с',
        v: 'м',
        b: 'и',
        n: 'т',
        m: 'ь',
        ',': 'б',
        '.': 'ю',
        Z: 'Я',
        X: 'Ч',
        C: 'С',
        V: 'М',
        B: 'И',
        N: 'Т',
        M: 'Ь',
        '<': 'Б',
        '>': 'Ю'
    };

    var layout$2 = {
        // 1 row
        '`': 'ё',
        '~': 'Ё',
        '@': '"',
        '#': '№',
        $: ';',
        '^': ':',
        '&': '?',
        // 2 row
        q: 'й',
        w: 'ц',
        e: 'у',
        r: 'к',
        t: 'е',
        y: 'н',
        u: 'г',
        i: 'ш',
        o: 'щ',
        p: 'з',
        '[': 'х',
        ']': 'ъ',
        Q: 'Й',
        W: 'Ц',
        E: 'У',
        R: 'К',
        T: 'Е',
        Y: 'Н',
        U: 'Г',
        I: 'Ш',
        O: 'Щ',
        P: 'З',
        '{': 'Х',
        '}': 'Ъ',
        // 3 row
        a: 'ф',
        s: 'ы',
        d: 'в',
        f: 'а',
        g: 'п',
        h: 'р',
        j: 'о',
        k: 'л',
        l: 'д',
        ';': 'ж',
        "'": 'э',
        A: 'Ф',
        S: 'Ы',
        D: 'В',
        F: 'А',
        G: 'П',
        H: 'Р',
        J: 'О',
        K: 'Л',
        L: 'Д',
        ':': 'Ж',
        '"': 'Э',
        // 4 row
        z: 'я',
        x: 'ч',
        c: 'с',
        v: 'м',
        b: 'и',
        n: 'т',
        m: 'ь',
        ',': 'б',
        '.': 'ю',
        Z: 'Я',
        X: 'Ч',
        C: 'С',
        V: 'М',
        B: 'И',
        N: 'Т',
        M: 'Ь',
        '<': 'Б',
        '>': 'Ю'
    };

    var getValues = crossKeyboardValues(layout$1, layout$2, layout);
    var $input = document.getElementById('input');
    var $output = document.getElementById('output');
    if ($input != null && $output != null) {
        $input.addEventListener('keyup', function () {
            var values = getValues($input.value);
            // console.log(values);
            $output.textContent = JSON.stringify(values, undefined, '  ');
        });
    }

}());
//# sourceMappingURL=index.js.map
