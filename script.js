const dataAraay = [
    {
        userId: 1,
        userName: 'სახელი 1',
        userLastName: 'გვარი 1',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 20,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 2,
        userName: 'სახელი 2',
        userLastName: 'გვარი 2',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 30,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 3,
        userName: 'სახელი 3',
        userLastName: 'გვარი 3',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 35,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 4,
        userName: 'სახელი 4',
        userLastName: 'გვარი 4',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 29,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 5,
        userName: 'სახელი 5',
        userLastName: 'გვარი 5',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 49,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 6,
        userName: 'სახელი 6',
        userLastName: 'გვარი 6',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
    {
        userId: 7,
        userName: 'სახელი 7',
        userLastName: 'გვარი 7',
        userImage: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        userAge: 31,
        userAddresses: [
            'address 1',
            'address 2',
            'address 3'
        ]
    },
];

function addDiv(dataAraay,MainDiv) {
MainDiv = document.createElement('div')
dataAraay.forEach(person => {
    
    var section = document.querySelector('section');
    MainDiv.className='MainDiv';
    
    section.appendChild(MainDiv);
    

    MainDiv.innerHTML = MainDiv.innerHTML + `
    <div class="SecondaryDiv";>
            <h1>${person.userId}</h1>
            <img src="${person.userImage}" alt="">
            <div>
                <h2>${person.userName}</h2>
                <h2></h2>${person.userLastName}</h2>
                <h2></h2>${person.userAge}</h2>
                <h2></h2>${person.userAddresses}</h2>
            </div>
    </div>

            `
});

let hoverdiv = document.querySelectorAll('.SecondaryDiv');

hoverdiv.forEach((user)=>{
    user.addEventListener('click',()=>{
        user.classList.toggle('hoverme');
    })
});
}

addDiv(dataAraay)