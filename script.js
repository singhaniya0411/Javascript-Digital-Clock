console.log("Hello world")



setInterval(() => {
  let hour = document.getElementsByClassName("hr");
  let minute = document.getElementsByClassName("min");
  let second = document.getElementsByClassName("sec");
  let now = new Date();
  hour[0].innerHTML = (now.getHours() < 10 ? "0" : "") + now.getHours();
  minute[0].innerHTML = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
  second[0].innerHTML = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
}, 1000)