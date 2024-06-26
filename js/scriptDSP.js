document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scrollable-container');

    // 示例数据，可以替换为实际数据源
    const data = [
        { imageUrl: 'all/image/DSP3.jpg', texts: ['短视频3号', '共96个吃瓜短视频','￥48'] },
        { imageUrl: 'all/image/DSP2.jpg', texts: ['短视频2号', '共68个吃瓜短视频','￥34'] },
        { imageUrl: 'all/image/DSP1.jpg', texts: ['短视频1号', '共84个吃瓜短视频','￥42'] },
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
                if (item.imageUrl === 'all/image/DSP3.jpg') {
                    window.location.href = 'tu/DSP3.html';
                }
                if (item.imageUrl === 'all/image/DSP2.jpg') {
                    window.location.href = 'tu/DSP2.html';
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


