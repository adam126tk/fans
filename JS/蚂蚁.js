var rule = {
	title:'蚂蚁',
	host:'https://www.mayi4k.com',
	url:'/vodshow/fyclass--------fypage---.html',
	searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    headers:{
        'User-Agent': 'MOBILE_UA',
    },
    timeout:5000,
	class_name:'蓝光圆盘&4K电影&剧集&演唱会',
	class_url:'266&269&247&246',
    play_parse:true,
	lazy:'',
    limit:6,
    推荐:'*',
    一级:'.module-item;.a&&title;.lazyloaded&&data-src;.module-item-text&&Text;.a&&href',
    二级:{
        'title':'.pic&&img&&title',
        'img':'.pic&&img&&src',
        'desc':'.jianjie&&ul&&li:eq(4)&&Text',
        'content':'.jianjie&&ul&&span&&Text',
        'tabs':'#playtab&&.cili',
        'lists':'#playtab&&a[href^="magnet:"]'
    },
    searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
    搜索:'json:list;name;pic;;id',
}
