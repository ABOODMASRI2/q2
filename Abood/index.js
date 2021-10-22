let imgNumber = ''
function getPhoto () {
    let isUniqueNumber = false
    while (!isUniqueNumber) {
        let num = generateRandomNumber() 
        if(num !== imgNumber) {
            imgNumber = num
            isUniqueNumber = true
        }
    }
    document.getElementById('image').src = `./assets/${imgNumber}.jfif`
}
function generateRandomNumber () {
    return Math.floor(Math.random()*3)+1
}