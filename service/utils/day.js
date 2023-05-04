import dayjs from 'dayjs'
/*
* 示例
* let currentTime = formatDate(new Date(), 'MM-DD') + '_' + formatDate(new Date(), 'HH-mm')
* */
export const formatDate = (date, DATE_FORMAT) => {
  return dayjs(date).format(DATE_FORMAT)
}

/**
 * 获取指定日期所在月份的天数
 * @param {string} date 日期字符串，例如'2022-02-01'
 * @returns {number} 当月天数，例如28
 */
export const getDaysInMonth = (date) => {
  return dayjs(date).daysInMonth()
}

/**
 * 比较两个日期的大小
 * @param {string} date1 日期字符串，例如'2022-01-01'
 * @param {string} date2 日期字符串，例如'2022-02-01'
 * @returns {number} 如果date1比date2小，则返回负数；如果相等，则返回0；如果date1比date2大，则返回正数。
 */
export const compareDates = (date1, date2) => {
  return dayjs(date1).diff(dayjs(date2))
}
