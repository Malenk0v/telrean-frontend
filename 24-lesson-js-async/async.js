const temp = setTimeout(function(){return `hi`}, 2000).bind(window);
setInterval(console.log(temp), 1000);
