import axios from 'axios'

export async function GET() {
  try {
    const res = await axios.get('https://nami-api.onrender.com/health')
    return Response.json(res.data)
  } catch (err: any) {
    const message = err.response?.data?.message || err.message || 'Error al hacer ping al servidor'
    return new Response(JSON.stringify({ error: message }), { status: 500 })
  }
}
