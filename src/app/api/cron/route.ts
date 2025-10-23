import axios from 'axios'

export async function GET() {
  try {
    const res = await axios.get('https://api-nami.onrender.com/api/v1/health')
    return Response.json(res.data)
  } catch (err: any) {
    const message = err?.message || err
    return new Response(JSON.stringify({ error: message }), { status: 500 })
  }
}
