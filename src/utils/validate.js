
export const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password)
}

export const validateInputs = (data) => {
    const arrayDate = Object.values(data)
    return arrayDate.some((value) => value.trim() == "")
}

export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}

export const comparePasswords = (formData) => {
    return formData.password === formData.passwordConfirmation
}