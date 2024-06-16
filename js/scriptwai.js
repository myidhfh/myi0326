document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scrollable-container');

    // 示例数据，可以替换为实际数据源
    const data = [
        { imageUrl: 'all/image/415.jpg', texts: ['415号', '13分钟--145MB','￥5'] },
        { imageUrl: 'all/image/414.jpg', texts: ['414号', '32分钟--258MB','￥5'] },
        { imageUrl: 'all/image/410号.jpg', texts: ['410号', '58分钟--1.86G','￥7'] },
        { imageUrl: 'all/image/398号.jpg', texts: ['398号', '10分钟--304MB','￥5'] },
        { imageUrl: 'all/image/396号.jpg', texts: ['396号', '两只胖熊互吃纯享版', '39分钟--1.13G','￥5'] },
        { imageUrl: 'all/image/393号.jpg', texts: ['393号', '胖熊全程试穿性感内裤', '23分钟--1G','￥5'] },
        { imageUrl: 'all/image/382号.jpg', texts: ['382号', '15分钟--652MB','￥5'] },
    ];

    // 动态生成滚动框
    data.forEach(item => {
        const frame = document.createElement('div');
        frame.classList.add('scrollable-frame');

        const scrollableContent = document.createElement('div');
        scrollableContent.classList.add('scrollable-content');
        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.texts.join(', '); // 使用所有文本作为alt属性
        scrollableContent.appendChild(img);

        const textBelow = document.createElement('div');
        textBelow.classList.add('text-below');

        // 添加多个文本
        item.texts.forEach(text => {
            const p = document.createElement('p');
            p.textContent = text;
            p.classList.add('emphasized-text'); // 添加强调样式的类名
            // 添加点击事件监听器
            p.addEventListener('click', () => {
                if (item.imageUrl === 'all/image/415.jpg') {
                    window.location.href = 'tu/415.html';
                }
                if (item.imageUrl === 'all/image/414.jpg') {
                    window.location.href = 'tu/414.html';
                }
                if (item.imageUrl === 'all/image/410号.jpg') {
                    window.location.href = 'tu/410号.html';
                }
                if (item.imageUrl === 'all/image/398号.jpg') {
                    window.location.href = 'tu/398号.html';
                }
                if (item.imageUrl === 'all/image/396号.jpg') {
                    window.location.href = 'tu/396号.html';
                }
                if (item.imageUrl === 'all/image/393号.jpg') {
                    window.location.href = 'tu/393号.html';
                }
                if (item.imageUrl === 'all/image/382号.jpg') {
                    window.location.href = 'tu/382号.html';
                }
            });
            textBelow.appendChild(p);
        });

        frame.appendChild(scrollableContent);
        frame.appendChild(textBelow);

        container.appendChild(frame);

        // 添加拖拽滚动功能（这部分代码可以保持不变）
    });
});


