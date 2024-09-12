window.onload = function () {
    let btn = document.getElementById('btn');
    let continer = document.querySelector('.continer')
    btn.addEventListener('click', function () {
        createNotification()
    })

    function createNotification() {
        const notification = document.createElement('div')
        notification.classList.add('notif')
        notification.innerText = 'yoooo broo'
        continer.appendChild(notification)
        setTimeout(function () {
            notification.remove()
        }, 3000)
    }
}