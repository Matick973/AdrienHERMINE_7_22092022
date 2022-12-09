exports.signUpErrors  = (err) => {
    let errors = {pseudo :'', email: '', password:''}

    if (err.message.includes('pseudo'))
        errors.pseudo = "Pseudo incorrect ou déjà pris"

    if (err.message.includes('email'))
        errors.email = "Email incorrect ou déja pris"

    if (err.message.includes('password'))
        errors.password = "Longueur minimum de 4 caractères"

    //if (err.code === 11000 & err.keyValue.includes('pseudo'))
    //    errors.pseudo = "Le pseudo est déjà pris"
    // if (err.code === 11000 & err.keyValue.includes('email'))
    //    errors.email = "L'email est déjà pris"

return errors
}

exports.signInErrors  = (err) => {
    let errors = {email: '', password:''}

    if (err.message.includes('email'))
        errors.email = "Email inconnu !"

    if (err.message.includes('password'))
        errors.password = "Mot de passe incorrect !"
        
return errors
}