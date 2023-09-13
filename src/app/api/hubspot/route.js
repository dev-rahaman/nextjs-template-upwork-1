import { NextResponse } from 'next/server'

export async function POST(req) {
  const formData = await req.json()
  const formGuid = process.env.FORM_GUID
  const portalId = process.env.PORTAL_ID
  const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

  const response = await fetch(hubspotEndpoint, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  })

  const data = await response.json()
  return NextResponse.json({ data })
}
