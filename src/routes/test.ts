import express, { Request, Response } from 'express'
import pg from 'pg'

const router = express.Router()

const pool = new pg.Pool()

router.get('/', async (req: Request, res: Response) => {
  try {
    const { rows } = await pool.query('SELECT * from test')

    res.json(rows)
  } catch (e: unknown) {
    console.log(e)
  }
})

export default router
