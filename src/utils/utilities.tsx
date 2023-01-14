import moment from "moment";


export const formatDate = (date: Date, format = 'MMMM, Do YYYY') => moment(date).format(format);

export const composeClasses = (...styles: string[]): string => {
    let classes = "";
  
    styles.forEach((arg) => {
      if (arg) classes += `${arg} `;
    });
  
    return classes.trim();
  };