require('es6-promise').polyfill();
import axios from 'axios';
import qs from 'qs';
import { SubmissionError } from 'redux-form';

function submit(formData){
  let params = {'action': 'requestVoyageForm', 'formData': formData}
  const url = experiensa_vars.ajaxurl;
  return axios
  .post(url, qs.stringify(params))
  .then((response)=>{
    const rs = response.data
    // console.log('asdasd', response)
    if (rs.error) {
      throw new SubmissionError({
        _error: rs.message,
      });
    }
  })
  .catch((err)=>{
    // console.log('un error', err);
    if (e instanceof SubmissionError) throw err;
    throw new SubmissionError({
      _error: "Request error",
    });
  })
}
export default submit;