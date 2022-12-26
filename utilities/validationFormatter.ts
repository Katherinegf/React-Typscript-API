export const validateText = (elementName: string, value: string, minLength:number = 2) => {
    if (value.length == 0)
    return `${elementName} is required`
else if (value.length <minLength)
    return  `${elementName} must contain a minimum of {minLength} characters`
else
return ''

}

export const validateEmail = (elementName: string, value:string, regEx: RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ) => {
    if (value.length == 0)
    return `${elementName} is required`
else if (!regEx.test(value))
    return  `${elementName} must be a valid email address`
else
return ''
}