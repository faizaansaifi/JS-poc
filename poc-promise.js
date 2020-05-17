//  1. Simple example of Promise  

const add = (a, b) => {
    return new Promise((resolve, reject) => {
            if(a < 0) {
                return reject('Both numbers should be greater then')
            }
            resolve(a+b)
    })
}


add(2,3).then((res)=>{
    console.log('Promise resolved: ',res)    
 }).catch(e => console.log('Promise rejected: ',e))




//  2.  Promise Chaining example for getting rid of nested code structure in .then()

const add = (a, b) => {
    return new Promise((resolve, reject) => {
            if(a < 0) {
                return reject('Both numbers should be greater then')
            }
            resolve(a+b)
    })
}

add(2,3).then((res)=>{
    console.log('Promise resolved: (1) => ',res)
    
    return add(res, 10)
 }).then((res) =>{     
    console.log('Result after another promise resolved: (2) => ', res)

    return add(res, 15)
 }).then((res) => {
     console.log('Promise resolved: (3) => ', res)

 }).catch(e => console.log('Promise rejected: ',e))
