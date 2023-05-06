// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const api_url="http://127.0.0.1:8000/api";

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
