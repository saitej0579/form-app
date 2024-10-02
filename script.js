let show = document.querySelector(".show");
const showing = document.querySelector(".showing");
const firstname = document.querySelector(".firstname");
const Lastname = document.querySelector(".Lastname");
const Roll = document.querySelector(".Roll");
const Branch = document.querySelector(".Branch");
const Year = document.querySelector(".Year");
const button = document.querySelector(".button");
const showButton = document.querySelector(".show-button");

let firstnamelist = [];
let Lastnamelist = [];
let Rolllist = [];
let Branchlist = [];
let Yearlist = [];

button.addEventListener("click",()=>{
    if(firstname.value==""||Lastname.value==""||Roll.value==""||Branch.value==""||Year.value==""){
        window.alert("enter all");
    }
    else{
        store(firstname,Lastname,Roll,Branch,Year);
        // show.innerText = firstname.value+" "+Lastname.value+" "+Roll.value+" "+Branch.value+" "+Year.value;
        firstname.value="";
        Lastname.value="";
        Roll.value="";
        Branch.value="";
        Year.value="";
        displayNamelist(); 
    }
})

showButton.addEventListener("click",()=>{
    showing.classList.add("active");
    
});

function displayNamelist() {
    // Clear the show element
    show.innerHTML = "";
    
    // Loop through the arrays and display the data
    for(let i = 0; i < firstnamelist.length; i++) {
        show.innerHTML += (i + 1) + ". " + firstnamelist[i] + " " + Lastnamelist[i] + " " + Rolllist[i] + " " + Branchlist[i] + " " + Yearlist[i] + "<br>";
    }
}

function store(firstname,Lastname,Roll,Branch,Year){
    firstnamelist.push(firstname.value);
    Lastnamelist.push(Lastname.value);
    Rolllist.push(Roll.value);
    Branchlist.push(Branch.value);
    Yearlist.push(Year.value);
}