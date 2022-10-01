function dividir(num1,num2){
    if(num1==0||num2==0){
        return 'error: no puedo dividir entre 0'
    }
    return num1/num2
}

// console.log(dividir(3,9))
// console.log(dividir(0,9))
// console.log(dividir(3,0))

module.exports = dividir