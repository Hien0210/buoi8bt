let b = prompt("nhap vao gia tri mang")
let a = b.split(",")

 console.log(a);
//--------tim Min--------
let min = a[0];
for ( var i= 0; i < a.length ; i++){
    if (min > Number(a[i] )){
        min = a[i]
    }
}    
console.log("gia tri nho nhat cua chuoi", min)
//------tinh tong------------;
var sum = 0;
for( var i = 0; i< a.length; i++){
    sum= sum +Number(a[i]);
}
console.log("tong cua chuoi la", sum);



let c = prompt("nhap vao 1 so bat ky");
//------kiem tra tinh chan le----------
if ( c%2===0){
    console.log(c," la so chan");
}else{console.log(c," la so le");}
//----------kiem tra tinh nguyen to----------

let x = true;
if (c < 2) {  
    x = false;    
}else{
    for ( var i = 2; i<= Math.sqrt(c); i++){
        if ( c%i === 0) {
            x= false;
            break;
        }
    }
}    
if (x== true) {
    console.log( c," la so nguyen to");
}else{
    console.log(c, "khong phai so nguyen to");
}
