import {
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAILED
} from '../types/dashboardTypes';

import { get } from '../../utilities/requestMaker';

const getDashboardRequest = () => ({
  type: GET_DASHBOARD_REQUEST
});

const getDashboardSuccess = result => ({
  type: GET_DASHBOARD_SUCCESS,
  payload: result
});

const getDashboardFailed = message => ({
  type: GET_DASHBOARD_FAILED,
  payload: message
});

export const getDashboardData = () => {
  return async dispatch => {
    dispatch(getDashboardRequest());

    try {
      let {
        data: { menus: result }
      } = await get('/restaurant/new-details', {
        vendorCode: '0jyw5g',
        lat: 35.773762924116,
        long: 51.418259659771
      });

      dispatch(getDashboardSuccess(result));
    } catch (e) {
      dispatch(getDashboardFailed(e));
    }
  };
};
