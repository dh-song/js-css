class Box {
    #x; //private
    constructor(x = 0, y = 0, w = 50, h = 50, color = "black") {
        this.#x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = color;

        // this.draw = function(ctx){ // 호출마다 생성됨 좋지 못 함
        //     ctx.fillStyle = this.color;
        //     ctx.fillRect(this.x,this.y,this.w,this.h,this.color);
        // }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.#x, this.y, this.width, this.height, this.color);
    }

    get x(){
        return this.#x;
    }
    
    set x(x){
        this.#x = x;
    }

}



// function Box2(x,y,w,h, color){
//     this.x = x || 0;
//     this.y = y || 0;
//     this.width = w || 50;
//     this.height = h || 50;
//     this.color = color || "black";

//     // this.draw = function(ctx){ // 호출마다 생성됨 좋지 못 함
//     //     ctx.fillStyle = this.color;
//     //     ctx.fillRect(this.x,this.y,this.w,this.h,this.color);
//     // }


// }

// console.log(Object.getOwnPropertyNames(Box2));

// Box2.prototype = {
//     draw: function(ctx){
//             ctx.fillStyle = this.color;
//             ctx.fillRect(this.x,this.y,this.width,this.height,this.color);
//     }
// }