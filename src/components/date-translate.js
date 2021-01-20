const dateTranslate = (date) => {
    const arr = date.split(' ')
    const data = arr[0].split('-')
    switch (data[1]) {
        case '01':
            data[1] = 'Январь'
            break
        case '02':
            data[1] = 'Февраль'
            break
        case '03':
            data[1] = 'Март'
            break
        case '04':
            data[1] = 'Апрель'
            break
        case '05':
            data[1] = 'Май'
            break
        case '06':
            data[1] = 'Июнь'
            break
        case '07':
            data[1] = 'Июль'
            break
        case '08':
            data[1] = 'Август'
            break
        case '09':
            data[1] = 'Сентябрь'
            break
        case '10':
            data[1] = 'Октябрь'
            break
        case '11':
            data[1] = 'Ноябрь'
            break
        case '12':
            data[1] = 'Декабрь'
            break
        default:
            return ''
    }
    return `${data[1]} ${data[2]}, ${data[0]} - ${arr[1]}`
}

export default dateTranslate