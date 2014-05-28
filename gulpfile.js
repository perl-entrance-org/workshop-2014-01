var gulp = require('gulp'),
concat = require('gulp-concat');

gulp.task('slide-1-1', function(){
    return gulp.src([
            'title.md',
            'operating_system.md',
            'xcode.md',
            'ubuntu_install.md',
            'terminal_and_shell.md',
            'editor.md'
        ])
        .pipe(concat('slide-1-1.md'))
        .pipe(gulp.dest('build'));
});

gulp.task('slide-1-2', function(){
    return gulp.src([
            'title.md',
            'about_perl_entrance.md',
            'about_perl_language.md',
            'more_study.md',
            'build_perl.md',
            'hello_world.md'
        ])
        .pipe(concat('slide-1-2.md'))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['slide-1-1', 'slide-1-2']);
