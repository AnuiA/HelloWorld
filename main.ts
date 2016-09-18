

console.log("   HelloWorld!");

function printT ( T:number ):void {
    var i:number;    
    for(i=1;i<=T;i++) {
        draw(i,T);
//        console.log(k);
        console.log(S);
        S = "";
    }
}

function draw (Ceng:number,Total:number):void {
    var i:number,j:number;
//    console.log(k);
    for(i=0;i<Total-Ceng;i++) {
        drawB();
    } 
    for(j=0;j<2*Ceng-1;j++) {
        drawX();
    }
}

function drawX ( ):void { 
    S = S + "*";
}

function drawB ( ):void {
    S = " " + S;
}

var S:string;
S = "";
console.log("   "+S);

var k:number;
k = 10;
printT(k);

