import  { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome page');
});
router.post('/todos',async (req, res) => {
  let [data]= await db.query(`SELECT * from todos `)

    res.json(data)
})