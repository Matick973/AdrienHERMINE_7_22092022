const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.cookies.access_token                               // division espace entre bearer et le Token en position 2 (0=1)
        const decodedToken = jwt.verify(token, 'STUDENT_TOKEN_OCR_2022_FOR/P7&20220922')    // décodage du Token 
        const userId = decodedToken.userId                                                  // récupération ID utilisateur contenu dans le Token
        req.auth = {                                                                        // transmittion aux routes
            userId : userId
        }
        next()
    } catch(error) {
        res.status(401).json({ error })                                                     // Error 401 Unauthorized
    }
}

//https://dev.to/franciscomendes10866/using-cookies-with-jwt-in-node-js-8fn