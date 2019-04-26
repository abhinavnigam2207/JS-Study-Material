var col = document.querySelectorAll('.loader ')[0];
var content = document.getElementById('content');
var elem = document.getElementById('start');
var elems = [];
var counter = 0;

function startLoader(col) {
    var lCount = 0;
    return new Promise(function(resolve){
        var timer = setInterval(function(){
            ++lCount;
            debugger;
            col.style.width = lCount+'%';
            if(lCount==100) {
                clearInterval(timer);
                resolve();
            }
        },30);
    });
}

function generateLoader() {
    var loader = document.createElement('div');
    var pointer = document.createElement('div');
    loader.className = 'loader';
    pointer.className = 'pointer';
    pointer.id = 'p'+counter;
    loader.appendChild(pointer);
    return loader;
}

function asyncFunction() {
    if(elems.length) {
        return startLoader(document.getElementById('p'+counter)).then(function(){
            elems.shift();
            asyncFunction();
        });
    }
}

elem.addEventListener('click', function(){
    ++counter;
    var current = generateLoader();
    content.appendChild(current);
    elems.push(current);
    debugger;
    // if(elems.length<=5) {
        asyncFunction();
    // }
});