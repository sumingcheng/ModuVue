const gulp = require('gulp')
const zip = require('gulp-zip')
const dayjs = require('dayjs')

function formatDate(date, DATE_FORMAT) {
  return dayjs(date).format(DATE_FORMAT)
}

let currentTime = formatDate(new Date(), 'MM-DD') + '_' + formatDate(new Date(), 'HH-mm')

gulp.task('zip', () =>
  gulp
    .src('dist/resource/**/*')
    .pipe(zip(`${currentTime}-resource.zip`))
    .pipe(gulp.dest('./dist'))
)
