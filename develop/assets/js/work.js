$(document).ready(function () {
   'use strict';
   // Функция с кручением этих классов по кругу
   
   $('.reload').on( 'click', () => { location.reload()});
   
   function showHowStupid() {
      $('.stupid').fadeIn(2600);
      $('.reload').text('');
      $('.reload').fadeIn(2900).addClass('big').html('<div>ПОПРОБУЙ ЕЩЁ</div><div class="second">Я В ТЕБЯ ВЕРЮ</div>');
   }
   
   var arr = [], // переменная для массива
      arr = $('.games_name__list p[id^="game-"]'); // число элементов (строк)
   var cc = 4, // class count, а что за 4, спросишь ты - число классов у элементов вверх и вниз от random
      // посмотреть эти стили можно в name.less (или добавить ещё)
      i, j, p, t; // переменные для for
   
   // Выведем рандомное число
   function randomInteger(min, max) { // тут и творится магия рандома
      var rand = min - 0.5 + Math.random() * (max - min + 1);
      rand = Math.round(rand);
      
      return rand;
   }
   
   function randomIntegerBIG(min, max) { // тут и творится магия рандома
      var rand = min - 0.5 + Math.random() * (max - min + 1);
      rand = Math.round(rand) * 100;
      
      return rand;
   }
   
   function clean() { // убираем все классы
      $('.two').removeClass('two');
      $('.three').removeClass('three');
      $('.four').removeClass('four');
      $('.five').removeClass('five');
      
      $('.two-l').removeClass('two-l');
      $('.three-l').removeClass('three-l');
      $('.four-l').removeClass('four-l');
      $('.five-l').removeClass('five-l');
      
      $('.active').removeClass('active');
      $('.grats').removeClass('grats');
      
      $('.one_photo').removeClass('one_photo');
   }
   
   var time, timer, timerr, timermin;
   
   $('.need_value input').on('change', (event) => {
      event.preventDefault();
      // event.stopPropagation();
      clearTimeout(timer);
      clearTimeout(timerr);
      clearTimeout(timermin);
      clean();
      
      var inputNumber = $('input').prop('value');
      input_numb(inputNumber, '0');
      
   });
   
   function input_numb(inputNumber) {
      
      $('.need_value .flex').hide();
      $('.need_value .dope').hide();
      $('.need_value .span').fadeIn(200).addClass('done');
      $('.need_value').css('margin-top', '10vh');
      $('.need_value input').fadeOut(200);
      $('.need_value p').text(inputNumber).addClass('numb').fadeIn(1500);
      $('.games_name__list').fadeIn(100).addClass('game');
      timer = setTimeout(() => {
         $('.need_value').slideUp();
         $('.need_value .done').slideUp();
      }, 2000);
      timerr = setTimeout(() => {
         $('.need_value .span').slideUp()
      }, 2000);
      timermin = setTimeout(() => {
         $('.need_value p').slideUp()
      }, 2600);
      
      // debugger
      // currentRandom(current);
      time = setTimeout(rolling, 300, inputNumber);
   }
   
   function currentRandom(max) { // тут и творится магия рандома
      // console.log('isNaN max   ' + isNaN(max));
      let rand = Math.random() * (+max + (max / arr.length) + (Math.random() * 10)) + Math.random() * 5;
      rand = Math.round(rand);
      
      rand <= 1 ? rand =  Math.round(0.5 + Math.random() * (+max + (max / (arr.length - max)))) : rand = rand;
      rand >= arr.length + 10 ? rand = 1 : rand = rand;
      rand > arr.length ? rand = Math.round(rand / 2)  : rand = rand;

      return rand;
   }
   
   
   function result(num) {
      let random;
      clean();
      
      num ? random = num : random = randomInteger(1, arr.length);
      
      $('#game-' + random).prop('class', '').addClass('active');
      
      // вверх - к меньшему! вниз - к большему
      cc < random ? small_vanilla(random) : small(random);  // это наше q, проверка на маленьковость
      random <= arr.length - cc ? vanilla_big(random) : big(random); // это w, проверка на крупноту
      
   }
   
   function small_vanilla(random) { // Если число вниз больше cc
      // console.log('small_vanilla' );
      // Вверх, значит определяем элементы до основного и даём классы
      $('#game-' + (random - 1)).prop('class', '').addClass('two');
      $('#game-' + (random - 2)).prop('class', '').addClass('three');
      $('#game-' + (random - 3)).prop('class', '').addClass('four');
      $('#game-' + (random - 4)).prop('class', '').addClass('five');
      
   }
   
   function vanilla_big(random) { // Если число вверх  меньше или равно arr.length - cc
      // console.log('vanilla_big');
      // Вниз, значит определяем элементы от основного и даём классы
      $('#game-' + (+random + 1)).prop('class', '').addClass('two-l');
      $('#game-' + (+random + 2)).prop('class', '').addClass('three-l');
      $('#game-' + (+random + 3)).prop('class', '').addClass('four-l');
      $('#game-' + (+random + 4)).prop('class', '').addClass('five-l');
   }
   
   function big(random) { // Если число больше либо равно arr.length - cc
      // console.log('big');
      let difference = Math.abs(arr.length - (random + cc));
      
      for (i = random + 1; i <= arr.length; i++) { // Отсортировывем цифры до конца
         // console.log('difference:  ' + difference);
         switch (i) {
            case random + 1:
               $('#game-' + i).prop('class', '').addClass('two-l');
               break;
            case random + 2:
               $('#game-' + i).prop('class', '').addClass('three-l');
               break;
            case random + 3:
               $('#game-' + i).prop('class', '').addClass('four-l');
               break;
            case random + 4:
               $('#game-' + i).prop('class', '').addClass('five-l');
               break;
         }
      }
      
      for (j = 0; j <= difference; j++) { // Отсортировывем цифры с начала
         // console.log('j:  ' + j);
         
         switch (j) {
            case 0:
               $('#game-' + (difference - j)).prop('class', '').addClass('five-l');
               break;
            case 1:
               $('#game-' + (difference - j)).prop('class', '').addClass('four-l');
               break;
            case 2:
               $('#game-' + (difference - j)).prop('class', '').addClass('three-l');
               break;
            case 3:
               $('#game-' + (difference - j)).prop('class', '').addClass('two-l');
               break;
            
         }
      }
      
   }
   
   function small(random) {  // число меньше cc
      // console.log('small');
      let difference = cc - random;
      
      for (i = random; i > 0; i--) { // Отсортировывем цифры до начала
         // console.log('i: ' + i);
         switch (i) {
            case random - 1:
               $('#game-' + i).prop('class', '').addClass('two');
               break;
            case random - 2:
               $('#game-' + i).prop('class', '').addClass('three');
               break;
            case random - 3:
               $('#game-' + i).prop('class', '').addClass('four');
               break;
            case random - 4:
               $('#game-' + i).prop('class', '').addClass('five');
               break;
         }
      }
      
      for (j = arr.length; j >= (arr.length - difference); j--) { // Отсортировывем цифры с начала
         // console.log('j: ' + j);
         
         switch (j) {
            case arr.length - difference:
               $('#game-' + j).prop('class', '').addClass('five');
               break;
            case arr.length - difference + 1:
               $('#game-' + j).prop('class', '').addClass('four');
               break;
            case arr.length - difference + 2:
               $('#game-' + j).prop('class', '').addClass('three');
               break;
            case arr.length - difference + 3:
               $('#game-' + j).prop('class', '').addClass('two');
               break;
            
         }
      }
   }
   
   
   function grats(num) {
      $('#game-' + num).addClass('grats');
   }
   
   
   var stop_number;
   
   function rolling(inputNumber) {
      clean();
      
      let current = 1,
         to = arr.length;
      
      var timerId = setInterval(function () {
         // console.log('current: ' + current);
         result(current);
         if (current == to) {
            current = 1;
            // clean();
         }
         current++;
      }, 100); // быстро, но анимация не захлёбывается
      
      let st = setTimeout(() => {
         $('.stop').fadeIn()
      }, 2300); // 15000 - 15 секунд
      $('.stop').on('click', () => {
         clearInterval(timerId);
         clearTimeout(st);
         $('.stop').fadeOut(1900);
         firstRoll(current, inputNumber);
         return stop_number = current;
      })
      
   }
   
   function firstRoll(now, inputNumber) {
      result(now);
      
      let first = now,
          to = arr.length;
      
      var timerFirst = setInterval(function () {

         result(first);
         if (first == to) {
            secondRoll(inputNumber);
            clearInterval(timerFirst);
         }
         first++;
      }, 180);
   }
   
   function secondRoll(inputNumber) {
      
      let second = 1,
          to = arr.length;
      
      var timerMiddle = setInterval(function () {
         result(second);
         if (second == to) {
            clearInterval(timerMiddle);
            thirdRoll(inputNumber);
         }
         second++;
      }, 240);
   }
   
   function thirdRoll(inputNumber) {
      console.log('thirdRoll до введённого');
      
      let third = 1,
          resta = arr.length - stop_number; // сколько осталось у введённого числа до arr.length
      if ( resta == 0 ) { resta = 1 }
      
      console.log('stop_number: ' + stop_number);
      console.log('resta: ' + resta);
      
      var timerThree = setInterval(function () {
         
         result(third);
         if (third == stop_number) {
            finalRoll(inputNumber, resta, stop_number);
            clearInterval(timerThree);
         }
         third++;
      }, 320);
   }
   function finalRoll(inputNumber, resta, stop_number) {
      console.log('финальный ролл до рандомного');
      
      let random = currentRandom(inputNumber);
      // console.log('isNan random: ' + isNaN(random));
      
      let last = random - resta; // сколько осталось на финальный шаг
          last = Math.abs(last); // сделаем положительным
      if ( last == 0 ) { last = 1 }
      if (isNaN(last)) {
         showHowStupid()
      }    console.log('isNan last: ' + isNaN(last));
      
      let final = stop_number;
      
      var timerFinal = setInterval(function () {
         console.log('final:   ' + final);
         result(final);
         if ( final == arr.length ) {
            final = 1
         } else if (final == last) {
            clearInterval(timerFinal);
            grats(final);
            $('.one_photo').removeClass('one_photo');
            $('#photo-' + final).addClass('one_photo');
            $('.reload').fadeIn();
         } else {
            final++;
         }
         
      }, 450);
   }
   
});
