fetch('http://127.0.0.1:3000/api/info ', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: 'same-origin', // include, *same-origin, omit
    headers:{
        'Content-Type':'application/json',
        'X-Auth-Token':'',
        'X-User-Id':'',
    },
    // body: JSON.stringify({
    //     user: 'javier',
    //     password: 'admin123'
    // })
})
.then(res => console.log(res))
//.then(data => console.log(data))
//.catch(error => console.log('Error...'))
 
