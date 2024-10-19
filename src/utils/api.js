import axios from 'axios'
import useSWR from 'swr'

const DEADLOCK_ASSETS_API = 'https://assets.deadlock-api.com'

export const fetcher = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('[utils][fetcher] Error response:', error.response.data)
      throw new Error(
        `Error: ${error.response.status} - ${error.response.data.message || 'Request failed'}`
      )
    } else if (error.request) {
      // No response was received
      console.error('[utils][fetcher] Error request:', error.request)
      throw new Error('No response received from the server')
    } else {
      // Something else happened
      console.error('[utils][fetcher] Error message:', error.message)
      throw new Error('Request error: ' + error.message)
    }
  }
}

export const fetchItemsBySlotType = (slotType) => {
  return useSWR(
    `${DEADLOCK_ASSETS_API}/v2/items/by-slot-type/${slotType}`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  )
}
