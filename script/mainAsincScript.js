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
           
                // console.log('set TimeOut');
                const menu=document.createElement('script');
                menu.src = "https://sibiro.ru/script/navbar.js";
                document.body.append(menu);
       
        };
        setTimeout(()=>{
            resolve(loadIsMenu());
        },3777);
        
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
function year(){
    return new Promise((resolve)=>{
        function d(){
            const dat = new Date();
            let year = dat.getFullYear();
            document.querySelector("#year").innerHTML= "2010 — "+`${year}`;
        }
        setTimeout(()=>{
            resolve(d());
        },3777);
    });
}
async function onClickMenuCan(){
    
    await onePromise();
    
    await twoPromise();

    // await threeth();
    await year();
};
// onClickMenuCan();
window.addEventListener('DOMContentLoaded',onClickMenuCan);
