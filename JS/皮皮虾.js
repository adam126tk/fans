muban.短视2.二级.img = '.detail-pic&&img&&data-original';
var rule = {
    title: '皮皮虾',
    模板:'短视2',
    host: 'http://aikun.tv',
    homeUrl:'/map.html',
    // url: '/index.php/api/vod#type=fyclass&page=fypage',
    url: '/s/fyfilter.html',
    class_parse:'.swiper-wrapper&&li;a&&Text;a&&href;.*/(\\d+).html',
    class_name:'',
    class_url:'',
    detailUrl:'/v/fyid.html',
    推荐:'.border-box .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    double: false, // 推荐内容是否双层定位
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=it.vod_pic.replace("mac:","https:");return it});',
}
