
// 1) Напишите функцию, которая проверяет,
// содержит ли строка только цифры. Используйте регулярные выражения

const input = prompt()

const regExp = /[0-9]/

const containerForNumber = () => {
    if (input.match(regExp)) {
        console.log(true)
    }else {
        console.log(false)
    }
}

containerForNumber()



// 2) Напишите функцию, которая каждую секунду выводит
// в консоль сообщение "Прошла секунда". Используйте setInterval


const second = () => {
    setInterval( () => console.log('Прошла секунда!'), 1000)
}

second()


// 3) Вывести числа от 1 до 10 с интервалом в 1 секунду, затем остановить.

const count = () => {
    let i = 0;
    const interval = setInterval(() => {
        i++
        console.log(i)
        if (i > 9) clearInterval(interval)
    } ,1000 );
}

count()


// 4) Создать блок 150 на 150 пикселей и получить его через дом элементы
// при нажатии на которую будет меняться его задний фон при повторном нажатии
// будет убираться цвет заднего фона - выполните эту задачу с использованием classList и его методов

const block = document.querySelector('.block');

block.onclick = (event) =>  {
        if (event.target.classList.contains('red')) {

            event.target.classList.remove('red')
        }else {
            event.target.classList.add('red')
        }
}

