const express = require('express')
const fs = require('fs')
const products = require('../data/simulated_database')
const controller = express.Router()
let users = require('../data/simulated_database')
const { getDb } = require('../server/db/conn')

const { getProduct, getAllProducts, insertOne } = require('../services/productService') 

controller.param("id", (req, res, next, id) => {
    req.user = users.find(user => user.id == id)
    next()
})

controller.route('/populate')
    .post(async (req, res) => {

        index = 0
        async function insert(item) {
            var product = {
                productId: index,
                name: item.name,
                description: item.description,
                category: item.category,
                price: item.price,
                rating: item.rating
            }
            console.log(product.name)
            await insertOne(getDb(), product)
            console.log("Inserted product with index: " + index)

            index++


            // console.log(product)
        }

        // products.forEach((prod) => {
        //     console.log(prod.articleNumber)
        // })

        for(const index in [...products])
        {
            await insert(products[index])
        }

        res.status(200).json()

    })

controller.route('/cart/add/:id')
    .post((req, res) => {
        let id = req.params.id

        console.log(id)

        if(!id || isNaN(id)) {
            resp.status(400).json()
            return
        }


    })

controller.route('/image/:id')
    .get((req, resp) => {
        let id = req.params.id

        console.log(id)

        if(!id || isNaN(id)) {
            resp.status(400).json()
            return
        }
    
        const filePath = 'images/' + id + ".png"

        console.log(filePath)
    
        if(!fs.existsSync(filePath)) {
            resp.status(404).json()
            return
        }

        resp.download(filePath)
    })


// POST - CREATE - SKAPA EN ANVÄNDARE  http://localhost:5000/api/users /*skapar användare */
controller.route('/')
.post((httpRequest, httpResponse) => {
    let user = {
        id: users.length,
        firstName: httpRequest.body.firstName, 
        lastName: httpRequest.body.lastName,
        email: httpRequest.body.email,
        password: httpRequest.body.password
    }
    users.push(user)
    httpResponse.status(201).json(user)
})
.get((req, res) => {
    // console.log(users)
    // httpResponse.status(200).json(users)

    let take = req.params.take
    

    const dbConnect = getDb()

    getAllProducts(dbConnect).then((val) => {
        if(val) {

            if(take) {
                res.status(200).json(val.slice(0, take))
            } else
                res.status(200).json(val)

        }
        else
            res.status(404).json()
    })

})

// POST - CREATE - SKAPA EN ANVÄNDARE  http://localhost:5000/api/users/1 /*skapar användare */
controller.route("/:id")
.get((httpRequest, httpResponse) => {
    let id = httpRequest.params.id

    console.log(id)

    if(id != undefined && !isNaN(id)) {
        const dbConnect = getDb()

        getProduct(dbConnect, id).then(val => {
                if(val)
                    httpResponse.status(200).json(val)
                else
                    httpResponse.status(404).json()
            })
    } else {
        httpResponse.status(400).json()
    }


})
.put((httpRequest, httpResponse) => { /*uppdatera användare*/

    let id = httpRequest.params.id

    if(id != undefined) {

        try {
            let user = {...users[id]}

            console.log("------------ Received Body ----------------")
            console.log(httpRequest.body)
            console.log("-------------------------------------------")

            user.firstName = httpRequest.body.firstName ? httpRequest.body.firstName : user.firstName
            user.lastName = httpRequest.body.lastName ? httpRequest.body.lastName : user.lastName
            user.email = httpRequest.body.email ? httpRequest.body.email : user.email

            users[id] = user

            httpResponse.status(200).json(user)
        } catch {
            httpResponse.status(404).json()
        }

    } else {
        httpResponse.status(400).json()
    }

})
.delete((httpRequest, httpResponse) => {

    let id = parseInt(httpRequest.params.id)



    if (id != undefined){
        console.log(id)
        
        console.log(users.length)
        users = [...users].splice(id, 1)
        console.log(users.length)
        
        //users = users.filter(user => user.id !== id)
        httpResponse.status(204).json()
    }
    else
        httpResponse.status(404).json()

})



 


module.exports = controller