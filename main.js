console.log("   HelloWorld!");
function printT(T) {
    var i;
    for (i = 1; i <= T; i++) {
        draw(i, T);
        //        console.log(k);
        console.log(S);
        S = "";
    }
}
function draw(Ceng, Total) {
    var i, j;
    //    console.log(k);
    for (i = 0; i < Total - Ceng; i++) {
        drawB();
    }
    for (j = 0; j < 2 * Ceng - 1; j++) {
        drawX();
    }
}
function drawX() {
    S = S + "*";
}
function drawB() {
    S = " " + S;
}
var S;
S = "";
console.log("   " + S);
var k;
k = 10;
printT(k);
