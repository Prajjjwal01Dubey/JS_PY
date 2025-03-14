const p =  new Promise((res,_)=>{
    setTimeout(()=>{
        res("promise resolved yaaaaaaay!!!!!")
    },1)
})

function main(){
    console.log("A")
    setTimeout(()=>{
        console.log("inside the 1 set timeout.")
        setTimeout(()=>{
            console.log("inside the 2 settimeout")
        },1)
    },1)
    p.then((res)=>console.log(res)).catch((err)=>console.log(err))
    console.log("B")
}

main()