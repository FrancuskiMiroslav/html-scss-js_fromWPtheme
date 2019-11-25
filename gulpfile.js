const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// Development Tasks
// -----------------

function gulpSass() {
  return gulp
    .src("app/scss/**/*.scss") // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass().on("error", sass.logError)) // Passes it through a gulp-sass, log errors to console
    .pipe(gulp.dest("app/css")) // Outputs it in the css folder
    .pipe(browserSync.stream());
};

// Watchers
function watch() {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
  gulp.watch("app/scss/**/*.scss", gulpSass);
  gulp.watch("app/*.html").on("change", browserSync.reload);
  gulp.watch("app/js/**/*.js").on("change", browserSync.reload);
};


// Build Sequences
// ---------------

exports.default = watch;