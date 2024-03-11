    //document 객체 API를 호출하여 버튼 요소의 참조를 반환받음.
    let myBtn= window.document.getElementById("myBtn");
    let numP = document.getElementById("num"); 
    let num = 0;
    let yourBtn = document.getElementById("yourBtn");

    yourBtn.addEventListener("click", (e)=>{
         num--;
         numP.textContent = num;
    });

    myBtn.addEventListener("click", function (e){
         console.log("이벤트 발생 확인");
         num++;
         numP.textContent = num
     });
