// 1 Переменные

//var name = 'Vladilen'
//const lastName = 'Minin'
//const age = 26

//console.log(name)

// 2 Мутирувание
//console.log('Имя человека'+ name + ', а возраст' + age)
//alert('Имя человека'+ name + ', а возраст' + age)


//ALERT - Вывод алерта, приостановление скрипта до нажатия кнопки ОК
//PROMT - Вывод алерта с заголовкой tittle, возможность ввести значение пользователя
//const lastName = prompt(' Enter your first name: ')
//alert('Your name is ' + name + ' ' +  lastName)


// 3 Операторы
// const currentName = 2022
// const birthYear = 1997

// const age = currentName - birthYear
// prompt('My age is ' + age)


//4 Переменные
// const isProgrammer = true
// const name = 'Alex'
// const age = 24
// let x  //undefined - незаданный
//
//
//
// console.log(typeof isProgrammer) // boolean - переменная истины
// console.log(typeof name) // string - строка
// console.log(typeof age) // number - номер

// 5 Приоритет к операции
// const fullAge = 25
// const birthYear = 1997
// const currentYear = 2022
//
//  const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторы

// if (courseStatus ==='ready')
// {
//     console.log('Course ready yet.')
// }
// else //if  (courseStatus === 'pending')
// {
//     console.log('Course is pending...')
// const courseStatus = 'ready'
//Тернарное выражение
// courseStatus === 'ready'? console.log('Course ready yet.'): console.log('Course is pending...')

// 7 логика boolean
// 8 Функции
// function calculateAge(year)
// {
//     return 2022 - year
// }
// const myAge = calculateAge(1997)
// console.log(myAge)

// function logInfoAbout (name, year)
// {
//
//     const age = calculateAge(year)
//     console.log('Name ' + name + ' Age '+    age)
//     if (age < 20)
//     {
//     console.log (' zxc')
//     }
//     else {
//         console.log ('mmr')
//     }
// }
// logInfoAbout('Alex', '1997')
// logInfoAbout('Elizabeth', '2005')

// 9 Массивы

 const cars = ['Mazda','Mercedes','Ford'] //Правильный вариант через квадратные скобки
// console.log(cars)
//const cars = new Array('Mazda', 'Mercedes', 'Ford')
console.log(cars.length)
console.log(cars[1])
console.log(cars[0])
console.log(cars[2])