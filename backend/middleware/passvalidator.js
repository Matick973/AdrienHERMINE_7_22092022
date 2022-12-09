var passwordValidator = require('password-validator');

module.exports = (req, res, next) => {

    let schemaPassword = new passwordValidator();
    let bodyPassword = req.body.password
    console.log(bodyPassword)

    if(schemaPassword.validate(bodyPassword)){
        
        schemaPassword
        .is().min(6)                                    // Minimum length 6
        .is().max(100)                                  // Maximum length 100
        //.has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        //.has().digits(2)                                // Must have at least 2 digits
        .has().not().spaces()                           // Should not have spaces
        .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values
        
        next()

    } else {
        return res.status(401).json({error: 'Mot de passe invalide !'+ schemaPassword.validate('req.body.password', {list: true})})                 // Error 401 Unauthorized
    }
    
} 