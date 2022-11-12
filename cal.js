let result = document.getElementById("inputxt");

// Input Array function
let calculate=(number)=>{
    result.value+=number;
}

// Result Array Function 
let Result=()=>{
    try{
        result.value = eval(result.value);
    }
    catch(err){
        alert("Enter the valid Input")
    }
}

// Clear Function
function clr(){
    result.value = " ";
}
// Delete Function
function del(){
    result.value = result.value.slice(0, -1);
}