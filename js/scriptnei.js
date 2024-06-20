document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('scrollable-container');

    // 示例数据，可以替换为实际数据源
    const data = [
        { imageUrl: 'all/image/441.jpg', texts: ['441号','"<王小谦与豆奶君系列>"','36分钟--540MB','￥5.5'] },
        { imageUrl: 'all/image/440.jpg', texts: ['440号','<吃jio系列>无do','24分钟--223MB','￥5'] },
        { imageUrl: 'all/image/439.jpg', texts: ['439号','黑袜吃jio','14分钟--606MB','￥5'] },
        { imageUrl: 'all/image/438.jpg', texts: ['438号','<厨房奶爸>后续','24分钟--367MB','￥6'] },
        { imageUrl: 'all/image/437.jpg', texts: ['437号','<高中生系列>','43分钟--408MB','￥6.5'] },
        { imageUrl: 'all/image/436号.jpg', texts: ['436号','35分钟--467MB','￥6'] },
        { imageUrl: 'all/image/435号.jpg', texts: ['435号','<迷系列>小迷熊','32分钟--0.99G','￥6'] },
        { imageUrl: 'all/image/422.jpg', texts: ['422号','"豆奶君好嫩"','1.18小时--1.11G','￥7'] },
        { imageUrl: 'all/image/416.jpg', texts: ['416号','18分钟--367MB','￥5'] },
        { imageUrl: 'all/image/413.jpg', texts: ['413号','调教无do','15分钟--168MB','￥5'] },
        { imageUrl: 'all/image/412.jpg', texts: ['412号','爽翻天一镜到底','7分钟--68.4MB','￥4.5'] },
        { imageUrl: 'all/image/411.jpg', texts: ['411号','41分钟--1.75G','￥7'] },
        { imageUrl: 'all/image/409号.jpg', texts: ['409号','网红熊ktv唱歌','26分钟--143MB','￥5'] },
        { imageUrl: 'all/image/408号.jpg', texts: ['408号','胖熊与细狗dodo','26分钟--1.36G','￥6'] },
        { imageUrl: 'all/image/407号.jpg', texts: ['407号','25分钟--179MB','￥5'] },
        { imageUrl: 'all/image/406号.jpg', texts: ['406号','49分钟--337MB','￥6'] },
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
                if (item.imageUrl === 'all/image/441.jpg') {
                    window.location.href = 'tu/441.html';
                }
                if (item.imageUrl === 'all/image/440.jpg') {
                    window.location.href = 'tu/440.html';
                }
                if (item.imageUrl === 'all/image/439.jpg') {
                    window.location.href = 'tu/439.html';
                }
                if (item.imageUrl === 'all/image/438.jpg') {
                    window.location.href = 'tu/438.html';
                }
                if (item.imageUrl === 'all/image/437.jpg') {
                    window.location.href = 'tu/437.html';
                }
                if (item.imageUrl === 'all/image/436.jpg') {
                    window.location.href = 'tu/436.html';
                }
                if (item.imageUrl === 'all/image/435.jpg') {
                    window.location.href = 'tu/435.html';
                }
                if (item.imageUrl === 'all/image/422.jpg') {
                    window.location.href = 'tu/422.html';
                }
                if (item.imageUrl === 'all/image/416.jpg') {
                    window.location.href = 'tu/416.html';
                }
                if (item.imageUrl === 'all/image/413.jpg') {
                    window.location.href = 'tu/413.html';
                }
                if (item.imageUrl === 'all/image/412.jpg') {
                    window.location.href = 'tu/412.html';
                }
                if (item.imageUrl === 'all/image/411.jpg') {
                    window.location.href = 'tu/411.html';
                }
                if (item.imageUrl === 'all/image/409号.jpg') {
                    window.location.href = 'tu/409号.html';
                }
                if (item.imageUrl === 'all/image/408号.jpg') {
                    window.location.href = 'tu/408号.html';
                }
                if (item.imageUrl === 'all/image/407号.jpg') {
                    window.location.href = 'tu/407号.html';
                }
                if (item.imageUrl === 'all/image/406号.jpg') {
                    window.location.href = 'tu/406号.html';
                }
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


