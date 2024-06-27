document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scrollable-container');

    // 示例数据，可以替换为实际数据源
    const data = [
        { imageUrl: 'all/image/442.jpg', texts: ['442号', '20分钟--239MB','￥5'] },
        { imageUrl: 'all/image/434.jpg', texts: ['434号', '23分钟--0.99G','￥6'] },
        { imageUrl: 'all/image/433.jpg', texts: ['433号','<医生后续>大胖熊', '27分钟--1.15G','￥6'] },
        { imageUrl: 'all/image/432.jpg', texts: ['432号','全程一直输出！超爽！', '39分钟--1.40G','￥6.5'] },
        { imageUrl: 'all/image/431.jpg', texts: ['431号','<校园>4-5个片段看不完', '1.58小时--1.33G','￥7.5'] },
        { imageUrl: 'all/image/430.jpg', texts: ['430号','全程输出！氛围感拉满~', '42分钟--1.88G','￥5.5'] },
        { imageUrl: 'all/image/429.jpg', texts: ['429号','2个段 人物也不同', '1.32小时--1.82G','￥6.5'] },
        { imageUrl: 'all/image/428.jpg', texts: ['428号','4-5个片段不重', '1.19小时--1.52G','￥6.5'] },
        { imageUrl: 'all/image/427.jpg', texts: ['427号','大包！', '17分钟--735MB','￥5'] },
        { imageUrl: 'all/image/426.jpg', texts: ['426号', '1.04小时--1.26G','￥7'] },
        { imageUrl: 'all/image/425.jpg', texts: ['425号', '40分钟--603MB','￥6'] },
        { imageUrl: 'all/image/424.jpg', texts: ['424号', '1.08小时--1.16G','￥7'] },
        { imageUrl: 'all/image/423.jpg', texts: ['423号', '47分钟--810MB','￥6'] },
        { imageUrl: 'all/image/421.jpg', texts: ['421号', '1.55小时--1.15G','￥7'] },
        { imageUrl: 'all/image/420.jpg', texts: ['420号', '26分钟--1.50G','￥6'] },
        { imageUrl: 'all/image/419.jpg', texts: ['419号', '22分钟--1.25G','￥6'] },
        { imageUrl: 'all/image/418.jpg', texts: ['418号', '"武田!"','2.18小时--1.47G','￥7'] },
        { imageUrl: 'all/image/417.jpg', texts: ['417号', '4段视频爽翻天','1.59小时--1.36G','￥7'] },
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
                if (item.imageUrl === 'all/image/442.jpg') {
                    window.location.href = 'tu/442.html';
                }
                if (item.imageUrl === 'all/image/434.jpg') {
                    window.location.href = 'tu/434.html';
                }
                if (item.imageUrl === 'all/image/433.jpg') {
                    window.location.href = 'tu/433.html';
                }
                if (item.imageUrl === 'all/image/432.jpg') {
                    window.location.href = 'tu/432.html';
                }
                if (item.imageUrl === 'all/image/431.jpg') {
                    window.location.href = 'tu/431.html';
                }
                if (item.imageUrl === 'all/image/430.jpg') {
                    window.location.href = 'tu/430.html';
                }
                if (item.imageUrl === 'all/image/429.jpg') {
                    window.location.href = 'tu/429.html';
                }
                if (item.imageUrl === 'all/image/428.jpg') {
                    window.location.href = 'tu/428.html';
                }
                if (item.imageUrl === 'all/image/427.jpg') {
                    window.location.href = 'tu/427.html';
                }
                if (item.imageUrl === 'all/image/426.jpg') {
                    window.location.href = 'tu/426.html';
                }
                if (item.imageUrl === 'all/image/425.jpg') {
                    window.location.href = 'tu/425.html';
                }
                if (item.imageUrl === 'all/image/424.jpg') {
                    window.location.href = 'tu/424.html';
                }
                if (item.imageUrl === 'all/image/423.jpg') {
                    window.location.href = 'tu/423.html';
                }
                if (item.imageUrl === 'all/image/421.jpg') {
                    window.location.href = 'tu/421.html';
                }
                if (item.imageUrl === 'all/image/420.jpg') {
                    window.location.href = 'tu/420.html';
                }
                if (item.imageUrl === 'all/image/419.jpg') {
                    window.location.href = 'tu/419.html';
                }
                if (item.imageUrl === 'all/image/418.jpg') {
                    window.location.href = 'tu/418.html';
                }
                if (item.imageUrl === 'all/image/417.jpg') {
                    window.location.href = 'tu/417.html';
                }
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


