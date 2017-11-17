import { key, username } from './key';
import axios from 'axios';

const textFetch = (coreValues, student) => {
  const params = new URLSearchParams();
  const returnVals = Object.keys(coreValues).filter(coreValue => coreValues[coreValue] !== 0);
  const corePoints = JSON.stringify(returnVals);
  params.append('From', '+15024132624');
  params.append('To', '+15029052136');
  params.append('Body', `Today ${student} earned points for: ${corePoints}!`);
  return axios.post(
    'https://api.twilio.com/2010-04-01/Accounts/AC43c94ecb98aad96e0a5ce0d4409ea362/Messages.json',
    params,
    {
      auth: {
        username: username,
        password: key
      }
    }
  ).then(res => {
    return res.data;
  });
};

export default textFetch;
