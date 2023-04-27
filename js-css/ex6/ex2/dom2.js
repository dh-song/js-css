window.addEventListener("load", function () {
    {

        let s1 = document.querySelector(".s2");
        let ul = s1.querySelector("ul");
        let current = ul.querySelector("li.current");
        let lis = ul.querySelectorAll("li");

        for (let li of lis)
            li.onclick = function (e) {

                //두 번째인지 확인
                // let selected = ul.querySelector("li.current")
                // if (current) {

                //    let selected = e.target.parentElement; //LI
                    
                // while (selected.tagName !== "LI"){
                //     selected = current.parentElement;
                // }
                // let nextCur = current.nextElementSibling;
 
                // current.append(selected);

                // current.append()
                // if (nextCur !== null) {
                //     selected.append(nextCur);
                // } else {
                //     selected.parentElement.insertAdjacentElement('beforeend' , selected);
                // }
                
                // }

                //* 현재 선택된 노드를 찾고
                current = e.target.parentElement;
                while (current.tagName !== "LI")
                    current = current.parentElement;

                //* 선택된 노드임을 표시하는 스타일 변경
                // let span = current.firstElementChild;
                // while(span.tagName !== "SPAN")
                //     span = span.firstElementChild;                 
                // 이렇게 스타일을 적용하는 것은 바람직하지 않다.
                // span.style.backgroundColor = "red";
                current.classList.toggle("current");
                console.log(current);
            }






        // let ul = this.document.querySelector(".tg");
        // ul.onclick = (e) => {
        //     console.log(e.target.tagName);
        //     console.log(e.currentTarget.tagName);
        //     console.log("커런트" + e.currentTarget);
        //     console.log("클래스" + e.target.parentNode.className);
        //     if (e.target.tagName === 'SPAN') {
        //         e.target.style.backgroundColor = "red";
        //         console.log("dfdfdf");
        //     }
        // }

    }


    //노드 조작
    {
        //  let s1 = document.querySelector("#s1");
        // let first = s1.querySelector("li:2nd-child")


        // console.log(first);
        // first.remove();

        // let btnUp = document.querySelector(".btn-up");
        // let btnDown = document.querySelector(".btn-down");
        // let cur = document.querySelector(".current1");
        // let ul = document.querySelector("section>ul");
        // btnUp.onclick = function () {
        //     if (ul.firstElementChild !== cur) {
        //         let tmp = ul.replaceChild(cur, cur.previousElementSibling);
        //         // cur.append(tmp);
        //         cur.insertAdjacentElement('afterend' , tmp);
        //     }

        // };

        // btnDown.onclick = function () {

        //     if (ul.lastElementChild !== cur) {
        //         let tmp = ul.replaceChild(cur, cur.nextElementSibling);
        //         ul.insertBefore(tmp, cur);
        //     }

        // }



        //생성

        //     let node1 = document.createTextNode("hello");
        //     document.body.append(node1);
        // let e1 = this.document.createTextNode("hhh");
        // let ul = s1.querySelector("ul");
        // let li = this.document.createElement("li");
        // ul.appendChild(li);

        // li2.innerText(e1);

    }


    //선택
    {
        // let s1 = document.body.getElementsByClassName("section1");
        // console.log(s1);

    }
});