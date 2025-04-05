import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { proof } = req.body
  if (proof && proof.nullifier_hash) {
    res.status(200).json({ success: true })
  } else {
    res.status(400).json({ success: false })
  }
}
