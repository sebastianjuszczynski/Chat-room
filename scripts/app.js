const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-mssg');

newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim(); 
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

newNameForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = newNameForm.name.value.trim();
    chatroom.updateName(username);
    newNameForm.reset();
    updateMessage.innerText = `Your name was updated to ${username}`;

    setTimeout(() => {
        updateMessage.innerText = ``;
    }, 3000)
    
    
})

const username = localStorage.username ? localStorage.username : "unknown"

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

chatroom.getChats((data) => {
    chatUI.render(data)
});