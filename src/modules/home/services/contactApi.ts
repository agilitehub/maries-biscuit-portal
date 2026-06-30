export type ContactMessagePayload = {
  name: string
  email: string
  message: string
}

type AgiliteResponse = {
  success?: boolean
  messages?: string[]
}

export async function sendContactMessage(payload: ContactMessagePayload): Promise<void> {
  const baseUrl = process.env.REACT_APP_AGILITE_API_URL
  const apiKey = process.env.REACT_APP_AGILITE_API_KEY

  if (!baseUrl || !apiKey) {
    throw new Error('Contact form is not configured.')
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, '')}/connectors/execute`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'profile-key': 'smtp',
      'route-key': 'send',
      'api-key': apiKey,
    },
    body: JSON.stringify(payload),
  })

  const data = (await response.json()) as AgiliteResponse

  if (!response.ok || data.success === false) {
    const message = data.messages?.join(' ') ?? `Request failed (${response.status})`
    throw new Error(message)
  }
}
