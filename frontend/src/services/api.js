import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const register = async (walletAddress, username, email) => {
  console.log(API_URL)
  const response = await axios.post(`${API_URL}/register`, {
    wallet_address: walletAddress,
    username,
    email
  })
  return response.data
}