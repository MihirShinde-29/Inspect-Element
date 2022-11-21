
export const ApiCalls = () => {
    return fetch("http://localhost:3500/payment",{
        method:'get'
    })
    .then(res => res.json())
    .catch((err)=>console.log(err))
}
