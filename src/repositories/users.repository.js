import userModel from "../dao/model/user.model.js"
import mongoose from "mongoose"

class UserRepository extends userModel {
    constructor() {
        super()
    }

    findUser = async (email) => {
        try {
            const user = await userModel.findOne({ email }, { email: 1, password: 1, role: 1, name: 1, surname: 1 })
            if (!user) {
                return "User not found"
            }
            return user;
        } catch (e) {
            console.error("Error finding user: ", e)
            return e
        }}

    addUser = async (user) => {
        try {
            const newUser = await userModel.create(user)
            return newUser
        } catch (e) {
            console.error("Error to addd user: ")
            return e
        }}

  obtainUsers = async () => {
    try {
        const users = await userModel.find()
        return users
    } catch (e) {
        console.error("Error obtaining users: ", e)
        return e
    }}

findEmail = async (param) => {
    try {
        const email = await userModel.findOne(param)
        return email
    } catch (e) {
        console.error("Error finding email: ", e)
        return e
    }
}

obtainUserByEmail = async (email) => {
    try {
        const user = await userModel.findOne({ email: email })
        return user
    } catch (e) {
        console.error("Error obtaining user by email: ", e)
        return e
    }
}
}

export default UserRepository
