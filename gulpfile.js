"use strict";

"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var uglify = require("gulp-uglify");
var inlinesource = require("gulp-inline-source");
var htmlmin = require("gulp-htmlmin");

gulp.task("css", function () {
  return gulp
    .src("src/sass/main.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("docs/css"))
    .pipe(csso())
    .pipe(rename("main.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("docs/css"))
    .pipe(server.stream());
});

gulp.task("sass", function () {
  return gulp
    .src("src/sass/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("docs/css"));
});

gulp.task("server", function () {
  server.init({
    server: "docs/",
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch("src/sass/**/*.{scss,sass}", gulp.series("css", "sass"));
  gulp.watch("src/*.html", gulp.series("copy", "refresh"));
  gulp.watch("src/js/**/*.js", gulp.series("js"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(posthtml([include()]))
    .pipe(
      inlinesource({
        rootpath: "docs/",
      })
    )
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("docs"));
});

gulp.task("copy", function () {
  return gulp.src("src/*.html").pipe(gulp.dest("docs"));
});

gulp.task("img", function () {
  return gulp.src("src/img/*").pipe(gulp.dest("docs/img"));
});

gulp.task("js", () =>
  browserify({
    entries: "./src/js/index.js",
  })
    .transform("babelify", {
      presets: ["@babel/preset-env"],
    })
    .bundle()
    .pipe(source("./js/bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("docs"))
);

gulp.task("clean", function () {
  return del("docs");
});

gulp.task("assets", gulp.series("clean", "js", "css", "img"));
gulp.task("build", gulp.series("assets", "html"));
gulp.task("start", gulp.series("assets", "copy", "server"));
