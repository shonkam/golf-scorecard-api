import { Request, Response } from 'express'
import app from './src/config/app'
import { PORT } from './src/utils/variables'

app.get('/', (req: Request, res: Response) => {
  res.send("Golf Scorecard API")
})

app.listen(PORT, () => {
  console.log(`api is running on port ${PORT}`)
})
