import axios from 'axios';
import { GetApplications, FailedGetApplications } from '../typeAuth';

function callingBacking(token) {
  console.log('isfiltered is true');
  let filterArray = [];
  let filterValues;
  for (const [key, value] of Object.entries(token)) {
    if (key !== 'token') {
      filterValues = key + '=' + value;
      filterArray.push(filterValues);
    }
  }
  console.log('filterArray', filterArray);
  return filterArray.join('&').toString();
}

export async function getApplicationsActionCreator(token) {
  //     console.log('tokkkkkkkkeeeeen ',token.title);
  //     console.log('tokkkkkkkkeeeeen ',token.value);
  //     console.log('tokkkkkkkkeeeeen ',token.token);

  axios.defaults.headers = {
    Authorization: `Bearer ${token.token}`,
  };

  try {
    let builtString = callingBacking(token);

    console.log('the string', builtString);

    const request = await axios.get(
      `http://localhost:5000/getUserApplications?${builtString}`
    );
    // const request = await axios.get(
    //   `https://glacial-wave-31511.herokuapp.com/getUserApplications?${builtString}`
    // );

    //     console.log('requesttt ',request.data);

    return {
      type: GetApplications,
      payload: request.data,
    };
  } catch (e) {
    console.log('ERROR....!!!', e);

    return {
      type: FailedGetApplications,
      payload: 'No Applications!!',
    };
  }
}
