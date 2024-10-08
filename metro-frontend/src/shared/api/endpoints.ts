import { transformUrl } from "src/shared/utils/transformUrl.ts";

export const AUTHENTICATE_ENDPOINT = transformUrl("/api/admin/account");
export const LOGIN_ENDPOINT = transformUrl("/api/admin/auth/login");
export const LOGOUT_ENDPOINT = transformUrl("/api/admin/auth/logout");
export const USERS_ENDPOINT = transformUrl("/api/admin/users");
export const LAYOUT_DATA_ENDPOINT = transformUrl("/api/admin/layout");
export const ADMIN_REQUESTS_ENDPOINT = transformUrl("/api/admin/requests");
export const ADMIN_REQUESTS_FILTER_ENDPOINT = transformUrl("/api/admin/requests/getListByFilter");
export const ADMIN_REQUESTS_CONFIRM_ENDPOINT = transformUrl("/api/admin/requests/confirm");
export const ADMIN_REQUESTS_CANCEL_ENDPOINT = transformUrl("/api/admin/requests/cancel");
export const NOTIFICATIONS_ENDPOINT = transformUrl("/api/admin/notifications");
export const EVENTS_ENDPOINT = transformUrl("/api/admin/events");
export const EMPLOYEES_ENDPOINT = transformUrl("/api/admin/employees");
export const REQUEST_INFO_ENDPOINT = transformUrl("/api/public/request/");
export const REQUEST_POST_ENDPOINT = transformUrl("/api/public/request");
export const REQUEST_CANSEL_ENDPOINT = transformUrl("/api/admin/requests/cancel");
export const GET_EMPLOYEES_ENDPOINT = transformUrl("/api/admin/employees");
export const SUBSCRIBE_ENDPOINT = transformUrl("/api/public/request/subscribe");
export const GET_PASSAGENS_ENDPOINT = transformUrl("/api/admin/passengers");
export const STATIONS_ENDPOINT = transformUrl("/api/admin/stations");
export const STATIONS_DRIVING_TIME_ENDPOINT = transformUrl("/api/admin/stationsDrivingTime");
export const STATIONS_TRANSFER_TIME_ENDPOINT = transformUrl("/api/admin/stationsTransferTime");
export const DISTRIBUTION_ENDPOINT = transformUrl("/api/distribution");
