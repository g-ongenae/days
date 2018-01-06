const getMessage = () => {
    const date = new Date();
    const hours = date.getHours();
    let message;
    
    if (hours >= 6)
        message = 'Good Morning';
    if (hours >= 12)
        message = 'Good Afternoon';
    if (hours >= 16)
        message = 'Good Evening';
    if (hours >= 22 || hours < 6)
        message = 'Good Night';
  
    return message;
};

document
    .getElementById('message')
    .innerHTML = getMessage();