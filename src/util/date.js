export const validDate = data => {
    const isValid = data.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)

    if(!isValid) return false

    return true
}

export const transformDate = data => {
    const splitDate = data.split('/');
    return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`
}