import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import imagemin from 'gulp-imagemin'; // Importe o gulp-imagemin
import sassCompiler from 'sass'; // Use sassCompiler corretamente

const sass = gulpSass(sassCompiler); // Configure o compilador Sass

// Tarefa de compilação do Sass
const sassTask = () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
};

// Tarefa de otimização de imagens
const imageMinTask = () => {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
};

// Definindo a tarefa padrão que roda o Sass e o imagemin
const defaultTask = gulp.series(sassTask, imageMinTask);

export default defaultTask;
