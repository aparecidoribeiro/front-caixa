

export const validateInputs = (data) => {
    const arrayDate = Object.values(data)
    return arrayDate.some((value) => value.trim() == "")
}

