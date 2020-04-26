const express = require('express')
const fetch = require('node-fetch')
require('dotenv').config()
const token=process.env.FULL_CONTACT_API_KEY

const router = new express.Router()
// POST  body= {email=aviadshiber@gmail.com}
router.post('/getinfo',async  (req, res) => {
    const email = req.body.email
    console.log(email)
    await fetch('https://api.fullcontact.com/v3/person.enrich',{
        method: 'POST',
        headers: {
            "Authorization": "Bearer "+token
        },
        body: JSON.stringify({"emails": [email]})
    })
    .then(res=> res.json() )
    .then(person=>{
        var address ='NA'
        console.log(person.fullName)
        console.log(person.gender)
        if(person.details.locations.length>0){
            address=`${person.details.locations[0].city}-${person.details.locations[0].country}`
            console.log(address)
        }
        res.send({
            "fullName" :person.fullName,
            "gender": person.gender,
            "address": address
        })
    })
    .catch(err => res.status(500).send(err))
   

});



module.exports= router