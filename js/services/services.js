const postData = async (url, data) => {          //связка операторов async/await для синхронизации кода
    const res = await fetch(url, {           
         method: "POST",
         headers: {
             'Content-type': 'application/json'
         },                
         body: data     //если формат json            
    });
    return await res.json();
};

async function getResource(url) {          //связка операторов async/await для синхронизации кода
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url} ${res.status}`); //метод избежать невидимой ошибки, когда promise из фетч не реагирует на http ошибки
    }
    return await res.json();
}


export {postData};

export {getResource};