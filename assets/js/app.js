var cl = console.log;

const setzero = (num) => {
    return (num < 10) ? "0" + num : num;
}
cl(setzero());
const clockFun = () => {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "AM";
    session = (hr >= 12) ? "PM" : "AM"
    if (hr > 12) {
        hr = hr - 12;
    }
    // sec = (sec < 10) ? "0" + sec : sec;
    // min = (min < 10) ? "0" + min : min;
    // hr = (hr < 10) ? "0" + hr : hr;
    setTimeout(clockFun, 1000);


    let result = `${setzero(hr)}:${setzero(min)}:${setzero(sec)} ${session}`
    const digiclk = document.getElementById("digitalclock")
    digiclk.innerHTML = result;
}

clockFun();