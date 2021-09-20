const { ProvinceCity } = require('./data')

module.exports.GetAllProvince = () => {
    const AllProvince = []
    ProvinceCity.forEach(element => {
        AllProvince.push(element.name)
    })
    return AllProvince
}

module.exports.GetAllCitysOfProvince = (ProvinceName) => {
    let data = []
    for (let index = 0; index < ProvinceCity.length; index++) {
        if (ProvinceCity[index].name === ProvinceName) {
            data = ProvinceCity[index].Cities
            break
        }
    }
    data = data.map(val => {
        return val.name
    })
    return data
}

module.exports.GetAllCitys = () => {
    let data = []

    for (let index = 0; index < ProvinceCity.length; index++) {
        data.push(...ProvinceCity[index].Cities)
    }
    data = data.map((val) => {
        return val.name
    })
    return data
}
