async function onClickMenuCan(){
    const one = new Promise(()=>{
        const script =document.createElement('script');
        script.src = "https://sibiro.ru/script/includePageSection.js";
        document.body.append(script);
    });
    
    const two = new Promise(()=>{
        setTimeout(()=>{
            const menu=document.createElement('script');
            menu.src = "https://sibiro.ru/script/navbar.js";
            document.body.append(menu);
        },1700);
       
    });
    await one;
    await two;
}
// onClickMenuCan();
window.addEventListener('DOMContentLoaded',onClickMenuCan);
