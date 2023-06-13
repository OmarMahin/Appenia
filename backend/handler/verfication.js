exports.emailVerification = (email)=>{

    return String(email).toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

}

exports.verifyLength = (string, min, max)=>{
    if (string.length < min || string.length > max){
        return false
    }

    return true
} 