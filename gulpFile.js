const { series, src, dest, watch } = require("gulp");
const purgecss = require("gulp-purgecss");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./styles/index.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      purgecss({
        content: ["./**/*.tsx"],
        safelist: {
          standard: [
            /-primary-?/,
            /-secondary-?/,
            /-error-?/,
            /-purple-?/,
            /-info-?/,
            /-blue-?/,
            /-green-?/,
          ],
        },
      }),
    )
    .pipe(dest("./styles/build"));
}

function watchTask() {
  watch(["./styles/**/*.scss", "./**/*.tsx"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
