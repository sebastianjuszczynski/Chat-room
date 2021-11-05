const chatroom = new Chatroom('general', 'seba');

chatroom.getChats((data) => {
    console.log(data)
});