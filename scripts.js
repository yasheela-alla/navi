document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input');
    const output = document.querySelector('.output');

    const commands = {
        help: 'Available commands: help, cyberpunk, anime, trick, clear, hack, neko, fortune',
        cyberpunk: 'Cyberpunk 2077 is a 2020 action role-playing game developed and published by CD Projekt.',
        anime: 'My Neighbor Totoro is a 1988 Japanese animated fantasy film produced by Studio Ghibli.',
        trick: 'You can use "grep" to search text in files quickly. Try "grep -r \'your_text\' ."',
        clear: '',
        hack: 'Initiating hack sequence... Access granted! You now have admin privileges.',
        neko: 'Neko (猫) means "cat" in Japanese. Fun fact: Cats are considered lucky in Japan!',
        fortune: 'Your future is as bright as the sun! Keep coding and you will achieve great things.'
    };

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const command = input.value.toLowerCase();
            if (command in commands) {
                if (command === 'clear') {
                    output.innerHTML = '';
                } else {
                    output.innerHTML += `<p>${commands[command]}</p>`;
                }
            } else {
                output.innerHTML += `<p>Command not found: ${command}</p>`;
            }
            input.value = '';
            output.scrollTop = output.scrollHeight;
        }
    });
});
