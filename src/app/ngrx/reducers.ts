import { UPDATE_USER_NAME, RESET_USER_NAME, ADD_COURSE_ITEMS, RESET_COURSE_ITEMS, CHANGE_SEARCH_RESULTS } from './actions';
import { CourseItem } from 'components/app-main/constants';
import { State, Action } from 'interfaces/ngrx';
import { UserInfo } from 'interfaces/auth';

export const userNameReducer = (state: string = '', action: Action) => {
   switch (action.type) {
      case UPDATE_USER_NAME:
         return action.payload;
      case RESET_USER_NAME:
         return '';
      default:
         return state;
   }
};

export const courseItemsReducer = (state: CourseItem[] = [], action: Action) => {
   switch (action.type) {
      case ADD_COURSE_ITEMS:
         return state.concat(action.payload);
      case RESET_COURSE_ITEMS:
         return action.payload;
      default:
         return state;
   }
};

export const foundItemsReducer = (state: CourseItem[] = [], action: Action) => {
   switch (action.type) {
      case CHANGE_SEARCH_RESULTS:
         return action.payload;
      default:
         return state;
   }
};
