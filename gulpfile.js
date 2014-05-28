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

gulp.task('default', ['slide-1-1', 'slide-1-2']);