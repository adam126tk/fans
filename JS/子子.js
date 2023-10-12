var rule{
            title: '子子影院',
            host: 'http://ziziyy1.com/',
            url: '/fyclass',
            searchUrl: 'http://119.29.15.48:12334/ssszz.php?top=10&q=**',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {
                'User-Agent': 'MOBILE_UA',
            },
            class_parse: '.nav-down-pc&&ul&&li;a&&Text;a&&href;.*/(.*?).html',
            play_parse: true,
            lazy: '',
            limit: 6,
            推荐: '.index-list-l;ul&&li;a&&title;img&&data-original;.bz&&Text;a&&href',
            double: true, // 推荐内容是否双层定位
            一级: '.index-tj&&ul;a&&title;img&&data-original;.bz&&Text;a&&href',
            二级: {
                "title": "h1.fed-part-eone&&Text;.fed-deta-content&&.fed-part-rows&&li&&Text",
                "img": ".fed-list-info&&a&&data-original",
                "desc": ".fed-deta-content&&.fed-part-rows&&li:eq(1)&&Text;.fed-deta-content&&.fed-part-rows&&li:eq(2)&&Text;.fed-deta-content&&.fed-part-rows&&li:eq(3)&&Text",
                "content": ".fed-part-esan&&Text",
                "tabs": ".fed-drop-boxs&&.fed-part-rows&&li",
                "lists": ".fed-play-item:eq(#id)&&ul:eq(1)&&li"
            },
            }