const express = require('express');
module.exports = function (nav) {
  const router = express.Router();

  let data = [
    { id: 1, name: 'Akash', designation: 'Software Engineer', location: 'TVM', salary: 30000 },
    { id: 2, name: 'Sakhi', designation: 'Senior Manager', location: 'Kollam', salary: 28000 },
    { id: 3, name: 'John', designation: 'Frontend Developer', location: 'Malappuram', salary: 40000 },
    {
      id:4,
      name: 'Alice',
      designation: 'Python Developer',
      location: "Thrissur",
      salary: 39000
    }
  ]

  router.get('/', (req, res) => {
    res.render("home", { title: 'Home Page', data, nav });
  })

  router.get('/form', (req, res) => {
    res.render("addemployee", { title: 'Add Employee', nav });
  })

  router.post('/add', (req, res) => {
    const { name, age, location, designation, salary } = req.body;
    data.push({
      id: data.length + 1,
      name,
      location,
      designation,
      salary
    })
    res.redirect('/basic');
  })


  router.get('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const employee = data.find(emp => emp.id === id);
    res.render("edit", { title: "Edit Employee", nav, employee });
  })

  router.post('/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(emp => emp.id === id);
    if (index !== -1) {
      data[index] = {
        id,
        name: req.body.name,
        age: parseInt(req.body.age),
        designation: req.body.designation,
        location: req.body.location,
        salary: req.body.salary
      };
    }
    res.redirect('/basic');
  });

  router.get('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    data = data.filter(emp => emp.id !== id);
    res.redirect('/basic');
  })

  return router
}