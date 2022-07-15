// const {User} = require('../models/user-model')
// const bcrypt = require('bcrypt')
// const uuid = require('uuid')
// const mailService = require('./mail-service')
// const tokenService = require('./token-service')
// const UserDto = require('../dtos/user-dto')

// class UserService {
//     async registartion(email, password) {
//         const condidate = await User.findOne({email})
//         if(condidate){
//             throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
//         }
//         const hashPassword = await bcrypt.hash(password, 3);
//         const activationLink = uuid.v4();

//         const user = await User.create({email, hashPassword, activationLink})
//         await mailService.sendActivationMail(email, activationLink)
        
//         const userDto = new UserDto(user);
//         const tokens = tokenService.generateTokens({...userDto})
//         await tokenService.saveToken(userDto.id, tokens.refreshToken)

//         return { ...tokens, user: userDto, }
//     }
// }

// module.exports = new UserService();