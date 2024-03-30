
///<reference types="cypress"/>
import registerData from "../fixtures/registrationData.json"
import { registerPage } from "../pages/registerPage"
const register = new registerPage()

describe('Test Automation',()=>{
    it('TC 1 - Register Flow',()=>{
        register.openURL()
        register.enterFirstName(registerData.fname)
        .enterLastName(registerData.lName)
        .enterEmail(registerData.email)
        .enterTelephone(registerData.telephone)
        .enterPassword(registerData.password)
        .selectCheckBox()
        .clickContinueButton()                    
    })
})