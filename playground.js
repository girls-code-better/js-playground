console.oldLog = console.log;
console.log = function(value){
    console.oldLog(value);
    return value;
}
var app = new Vue({
    el: "#app",
    data: {
        error: null,
        output:null
    },
    methods: {
        run: function () {
            try {
                this.output = eval(myCodeMirror.getValue())
            } catch (e) {
                console.error(e);
                this.error = e;
            }
        },
        removeError: function () {
            this.error = null;
            this.output = null;
        }
    }
})

var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    lineNumbers: true,
    mode: "javascript",
    theme: "dracula",
    styleActiveLines: true,
    matchBrackets:true
});