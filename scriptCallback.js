
function loadEvent() {
//ha később lesz egy függvényünk, amit még nem tudunk, mi lesz, akkor előre behivatkozzuk callbackkel
    function multiply(callback) {
        return callback(2, 3) * 10;
    }

    function add(a, b) {
        return a + b;
    }
    
    function sub(a, b) {
        return a - b;
    }

    console.log(multiply(add));
    console.log(multiply(sub));
}

window.addEventListener("load", loadEvent);