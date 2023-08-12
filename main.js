const fullName = document.querySelector("#fullName");
const fullNumber = document.querySelector("#fullNumber");
const btn = document.querySelector("#btn");
const listContent = document.querySelector(".listContent");
const search = document.querySelector("#search");


const people = [];

btn.addEventListener("click", function () {

    if (fullName.value === "" || fullNumber.value === "") {

        alert("heyyyyyyy")
        return;

    } else {

        const newPerson = {
            fullName: fullName.value,
            fullNumber: fullNumber.value
        }

        people.push(newPerson);
        listpeopleFunc(people);
        fullName.value = "";
        fullNumber.value = "";

    };
});

search.addEventListener("keyup", function (e) {

    var temp = people.filter(item => item.fullName.includes(e.target.value))
    listpeopleFunc(temp);
    if (listContent.innerHTML === "") {
        listContent.innerHTML = "<h3>Gösterilecek bilgi yok</h3>"
    }
})

function listpeopleFunc(people) {
   


    listContent.innerHTML = "";
   

    for (let i = 0; i < people.length; i++) {
        const div = document.createElement("div");
        div.classList.add("content")
        const h3 = document.createElement("h3");
        h3.innerText = [i + 1] + ".) " + people[i].fullName;
        const p = document.createElement("p");
        p.innerText = people[i].fullNumber;
        div.appendChild(h3);
        div.appendChild(p);
        listContent.appendChild(div);


    }

}

















