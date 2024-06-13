document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scrollable-container');

    // 示例数据，可以替换为实际数据源
    const data = [
        { imageUrl: 'all/image/405号.jpg', texts: ['405号','小鲜肉按摩','26分钟--1.28G','￥6'] },
        { imageUrl: 'all/image/404号.jpg', texts: ['404号','熊狒dodo','14分钟--57.6MB','￥5'] },
        { imageUrl: 'all/image/403号.jpg', texts: ['403号','16分钟--96.2MB','￥5'] },
        { imageUrl: 'all/image/402号.jpg', texts: ['402号','胖熊视频电话与美女聊骚' ,'13分钟--36.5MB','￥5'] },
        { imageUrl: 'all/image/401号.jpg', texts: ['401号' ,'46分钟--2.41G','￥7'] },
        { imageUrl: 'all/image/400号.jpg', texts: ['400号' ,'28分钟--1.48G','￥6'] },
        { imageUrl: 'all/image/399号.jpg', texts: ['399号' ,'1.07小时--3.51G','￥10'] },
        { imageUrl: 'all/image/397号.jpg', texts: ['397号' ,'22分钟--402MB','￥5'] },
        { imageUrl: 'all/image/395号.jpg', texts: ['395号' ,'10分钟--83.6MB','￥5'] },
        { imageUrl: 'all/image/394号.jpg', texts: ['394号','可爱的胖墩小熊崽' ,'1小时--713MB','￥7'] },
        { imageUrl: 'all/image/392号.jpg', texts: ['392号','霸道太子与校服小弟弟赤兔' ,'25分钟--76.1MB','￥5'] },
        { imageUrl: 'all/image/391号.jpg', texts: ['391号','胖熊与细狗' ,'25分钟--2.22G','￥7'] },
        { imageUrl: 'all/image/390号.jpg', texts: ['390号','美团外卖熊' , '22分钟--1.42G','￥7'] },
        { imageUrl: 'all/image/389号.jpg', texts: ['389号', '50分钟--1.01G','￥6'] },
        { imageUrl: 'all/image/388号.jpg', texts: ['388号', '44分钟--362MB','￥6'] },
        { imageUrl: 'all/image/387号.jpg', texts: ['387号', '28分钟--888MB','￥7'] },
        { imageUrl: 'all/image/386号.jpg', texts: ['386号', '35分钟--415MB','￥6'] },
        { imageUrl: 'all/image/385号.jpg', texts: ['385号', '37分钟--319MB','￥5'] },
        { imageUrl: 'all/image/384号.jpg', texts: ['384号', '41分钟--1.28G','￥7'] },
        { imageUrl: 'all/image/383号.jpg', texts: ['383号', '1小时--1.15G','￥7'] },
        { imageUrl: 'all/image/381号.jpg', texts: ['381号', '2个视频共14分钟--69.6MB','￥5'] },
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
                if (item.imageUrl === 'all/image/405号.jpg') {
                    window.location.href = 'tu/405号.html';
                }
                if (item.imageUrl === 'all/image/404号.jpg') {
                    window.location.href = 'tu/404号.html';
                }
                if (item.imageUrl === 'all/image/403号.jpg') {
                    window.location.href = 'tu/403号.html';
                }
                if (item.imageUrl === 'all/image/402号.jpg') {
                    window.location.href = 'tu/402号.html';
                }
                if (item.imageUrl === 'all/image/401号.jpg') {
                    window.location.href = 'tu/401号.html';
                }
                if (item.imageUrl === 'all/image/400号.jpg') {
                    window.location.href = 'tu/400号.html';
                }
                if (item.imageUrl === 'all/image/399号.jpg') {
                    window.location.href = 'tu/399号.html';
                }
                if (item.imageUrl === 'all/image/397号.jpg') {
                    window.location.href = 'tu/397号.html';
                }
                if (item.imageUrl === 'all/image/395号.jpg') {
                    window.location.href = 'tu/395号.html';
                }
                if (item.imageUrl === 'all/image/394号.jpg') {
                    window.location.href = 'tu/394号.html';
                }
                if (item.imageUrl === 'all/image/392号.jpg') {
                    window.location.href = 'tu/392号.html';
                }
                if (item.imageUrl === 'all/image/391号.jpg') {
                    window.location.href = 'tu/391号.html';
                }
                if (item.imageUrl === 'all/image/390号.jpg') {
                    window.location.href = 'tu/390号.html';
                }
                if (item.imageUrl === 'all/image/389号.jpg') {
                    window.location.href = 'tu/389号.html';
                }
                if (item.imageUrl === 'all/image/388号.jpg') {
                    window.location.href = 'tu/388号.html';
                }
                if (item.imageUrl === 'all/image/387号.jpg') {
                    window.location.href = 'tu/387号.html';
                }
                if (item.imageUrl === 'all/image/386号.jpg') {
                    window.location.href = 'tu/386号.html';
                }
                if (item.imageUrl === 'all/image/385号.jpg') {
                    window.location.href = 'tu/385号.html';
                }
                if (item.imageUrl === 'all/image/384号.jpg') {
                    window.location.href = 'tu/384号.html';
                }
                if (item.imageUrl === 'all/image/383号.jpg') {
                    window.location.href = 'tu/383号.html';
                }
                if (item.imageUrl === 'all/image/382号.jpg') {
                    window.location.href = 'tu/382号.html';
                }
                if (item.imageUrl === 'all/image/381号.jpg') {
                    window.location.href = 'tu/381号.html';
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


