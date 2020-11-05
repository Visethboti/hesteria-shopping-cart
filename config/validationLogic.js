function isValidEmail(email) {
    email = email.toLowerCase();
    if(email.includes('@')){
        if(email.lastIndexOf(".com") == email.length-4){
            return true;
        }
    }
    return false;
}

function isValidPassword(password) {
    if(password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

module.exports = {isValidEmail, isValidPassword};