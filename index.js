let input = document.getElementById('input');
let count = 0

input.onclick = () => {
    
    if(count === 0){
        input.value = ''
        count = 1;
    }else{
        // do nothing!
    }
}

