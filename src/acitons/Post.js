const GET_POST_DATA = "GET_POST_DATA";

export const fetchPostData = (data) => ({
  type: GET_POST_DATA,
  payload: data,
});
