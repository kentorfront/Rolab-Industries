var options = {
    strings: ["FLL team from Almaty", "№39 lyceum named after S.A Hodjikov"],
    typeSpeed: 60, // Скорость набора текста в миллисекундах
    backSpeed: 35, // Скорость стирания текста в миллисекундах
    startDelay: 500, // Задержка перед началом анимации в миллисекундах
    backDelay: 2000, // Задержка перед стиранием текста в миллисекундах
    showCursor: true, // Отображать мигающий курсор
    loop: true
};

var typed = new Typed("#typed-output", options);
typed.start(); // Добавьте эту строку
