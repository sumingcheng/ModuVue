import dayjs from 'dayjs'

/**
 * 将日期格式化为指定格式
 * @param {string} date  日期字符串，例如'2022-12-31'
 * @param {string} DATE_FORMAT 日期格式，例如'YYYY-MM-DD'
 * @returns {string} 格式化后的日期字符串，例如'2022/12/31'
 */
export const formatDate = (date, DATE_FORMAT) => {
  return dayjs(date).format(DATE_FORMAT).replace(/-/g, '/')
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
