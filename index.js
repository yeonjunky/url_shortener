let input = document.getElementById('input');
let result = document.getElementById('result');
let count = 0

input.onclick = () => {
    
    if(count === 0){
        input.value = ''
        count = 1;
    }else{
        // do nothing!
    }
}
function get_link(long_url, html_tag) {
    let url = 'https://api-ssl.bitly.com/v4/shorten';
    fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': '{type_yours!}',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'long_url': long_url, 'domain': 'bit.ly', 'group_guid': '{type_yours!}'})
    }).then(response => response.json())
      .then(data => html_tag.innerHTML = data.link)
      .catch(error => console.log(error))
  }


input.addEventListener('keypress', function(event) {
    if (event.key == 'Enter') {
        if (input.value.slice(0, 9) === 'https://') {
            get_link(input.value, result);
        } else{
            get_link('https://' + input.value, result);
        }
    }
});
