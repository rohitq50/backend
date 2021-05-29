import express from 'express';
const router = express.Router();
import helloDb from '../../services/helloDb';
import userAccount from '../../services/userAccount';

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await helloDb.getMultiple());
  } catch (err) {
    console.error(`Error while getting db info `, err.message);
    next(err);
  }
});

router.get('/login', async function(req, res, next) {
	let data = await userAccount.login("rohitq50@gmail.com", "asdfasdf");
	if(data) {
		res.json(data);
		res.status(200)
		return
	}
	res.status(400).send({msg: 'Failed to login!'})
});

router.get('/getUser', async function(req, res, next) {
	let data = await userAccount.getUser("rohitq50@gmail.com");
	if(data) {
		res.json(data);
		res.status(200)
		return
	}
	res.status(400).send({msg: 'Failed to getUser!'})
});

router.post('/createUser', async function(req, res, next) {
	let data = await userAccount.createUser("Rohit", "Kumar", "rohitq50@gmail.com", "qwerty", "M", "9557845833");
	if(data) {
		res.status(200).send({msg: 'Account created!'})
		return
	}
	res.status(400).send({msg: 'Failed to create!'})
});

router.post('/updateUser', async function(req, res, next) {
	let data = await userAccount.updateUser("Rohit", "Kumar", "rohitq50@gmail.com", "qwerty", "M", "9557845833");
	if(data) {
		res.status(200).send({msg: 'Account updated!'})
		return
	}
	res.status(400).send({msg: 'Failed to update updated!'})
});

router.get('/deleteUser', async function(req, res, next) {
	let data = await userAccount.getUser("rohitq50@gmail.com");
	if(data) {
		res.status(200).send({msg: 'Account deleted!'})
		return
	}
	res.status(400).send({msg: 'Failed to delete!'})
});




// import apikey from '../../auth/apikey';
// import signup from './access/signup';
// import login from './access/login';
// import logout from './access/logout';
// import token from './access/token';
// import blogList from './blog/blogList';
// import blogDetail from './blog/blogDetail';
// import writer from './blog/writer';
// import editor from './blog/editor';
// import user from './profile/user';

// const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
// router.use('/', apikey);
/*-------------------------------------------------------------------------*/

// router.use('/signup', signup);
// router.use('/login', login);
// router.use('/logout', logout);
// router.use('/token', token);
// router.use('/blogs', blogList);
// router.use('/blog', blogDetail);
// router.use('/writer/blog', writer);
// router.use('/editor/blog', editor);
// router.use('/profile', user);

export default router;