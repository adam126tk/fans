{
    "title": "JOJO",
    "author": "LR",
    "UserAgent":"PC_UA",
    "Coding_format":"UTF-8",
    "PicNeedProxy":"0",
    "homeContent":"0",
    "firstpage": "1",
    "class_url": "https://app.syrme.top/video/{cateId}?page={catePg}&size=18[firstPage=https://app.syrme.top/video/{cateId}?page=1&size=18]",
    "class_name": "电影&美剧&韩剧&日剧&动漫&记录",
    "class_value": "电影&美剧&韩剧&日剧&动漫&记录",
    "filterdata":{},
    "cat_YN_twice": "1",
    "cat_twice_pre": "class=\"content-body\"",
    "cat_twice_suf": "class=\"content-lift\"",
    "cat_arr_pre": "<div",
    "cat_arr_suf": "/div>",
    "cat_pic": "src=\"&&\"",
    "cat_title": "class=\"card-title\",
    "cat_subtitle": "class=\"item-speed\">&&<class=\"score\">",
    "cat_url": "href=\"&&\"",
    "cat_prefix": "https://app.syrme.top",
    "cat_suffix": "",
    "SUserAgent":"PC_UA",
    "search_url": "https://app.syrme.top/video/search?q={wd}",
    "sea_PtBody":"",
    //搜索是否二次截取  
    "sea_YN_twice": "1",
    //搜索二次截取前
    "sea_twice_pre": "空",
    //搜索二次截取后
    "sea_twice_suf": "</ul>",
    
    //搜索数组前缀
    "sea_arr_pre": "<li",
    //搜索数组后缀
    "sea_arr_suf": "/li>",
    //搜索片单图片，截取前缀&&截取后缀
    "sea_pic": "data-original=\"&&\"",
    //搜索片单标题，截取前缀&&截取后缀
    "sea_title": "title=\"&&\"",
    //搜索片单链接，截取前缀&&截取后缀
    "sea_url": "href=\"&&\"",
    //搜索副标题，截取前缀&&截取后缀
    "sea_subtitle": "",
    
    //搜索片单链接补前缀
    "search_prefix": "http://www.lezhutv.com",
    //搜索片单链接补后缀，这个一般json搜索的需要
    "search_suffix": "",
    
    //片单链接是否直接播放，0否，1分类片单链接直接播放，2详情选集链接直接播放。
    //设置成直接播放后，后面3个参数请注意该留空的请务必留空。
    "force_play": "0",
    //直接播放链接补前缀
    "play_prefix": "https://live.52sf.ga/huya/",
    //直接播放链接补后缀，设置为#isVideo=true#可强制识别为视频链接
    "play_suffix": "#isVideo=true#",
    //直接播放链接设置请求头，只对直链视频有效，每一组用#分开
    "play_header": "authority$ku.peizq.online#Referer$https://play.peizq.online",
    
    //演员和简介不支持使用jsoup写法，只支持关键字截取法
    //演员数据，截取前缀&&截取后缀
    "proj_actor": "主演：</span>&&</p>",
    //简介内容，截取前缀&&截取后缀
    "proj_plot": "简介：</span>&&</p>",
    
    //线路截取区域，如果不需要请把tab_title或tab_arr_pre置空或者全部不要填。
    //线路是否二次截取
    "tab_YN_twice": "0",
    //线路二次截取前
    "tab_twice_pre": "",
    //线路二次截取后
    "tab_twice_suf": "",
    
    //线路截取数组前
    "tab_arr_pre": "空",
    //线路截取数组后
    "tab_arr_suf": "空",
    //线路标题，截取前缀&&截取后缀
    //排除线路写法示例==> "tab_title": "title\">&&</h3>[不包含:网盘,云盘]",
    "tab_title": "空",
    
    //列表是否二次截取
    "list_YN_twice": "0",
    //列表二次截取前
    "list_twice_pre": "空",
    //列表二次截取后
    "list_twice_suf": "空",
    //列表数组截取前，必须
    "list_arr_pre": "<ul class=\"play_list",
    //列表数组截取后，必须
    "list_arr_suf": "</ul>",
    
    //集数是否二次截取
    "epi_YN_twice": "0",
    //集数二次截取前
    "epi_twice_pre": "空",
    //集数二次截取后
    "epi_twice_suf": "空",
    //集数数组截取前，必须
    "epi_arr_pre": "<a",
    //集数数组截取后，必须
    "epi_arr_suf": "/a>",
    //集数标题，截取前缀&&截取后缀
    "epi_title": ">&&<",
    //集数链接，截取前缀&&截取后缀
    "epi_url": "href=\"&&\"",
    //选集是否反转显示
    "epi_reverse": "0",
    //集数链接补前缀
    "epiurl_prefix": "http://www.lezhutv.com",
    //集数链接补后缀
    "epiurl_suffix": "",
    
    //下面几个参数请勿乱用。否则可能会有副作用。
    //分析网页源码中有<script type="text/javascript">var player_aaaa={"flag":"play","encrypt这种源码的链接解析
    //如果网页源码里没有这种请设置为0
    "Anal_MacPlayer":"0",
    //是否开启手动嗅探，只对网页嗅探有效，0否，1是
    "ManualSniffer":"0",
    //手动嗅探视频链接关键字，每个用#隔开
    "VideoFormat":".mp4#.m3u8#.flv",
    //手动嗅探视频链接过滤关键词,每个用#隔开
    "VideoFilter":".html#=http"
}