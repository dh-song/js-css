// class Box{
//     constructor(){
//         this.color = ["yellow", "green", "blue", "red"];
//         this.width =  50;
//         this.height = 50;
//         this.ix = 0;
//         this.iy = 10;
//         this.gap = 10;
//     }
// }
// const box = new Box();

let canvas = document.createElement("canvas");
canvas.width=500;
canvas.height=400;
// canvas.style.borderStyle="solid";
// canvas.style.borderColor="black";
canvas.style.border="solid black 1px";
canvas.style.borderColor="blue";
// canvas.style["boder-color"] = "blue";
document.body.append(canvas);

let ctx = canvas.getContext("2d");
// console.log(box.color[0]);
// console.log(box.color.length);
// for (let i = 0; i < box.color.length; i++) {
//     ctx.fillStyle = box.color[i];
//     box.ix += box.gap;
//     ctx.fillRect(box.ix,box.iy,box.width,box.height);
//     box.ix += box.width;
    
// }
// ----------------------------------------


let gap = 20;
let color1 = ["yellow", "green", "blue", "red" ]
let boxes = [];
for (let i = 0; i < 4; i++) {
    boxes.push(new Box(i*(50+gap),0,50,50,color1[i]))
}



for (let box of boxes) {
    // let {x,y,width:w,height:h,color} = box;
    box.draw(ctx);
}

let both = [
    new Box(),
    new Box(30,40,50,50,"red")

];

let [b1, {color,width}] = both; //디스트럭쳐링

console.log(color);

// ctx.fillStyle = "red";
// ctx.fillRect(10,10,50,50);

// ctx.fillStyle = "green";
// ctx.fillRect(80,10,50,50);
let proto = Box.prototype;
console.log(Object.getOwnPropertyNames(proto));

let obj = {x:0,y:3};
let obj1 = Object.create(obj); //
Object.defineProperties(obj,'z',{
    value:30,
    writable:false
});
obj.x = 20;
obj.z = 60;
console.log(obj);

//for of 는 컬렉션, object 는 in 사용 object.entries
