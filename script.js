const wrapper =document.querySelector('.wrapper');
const loginLink = document.querySelector('.Login-link');
const registerlink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnLogin-popup');

//console.log(btnpopup)
console.log(registerlink)


btnpopup.addEventListener('click',()=>{
   // console.log('basıldı')
    wrapper.classList.add('active-popup')
})


registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
    console.log('basıldı')
});

const iconclose =document.querySelector('.icon-close')

registerlink.addEventListener('click',()=> {
    wrapper.classList.remove('.active');
});

iconclose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});



