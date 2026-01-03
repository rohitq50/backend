import express from 'express';
const router = express.Router();
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../../services/user';
import { userAuth } from '../../middlewares/basicAuth';

/* GET programming languages. */
router.get('/', userAuth, async function(req, res, next) {
  try {
	const data = await getUsers();
    res.status(200).json(data);
	return
  } catch (err: any) {
    console.error(`Error while getting db info `, err.message);
    next(err);
  }
});

router.get('/:id', userAuth, async function(req, res, next) {
	const { id } = req.params;
	let data = await getUser(Number(id));
	if(data) {
		res.json(data);
		res.status(200)
		return
	}
	res.status(400).send({msg: 'User Not found!'})
});

router.post('/', userAuth, async function(req, res, next) {
	let data = await createUser(req.body);
	if(data) {
		res.status(200).json(data).send({msg: 'Account created!'})
		return
	}
	res.status(400).send({msg: 'Failed to create!'})
});

router.put('/:id', userAuth, async function(req, res, next) {
	const { id } = req.params;
	const body = req.body;
	let data = await updateUser(Number(id), body);
	if(data) {
		res.status(200).send({msg: 'Account updated!'})
		return
	}
	res.status(400).send({msg: 'Failed to update updated!'})
});

router.delete('/:id', userAuth, async function(req, res, next) {
	const { id } = req.params;
	let data = await deleteUser(Number(id));
	if(data) {
		res.status(200).send({msg: 'Account deleted!'})
		return
	}
	res.status(400).send({msg: 'Failed to delete!'})
});
export default router;