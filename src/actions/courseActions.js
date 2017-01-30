import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export const loadCourses = () => dispatch =>
  courseApi.getAllCourses().then(courses => {
    dispatch(loadCoursesSuccess(courses));
  }).catch(error => {
    throw(error);
  });
