// Проверка на палиндромом

// console.log(palindrom('Лёша на полке клопаф нашёл'));

function palindrom(phrase) {
  const phraseLow = phrase.toLowerCase(); // перевести все в нижний регистр
  const phrLowNoSpace = phraseLow.replaceAll(' ', ''); // убрать пробелы
  const lastIndex = phrLowNoSpace.length - 1; // получить последний индекс строки
  for (let i = 0; i < phrLowNoSpace.length / 2; i++) { // проверить циклом
    if(phrLowNoSpace[i] !== phrLowNoSpace[lastIndex - i]) { // проверить равен зеркальный индекс
      return false; // если не равен вернуть false
    }
    return true; // если совпадает вернуть true
  }
}
palindrom ('');


// Извлечение цифры

// console.log(extractDigit('1.5i04'));

function extractDigit(string) {
  const intoString = String(string); // преобразовать в строку
  let str = ''; // объявить переменную
  for (let i = 0; i < intoString.length; i++) { // проверить циклом всю строку
    if (Number(intoString[i]) || intoString[i] === '0') { // проверить на число и ноль
      str += intoString[i]; // суммировать полученные символы в строке
    }
  }
  return Number(str); // вернуть Number, чтобы отсечь первый ноль
}
extractDigit ();


// Добавочный символ

// console.log(symb('1', 2, '0'));

console.log(createAddress('1', 4, '0'));

function createAddress(string, minLength, addString) {
  let str = addString + string;
  if (string > minLength) {
    return str;
  } else if (addString > minLength) {
    str.slice(1, minLength);
    return str;
  } else {
    return str;
  }
}




// Кексобукинг рандом

// console.log(math(1, 4, 6))

function math(min, max, num) {
  const random = Math.random() * (max - min) + min; // находим число в диапазоне
  return random.toFixed(num); // выводим нужное число знаком после запятой
}
math();
