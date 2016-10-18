import axios from 'axios'
export const FeedsAction = (url) => {
  let data = axios.get(url)
  console.log(data)
  return {
    type: 'GOT_FEEDS',
    data: data
  }
}
