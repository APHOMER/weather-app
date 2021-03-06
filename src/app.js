const path = require('path')
const express = require('express');
const hbs = require('hbs')


const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static Directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Apho'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        helpText: 'About Aphomer',
        title: 'About',
        name: 'Apho Mercy'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help tips',
        course: 'ssg419',
        dept: 'systems engr.'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'Address Must be provided'
        })
    }
    console.log(req.query.address)
    res.send({
        forecast: "50degres",
        location: " Ilorin",
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
    title: 'Help 404',
    name: 'Aphomer',
    errorMessage: 'help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Apho',
        errorMessage: 'Page not Found'
    })
})


app.listen(3000, () => {
    console.log('Server is starting on port 3000')
})


