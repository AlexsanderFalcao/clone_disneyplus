import gulp from 'gulp';
import sass from 'gulp-sass';
import * as sassCompiler from 'sass'; // Mudando a importação

const sassTask = () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass(sassCompiler).on('error', sass.logError)) // Mantendo a mesma estrutura
        .pipe(gulp.dest('dist/css'));
};

// Defina as tarefas padrão e outras aqui, se necessário
export default gulp.series(sassTask);
