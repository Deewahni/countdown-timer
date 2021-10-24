

const countDown = () => {
    const countDate = new Date("October 30, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    
    //how does time work?
    const second = 1000; //1000 is the millisecond
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    //     //calculate the thingy
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    //display to the website
    document.querySelector('#day').innerText = textDay;
    document.querySelector('#hour').innerText = textHour;
    document.querySelector('#min').innerText = textMinute;
    document.querySelector('#sec').innerText = textSecond;
};

setInterval(countDown, 1000);