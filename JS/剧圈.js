var rule = {
    title:'剧圈',
    host:'http://211.101.233.143:7788',
    homeUrl:'http://211.101.233.143:7788/appto/v1/home/cateData?id=1',
	url:'/appto/v1/vod/getLists?type_id=fyclass',
    class_name:'电影&剧集&动漫&综艺',
    class_url:'20&21&30&31',
    detailUrl:'/appto/v1/vod/getVod?id=fyid',
    searchUrl:'/api/video/search?key=**&page=fypage',
    headers:{
		'User-Agent':'Dart/2.19 (dart:io)',
		'accept-encoding':'gzip'
	},
    timeout:5000,
    limit:8,
    play_parse:true,
    play_json:[{
      re:'*',
      json:{
          parse:0,
          jx:0
      }
    }],
    lazy:'',
	一级:'json:data;data.data;data.vod_name;vod_pic;vod_score;vod_id',
    二级:{
    title:'data.title;data.types[0].name',
    desc:'data.score;data.year.title;data.area.title;data.actors[*].name;data.directors[*].name',
    img:'data.thumbnail',
    content:'data.description',
    is_json:1,
    tabs:`js:
            TABS = [];
            if (html.data.have_ftp_ur == 1) {
                TABS.push("超清[观影后,记得清理缓存]")
            }
            if (html.data.have_m3u8_ur == 1) {
                TABS.push("普清")
            }
        `,
        lists:`js:
            log(TABS);
            LISTS = [];
            TABS.forEach(function(tab) {
                if (/超清/.test(tab)) {
                    let ftp = html.data.new_ftp_list;
                    let d = ftp.map(function(it) {
                        return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
                    });
                    LISTS.push(d)
                } else if (/普清/.test(tab)) {
                    let m3u8 = html.data.new_m3u8_list;
                    let d = m3u8.map(function(it) {
                        return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
                    });
                    LISTS.push(d)
                }
            });
        `,
    },
    搜索:'json:data;*;thumbnail;mask;*',
}
