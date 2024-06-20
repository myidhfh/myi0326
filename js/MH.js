document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scrollable-container');

    // 示例数据，可以替换为实际数据源
    const data = [
        { imageUrl: 'all/image/MH208.jpg', texts: ['208号熊漫', '共113部','￥50'] },
        { imageUrl: 'all/image/MH3.jpg', texts: ['漫画3号', '共86话完结','￥43'] },
        { imageUrl: 'all/image/MH2.jpg', texts: ['漫画2号', '共62话完结','￥30'] },
        { imageUrl: 'all/image/MH1.jpg', texts: ['漫画1号', '共67话完结','￥32'] },
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
                if (item.imageUrl === 'all/image/MH3.jpg') {
                    window.location.href = 'tu/MH3.html';
                }
                if (item.imageUrl === 'all/image/MH2.jpg') {
                    window.location.href = 'tu/MH2.html';
                }
                if (item.imageUrl === 'all/image/MH1.jpg') {
                    window.location.href = 'tu/MH1.html';
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


