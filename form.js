const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");
    

nextBtn.addEventListener("click", (event)=> {
    event.preventDefault();

    const  allInput = document.querySelectorAll(".first div div input");

    let newArr1 = [];

    allInput.forEach(input => {
        newArr1.push(input.value)
    });

    if(newArr1.includes("")){
        form.classList.remove('secActive');
        swal({
            title: "Fields Empty!!!",
            text: "Please input the missing field!",
            icon: "warning",
            button: "Ok",
            });
    }else{
        form.classList.add('secActive');
        
    }
})

backBtn.addEventListener("click", () => {form.classList.remove('secActive')});

//

document.getElementById("submitBtn").addEventListener('click', (e) => {
    e.preventDefault();


    const inputVal = document.querySelectorAll(".input-field input")

    let newArr = [];

    inputVal.forEach(input => {
        newArr.push(input.value)
    });

    if (newArr.includes('')) {
        swal({
            title: "Fields Empty!!!",
            text: "Please input the missing field!",
            icon: "warning",
            button: "Ok",
            });
     }
     else{
        swal({
            title: "Thank You!",
            text: "Your all set!",
            icon: "success",
            buttons: ["Download PDF file", "Done"],
            });
    }
});
