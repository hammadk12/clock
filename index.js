
function getTime() {
    const clock = document.getElementById('clock-time')
    let time = new Date()
    let options = { hour12: true}
    let timeString = time.toLocaleTimeString('en-US', options)
    clock.innerHTML = timeString
    setTimeout(getTime, 1000)
}


function get24HrTime() {
    const clock24 = document.getElementById('clock-24')
    let d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let seconds = d.getSeconds()
    let formatTimed = formatTime(hours, minutes, seconds)
    clock24.innerHTML = formatTimed
    setTimeout(get24HrTime, 1000)
}















function formatTime(hours, minutes, seconds) { 
    let amPm = hours < 12 ? 'AM' : 'PM';
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${amPm}`; 
} 