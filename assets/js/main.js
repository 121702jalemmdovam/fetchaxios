
const contactnameDiv=document.getElementById('contactname')
const companyname=document.getElementById('conpanyname')
const contacttitle=document.getElementById('contacttitle')
const idd=document.getElementById('idd')
const btn=document.getElementById('btn')
// FETCH GET

// fetch('https://northwind.vercel.app/api/customers')
// .then(res => res.json())
// .then(data => {
//     data.forEach(item => {
//         const p = document.createElement('p')
//         p.textContent = `${item.companyName} - ${item.contactName} - ${item.id}`
//         contactnameDiv.appendChild(p)
//     })
// })

//FETCH POST

// const button=document.getElementById('btn')
// btn.addEventListener('click', function () {
//     fetch('https://northwind.vercel.app/api/customers', {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             companyName: companyname.value,
//             contactTitle:contacttitle.value
//            }),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log("data gonderildi" + data);
//           });
// })


//FETCH DELETE

// btn.addEventListener('click',function(){
//         const idd = document.getElementById('idd').value;
//         let url = `https://northwind.vercel.app/api/customers${idd}`;
    
//             fetch(url, {
//               method: "DELETE",
//             }).then((res) => console.log(res))
//     })

// AXIOS GET

// axios.get("https://northwind.vercel.app/api/customers")
// .then((res) => {
//       console.log(res.data);
//     });

//  AXIOS POST

// btn.addEventListener('click',function(){
//     axios.post("https://northwind.vercel.app/api/customers", {
//             Companyname: companyname.value,
//             Contacttitle: contacttitle.value
//         }).then(res => {
//                 console.log(res);
//             })
// })

// AXIOS DELETE


// btn.addEventListener('click',function(){
//     axios.delete(`https://northwind.vercel.app/api/customers${companyname.value}`)
// })

