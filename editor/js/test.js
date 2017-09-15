class Test {
    f(){
        console.log("test");
    }
}

var obj = {
    init: function() {
        console.log("called init");
    }
}

export { Test, obj };


