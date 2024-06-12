document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scrollable-container');

    // 示例数据，可以替换为实际数据源
    const data = [
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


