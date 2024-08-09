function onePromise(){
    return new Promise((resolve)=>{
        function firstFunction(){
            const script =document.createElement('script');
            script.src = "https://sibiro.ru/script/includePageSection.js";
            document.body.append(script);
        };
        resolve(firstFunction());
    });
};
// onePromise();
function twoPromise(){
    // console.log('Two');
    return new Promise((resolve)=>{
        // console.log('resolve oK and TwoPromise');
        function loadIsMenu(){
            setTimeout(()=>{
                // console.log('set TimeOut');
                const menu=document.createElement('script');
                menu.src = "https://sibiro.ru/script/navbar.js";
                document.body.append(menu);
            },2700);
        };
        resolve(loadIsMenu());
    });
};

function threeth(){
    return new Promise((resolve) => {
        function oK(){
            let oK='threeth and he working resolve three function FINALLY';
            console.log('oK to go writer code!'+"<br>"+oK);
        }
            resolve(oK);
            // toGoOnWriteAtThePage(oK);
    });
};
async function onClickMenuCan(){
    
    await onePromise();
    
    await twoPromise();

    await threeth();
};
// onClickMenuCan();
window.addEventListener('DOMContentLoaded',onClickMenuCan);
