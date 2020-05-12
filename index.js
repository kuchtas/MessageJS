const form = document.querySelector('#message-form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const message = document.querySelector("#message");
    const lastMessage = document.querySelector('.lastMessage');
    const empty = document.querySelector('.empty');
    if(message.value === '')
    {
        empty.classList.add('visible');
        setTimeout(function(){
        empty.classList.remove('visible')
        }, 2000);
    }
    else
    {
        lastMessage.textContent = message.value;
        message.value = '';
    }
})