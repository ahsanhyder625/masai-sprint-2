var exp=0,bal=0,inc=0
document.getElementById('button').addEventListener('click',add)
function add(){
    var amo=document.getElementById("amoun")
    var typ=document.getElementById("typ")
    document.getElementById('exptyp').value='salary'
    if(typ.value=='Income'){
        inc+=amo.value
        bal+=amo.value
    }
    else{
        exp+=amo.value
        bal-=amo.value
    }
    document.querySelector(".inco").textContent=parseInt(inc)
    document.querySelector(".expen").textContent=parseInt(exp)
    document.querySelector(".bala").textContent=parseInt(bal)
    amo.value=''
    typ.value='Income'
    
}