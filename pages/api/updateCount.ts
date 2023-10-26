import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { count } = req.body
  // Do something with the count
  res.status(200).json({ message: 'Count updated' })
}