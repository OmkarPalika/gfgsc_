import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../config/firebaseConfig';

const analytics = getAnalytics(app);

export const logPageView = (page) => {
    logEvent(analytics, 'page_view', { page });
};

export const logEventCustom = (eventName, eventParams) => {
    logEvent(analytics, eventName, eventParams);
};
