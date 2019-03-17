import { CourseItem } from 'components/app-main/constants';

export interface Action {
   type: string;
   payload: any;
}

export interface IdleAction {
   type: string;
}

export interface State {
   userName: string;
   courseItems: CourseItem[];
   foundItems: CourseItem[];
}
