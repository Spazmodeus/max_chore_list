const dateDigits = (dd) => {
    let sd = dd?.length == 1
    let final = sd ? `0${dd}` : `${dd}`

    return final
}

export const formatDate = (dt) => {

    let retObj = {date: null, unix: dt, js: ''}
    let d = new Date(dt)
    let date = d.toLocaleDateString()
    let array = date.split('/')
    let revDate = `${array[2]}-${dateDigits(array[1])}-${dateDigits(array[0])}`

    retObj.date = date
    retObj.js = revDate
    retObj.unix = dt

    return retObj

}