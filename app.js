debugger
const { RandomDataProvider } = require('./provider.js')

const rdp = new RandomDataProvider( 0, 100 ) ;

let randomInts = [] 
let n

while( (n = rdp.next()) && randomInts.length != 10 ) {  
   randomInts.includes(n ) ? undefined :  randomInts.push( n )  
}
console.log (randomInts)

   // ответ на 3-й вопрос: 
   //Дабы избежать повторений. Это строка проверяет  - присутствует ли  данное значение в массиве, в случае  истины, он пропускает добавление нового значения в массив

   //ответ на 5-й вопрос:
   // цикл прервется как только наберется 10 РАЗНЫХ значение в массиве randomInts, цикл может повториться больше 10 раз (в случае повторения чисел), но в результате в массиве всегда будет 10 чисел


   //ответ на 6-й вопрос.---

   //ответ на 7-й вопрос - "randomInts.length != 10" - цикл и так не остановится пока не наберется 10 чисел.

