document.addEventListener("DOMContentLoaded", function () {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 200); // 每个视频项延迟200ms
    });
});
