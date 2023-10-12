var 二级=`js:
try {
	let html = request(input);
	html = JSON.parse(html);
	let node = html.data;
	VOD = {
		vod_id: node["vod_id"],
		vod_name: node["vod_name"],
		vod_pic: node["vod_pic"],
		type_name: node["vod_class"],
		vod_year: node["vod_year"],
		vod_area: node["vod_area"],
		vod_remarks: node["vod_remarks"],
		vod_actor: node["vod_actor"],
		vod_director: node["vod_director"],
		vod_content: node["vod_content"].strip(),
	};
	VOD["vod_play_from"] = node["vod_play_from"];
	VOD["vod_play_url"] = node["vod_play_url"]
} catch (e) {
	log("获取二级详情页发生错误:" + e.message)
}
`;
var rule = {
	title: 'A8影视',
	host: 'https://aaa.a8ys.xyz',
	homeUrl:'/ruifenglb_api.php/v1.vod/vodPhbAll',
	url: '/ruifenglb_api.php/v1.vod?type=fypage',
	detailUrl:'/ruifenglb_api.php/v1.vod/detail?vod_id=fyid',
	searchUrl: '/ruifenglb_api.php/v1.vod?wd?**&page=fypage',
	searchable: 1,
	quickSearch: 1,
	filterable:1,
	headers:{'User-Agent':'okhttp/4.1.0'},
	timeout:5000,
	class_name:'电影&电视剧&综艺&动漫&记录&解说',
	class_url:'1&2&3&4&5&530',
	play_parse:true,
	lazy:'',
	//lazy:'js:if(/mp4|mkv/.test(input)){input}else if(/YT_4k/.test(input)){let purl=request("http://lflong.lyyytv.cn/json.php?url="+input);input={jx:0,url:JSON.parse(purl).url,parse:1}}',
	limit:6,
	推荐:'json:list;vlist;*;*;*;*',
	double: true,
	一级:'json:list;vod_name;vod_pic;vod_remarks||vod_score;vod_id',
	二级:二级,
	搜索:'*',
}
