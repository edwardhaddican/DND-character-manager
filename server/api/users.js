const router = require('express').Router()
const {User} = require('../db/models')
const isAdminMiddleware = require('../auth/isAdmin')
const isUserMiddleware = require('../auth/isUser')
module.exports = router

// router.get('/', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       // explicitly select only the id and email fields - even though
//       // users' passwords are encrypted, it won't help if we just
//       // send everything to anyone who asks!
//       attributes: ['id', 'email']
//     })
//     res.json(users)
//   } catch (err) {
//     next(err)
//   }
// })   ***this was the original get route from boilermaker

router.get('/', isAdminMiddleware, async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', isUserMiddleware, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      // salt: {},
      imageUrl: req.body.imageUrl,
      googleId: req.body.googleId
    })
    res.status(201).redirect('/login')
  } catch (err) {
    next(err)
  }
})

router.put('/:id', isUserMiddleware, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    })
    await user.update(req.body)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', isAdminMiddleware, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    })
    if (user.isAdmin) {
      return res.status(403).redirect('/allusers')
    }
    await user.destroy()
    res.status(200).send('User deleted.')
  } catch (err) {
    next(err)
  }
})
