import {
  GET_DASHBOARD_REQUEST,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAILED
} from '../types/dashboardTypes';

const initialState = {
  getDashboardWorkerIsBusy: false,
  dashboardData: [],
  getDashboardFailMessage: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_REQUEST:
      return { ...state, getDashboardWorkerIsBusy: true };
    case GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        getDashboardWorkerIsBusy: false,
        dashboardData: [...action.payload]
      };
    case GET_DASHBOARD_FAILED:
      return {
        ...state,
        getDashboardWorkerIsBusy: false,
        getDashboardFailMessage: action.payload
      };
    default:
      return state;
  }
};
