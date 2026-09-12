const cards = document.getElementById("cards");

for(let i=1; i<=5; i++){
    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = ` 
           <img src="photo.nikhil.jpg" alt="Nikhil" class="image">
           <h1>Nikhil ${i}</h1>
           <p><b>Blood:<b>B+ve</p>
           <p><b>Reg. No :<b>2411065</p>`

           cards.appendChild(card);
}

// const cards = document.getElementById("cards");

// async function getUsers() {

//     const response = await fetch(
//         "https://randomuser.me/api/?results=5"
//     );

//     const data = await response.json();

//     data.results.forEach(user => {

//         const card = document.createElement("div");

//         card.className = "card";

//         card.innerHTML = `
//             <img 
//                 class="image"
//                 src="${user.picture.large}"
//                 alt="${user.name.first}"
//             >

//             <h2>${user.name.first} ${user.name.last}</h2>

//             <p><b>Gender:</b> ${user.gender}</p>

//             <p><b>Email:</b> ${user.email}</p>

//             <p><b>Phone:</b> ${user.phone}</p>

//             <p><b>Country:</b> ${user.location.country}</p>
//         `;

//         cards.appendChild(card);
//     });
// }

// getUsers();


