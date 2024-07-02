document.addEventListener("DOMContentLoaded", function() {
    // Начальное значение таймера в секундах (например, 85 секунд = 1 минута 25 секунд)
    let timerValue = 85;

    // Функция для обновления таймера
    function updateTimer() {
        // Вычисление минут и секунд
        let minutes = Math.floor(timerValue / 60);
        let seconds = timerValue % 60;

        // Форматирование минут и секунд в формате 01:25
        let formattedTime = 
            (minutes < 10 ? "0" : "") + minutes + ":" + 
            (seconds < 10 ? "0" : "") + seconds;

        // Отображение времени на странице
        document.getElementById("timer").textContent = formattedTime;

        // Уменьшение значения таймера на 1 каждую секунду
        timerValue--;

        // Остановка таймера, когда значение достигает нуля
        if (timerValue < 0) {
            clearInterval(timerInterval);
        }
    }

    // Запуск таймера с интервалом 1 секунда
    let timerInterval = setInterval(updateTimer, 1000);

    // Первоначальное обновление таймера
    updateTimer();
});
