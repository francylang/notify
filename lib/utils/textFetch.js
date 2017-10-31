import { key, username } from './key'

async const textFetch = (event) => {
  const params = new URLSearchParams();
  params.append('From', '+15024132624');
  params.append('To', '+15029052136');
  params.append('Body', 'Your student just earned a character point!');
  const response = await axios.post(
    'https://api.twilio.com/2010-04-01/Accounts/AC43c94ecb98aad96e0a5ce0d4409ea362/Messages.json',
    params,
    {
      auth: {
        username: username,
        password: key
      }
    }
  ).then(res => res.data)
  console.log(response)
  return response;
}

export default textFetch;
