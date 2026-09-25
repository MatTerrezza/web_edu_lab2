const calculateAverage = require('./modules/calculateAverage');
const findTopStudent   = require('./modules/findTopStudent');
const filterFailed     = require('./modules/filterFailed');
const addLetterGrade   = require('./modules/addLetterGrade');

const grades = [
    { name: "Макар",     score: 85 },
    { name: "Денис",     score: 92 },
    { name: "Анна",      score: 78 },
    { name: "Даша",      score: 88 },
    { name: "Студент_X", score: 45 }
];

const PASS_SCORE = 60;

const withLetters = addLetterGrade(grades);

console.log('Студенты с оценками:', withLetters);
console.log('Средний балл:', calculateAverage(withLetters));
console.log('Лучший студент:', findTopStudent(withLetters));
console.log('Провалившие:', filterFailed(withLetters, PASS_SCORE));
