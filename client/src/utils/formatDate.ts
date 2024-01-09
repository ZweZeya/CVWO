export const formatDate = (date: Date): string => {
    const diffInMilli = Math.round(Date.now() - date.getTime());
    const diffInSeconds = Math.round(diffInMilli / 1000);
    const diffInMinutes = Math.round(diffInMilli / (1000 * 60));
    const diffInHours = Math.round(diffInMilli / (1000 * 60 * 60));
    const diffInDays = Math.round(diffInMilli / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.round(diffInMilli / (1000 * 60 * 60 * 24 * 7));
    const diffInMonths = Math.round(diffInMilli / (1000 * 60 * 60 * 24 * 30));
    const diffInYears = Math.round(diffInMilli / (1000 * 60 * 60 * 24 * 365));

    if (diffInSeconds < 60) {
        return diffInSeconds + " second" + (diffInSeconds == 1 ? "" : "s");
    } else if (diffInMinutes < 60) {
        return diffInMinutes + " minute" + (diffInMinutes == 1 ? "" : "s");
    } else if (diffInHours < 24) {
        return diffInHours + " minute" + (diffInHours == 1 ? "" : "s");
    } else if (diffInDays < 7) {
        return diffInDays + " day" + (diffInDays == 1 ? "" : "s");
    } else if (diffInWeeks < 4) {
        return diffInWeeks + " week" + (diffInWeeks == 1 ? "" : "s");
    } else if (diffInMonths < 12) {
        return diffInMonths + " month" + (diffInMonths == 1 ? "" : "s");
    } else {
        return diffInYears + "year" + (diffInYears == 1 ? "" : "s");
    }
};
