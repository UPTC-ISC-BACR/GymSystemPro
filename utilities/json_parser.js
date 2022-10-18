const parseJSON = (arrayJSON) =>{
    console.log(arrayJSON)
    const arrayString = Object.keys(arrayJSON);
    const jsonObjet = JSON.parse(arrayString[0]);
    console.log(jsonObjet)
    return jsonObjet;
}

module.exports = {
    parseJSON
}