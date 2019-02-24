import { Injectable } from '@angular/core';
import { CourseItem } from 'components/app-main/constants';

export const UPDATE_USER_NAME = 'UPDATE_USER_NAME';
export const RESET_USER_NAME = 'RESET_USER_NAME';
export const GET_INITIAL_USER_NAME = 'GET_INITIAL_USER_NAME';
export const ADD_COURSE_ITEMS = 'ADD_COURSE_ITEMS';
export const RESET_COURSE_ITEMS = 'RESET_COURSE_ITEMS';
export const CHANGE_SEARCH_RESULTS = 'CHANGE_SEARCH_RESULTS';

export interface Action {
   type: string;
   payload: any;
}

export interface IdleAction {
   type: string;
}

export class UpdateUserName implements Action {
   readonly type = UPDATE_USER_NAME;

   constructor(public payload: string) {}
}

export class ResetUserName implements IdleAction {
   readonly type = RESET_USER_NAME;

   constructor() {}
}

export class GetInitialUserName implements IdleAction {
   readonly type = GET_INITIAL_USER_NAME;

   constructor() {}
}

export class AddCourseItems implements Action {
   readonly type = ADD_COURSE_ITEMS;

   constructor(public payload: CourseItem[]) {}
}

export class ResetCourseItems implements Action {
   readonly type = RESET_COURSE_ITEMS;

   constructor(public payload: CourseItem[]) {}
}

export class ChangeSearchResults implements Action {
   readonly type = CHANGE_SEARCH_RESULTS;

   constructor(public payload: CourseItem[]) {}
}
