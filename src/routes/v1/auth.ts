import express from 'express';
import { login } from '../../services/auth';
const router = express.Router();


router.post('/login', async function(req, res, next) {
	const {email, password } = req.body;
	let data = await login(email, password);
	if(data) {
		res.json(data);
		res.status(200)
		return
	}
	res.status(400).send({msg: 'Failed to login!'})
});
export default router;