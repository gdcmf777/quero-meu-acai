// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'


type Data = {
  name: string
}

export default function index(req: NextApiRequest,res: NextApiResponse<Data>) {
	try {
		const rawData = fs.readFileSync(require.resolve('./db.json'))
		const jsonData = JSON.parse(rawData.toString())
		res.status(200).json(jsonData)
	} catch(err) {
		console.log("ERROR> ",err)
	}
}
