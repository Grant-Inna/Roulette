$(document).ready(function () {
   
   // Функция с кручением этих классов по кругу
   
   function round() {
      $('.games_name__list .active').next('p').addClass('two');
      $('.games_name__list .active').prev('p').addClass('two-l');
      
      $('.games_name__list .two').first().prev('p').addClass('three');
      $('.games_name__list .two-l').last().next('p').addClass('three-l');
      
      $('.games_name__list .three').first().prev('p').addClass('four');
      $('.games_name__list .three-l').last().next('p').addClass('four-l');
      
      $('.games_name__list .four').first().prev('p').addClass('five');
      $('.games_name__list .four-l').last().next('p').addClass('five-l');
      
      
   }
   // date = new Date();
   // function tiktak() {
   //    date = new Date();
   //    return (60 - date.getSeconds())
   // }
      // console.log(date.getSeconds());
      // setInterval(function () {
      //
      //    console.log(date.getSeconds());
      //
      // }, date.getSeconds());
         
      
      
      
   
   
   // Выведем рандомное число
   
   let arr = $('.game__name'); // число элементов (строк)
   
   function randomInteger(min, max) {
     var rand = min - 0.5 + Math.random() * (max - min + 1);
     rand = Math.round(rand);
     
     return rand;
   }
   
   // console.log( randomInteger( 1, 9 ));
   function game() {
      $('.games_name__list .active').removeClass('active');
      console.log( $('#game-' + randomInteger( 1, 9 )).addClass('active'));
      $('.games_name__list .active').next('p').addClass('two');
      $('.games_name__list .active').prev('p').addClass('two-l');
      
      $('.games_name__list .two').first().prev('p').addClass('three');
      $('.games_name__list .two-l').last().next('p').addClass('three-l');
      
      $('.games_name__list .three').first().prev('p').addClass('four');
      $('.games_name__list .three-l').last().next('p').addClass('four-l');
      
      $('.games_name__list .four').first().prev('p').addClass('five');
      $('.games_name__list .four-l').last().next('p').addClass('five-l');
   }
   
   // Определить место номера в цепочке - получается из другой функции ОПРЕДЕЛЁННАЯ
   // Фиксированное число классов сверху и снизу - ПОСТОЯННАЯ
   // Из вертикали цифр создать замкнутый круг
   // Возможно от присваивоения классов со свойствами перейти к присваению элементам по id
   // Пока идет присвоение по местоположению в цепи
   
   // массив цифер, если далее конец, брать первый
   // поиск последнего элемента массива

   // console.log(arr[arr.length - 1]); // выводим в консоль последний элемент массива
   
   
   // берем результаты random, например 5. Значит выставляем классы 4, 3, 2, 1 и 6, 7, 8, 9
   // Такие результы можно получить, вычетая 4 из 5-ти, и прибавив 4 к 5
   // рандом у нас 7
   // 7 - 4 = 3. 6, 5, 4, 3. То есть arr[random - 1], arr[random - 1], arr[random - 2], arr[random - 3], arr[random - 4]
   // 7 + 4 = 11! 8,   9   , 10, 11
   // Сперва проверка на последний элемент - берём arr[0], arr[1] - можно получить через разницу числа индексов и random (random + 4 - arr[arr.length - 1]) (то есть 7 + 4 - 9) = 2. Перебор массива с этим числом + 1
   
   
   // Получается при 2 - 1, 0, 9, 8, проверка на первый элемент (индекс 0). (random + 4 - arr[arr.length - 1]) (то есть 9 - 2 + 4) = 9 - 6 = 3 - тут  перебор маасива с ограничением этого числа - 1
   
   // у нас есть 0 и arr[arr.length - 1 (9)] - нужно проверить к какому ближе наш рандом
   // рандом у нас 7? он ближе к перебору +1. Как это узнать?
   // К 7 можно прибавить 4 и убавить = 3 и 11, 11 больше последнего индекса
   // рандом у нас 3, он ближе к массиву - 1. Как это узнать
   // 3 + 4 = 7, 3 - 4 = -1, меньше первого индекса
   // рандом 5. Он и 1 и 9 - в рамках массива
   
   // Получается, первая проверка тут должна быть на "уместился", "не уместился"  0 < x - 4 && x + 4 < arr[arr.length - 1]
   // Вторым ветвлением определяем сторону: х + 4 > arr[arr.length - 1]? x - 4 < 0?
   
   // console.log(randomInteger(1, arr.length- 1));

  /* function result( ) {
      // ГЛАВНОЕ не запутиться - индексы считаем, а не сам массив объектов!
      let x = randomInteger(0, arr.length - 1);
      console.log(x);
      0 <= x - 4 ? console.log('От 4 до 9') : console.log('Меньше 4-х, Идёт в - 1');
      x + 4 < arr.length - 1 ? console.log('От 4 до 0') : console.log('Больше 4-х, Идёт в + 1');
   }*/
   
   // Наше крамольное, рассчитываемое: 0, 4 и 8 (arr.length - 1), как высчитать эти цифры, не создавая константу
   // 0 - константа, 8  (arr.length - 1) - константа
   //4 же - 0 + 4 и 8 - 4, то есть можно преобразовать как общее количество - 4 и ноль + 4
   
   
   // Далее путём прибавки 1, поправили всё на число, вместо индексов
   let q = (arr.length) - 4,
       w = 1 + 4;
   
   /*console.log(q + '  ' + w); // Сейчас имеем 5 и 5 (9 строк)
   console.log(q + '  ' + w); // Сейчас имеем 8 и 5 (12 строк)
   console.log(q + '  ' + w); // Сейчас имеем 11 и 5 (15 строк)*/
   
   function result() {
      
      let x = randomInteger(1, arr.length);
      console.log(x);
      0 < x - 4 ? console.log('От 4 - тут проходит') : small(x); // это наше q
      x + 4 <= arr.length ? console.log('До ' + (arr.length - 4)) : big(x); // это w
   }
   
   function small(x) {
      console.log( (x - 4) + '   Меньше 4-х, Идёт в - 1')
   }
   function big(x) {
      console.log( (x + 4) + '   Больше ' + arr.length - 4 + ', Идёт в + 1');
   }
   // Определили цифры у краёв массива, теперь функция для цифр в середине
   function vanilla(x) {
   
   }
   
   // game();
   result( );
   // console.log(result());
   
});
