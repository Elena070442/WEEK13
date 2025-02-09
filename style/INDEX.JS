//день на следующей неделе
const currentDate = new Date();
const nextWeek = new Date(currentDate);
nextWeek.setDate(currentDate.getDate() + 7);
const options = { weekday: 'long' };
const dayOfWeek = nextWeek.toLocaleString('en-US', options);
console.log(dayOfWeek);

//др в следующем году
const currentDate1 = new Date()
const futureYear1=currentDate.getFullYear()+1
const futureDateInFutureYear=new Date(futureYear,3,7)
console.log(futureDateInFutureYear)

//разница между годами
const currentDate2 = new Date()
const currentYear = currentDate.getFullYear()
const futureYear = currentDate.getFullYear() + 1
const differenceYears = futureYear - currentYear
console.log(differenceYears)


const strDate ='2023-06-15T08:30:00.000Z'
const date= new Date(Date.parse('2023-06-15T08:30:00.000Z'))
console.log(date)


const date2= '2023/06/15'
const wrongDate=Date.parse(date2)
if (isNaN(wrongDate)) {
    console.log('Неправильный формат даты')
} else {
    console.log('Правильный формат даты')
}

//однозначное число
const number = 231
if (number >= 0 && number <= 9) {
console.log('true')
} else {
console.log('false')
}

const number1= 231
if(number1>=10&&number1<=99){
console.log('true')
}else{
console.log('false')
}

const number2 = 231
if(number>0&&number>=100&&number<=999){
console.log('true')
}else{
console.log('false')
}

let result='Запад'
switch(result){
    case'N':
    console.log('Север')
    break;
    case'S':
    console.log('Юг')
    break;
    case'E':
    console.log('Восток')
    break;
    case'W':
    console.log('Запад')
    break;
    default:
    console.log(result)
}
//Выведите в консоль разницу в днях между currentDate и pastDate из прошлых заданий в таком виде 'Разница в днях: _твоя переменная_'
const currentDate7 = new Date()
const pastDate = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
// Вычисляем разницу в днях
const timeDifference = currentDate7.getTime() - pastDate.getTime()
const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))
console.log(`Разница в днях: ${daysDifference}`)

// console.log(drf)? let drf = new Date(2016, 2, 9); console.log(drf);

let a = 1, b = 1;

let c = ++a; 
let d = b++; 
alert (++a); 