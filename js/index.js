var midi=[
	{type:"填充剂",name:"淀粉"},
	{type:"填充剂",name:"糊精"},
	{type:"填充剂",name:"蔗糖"},
	{type:"填充剂",name:"乳糖"},
	{type:"填充剂",name:"预胶化淀粉"},
	{type:"填充剂",name:"微晶纤维素"},
	{type:"填充剂",name:"甘露醇"},
	{type:"填充剂",name:"山梨醇"},
	{type:"填充剂",name:"无机盐类"},
	
	{type:"润湿剂与黏合剂",name:"淀粉浆"},
	{type:"润湿剂与黏合剂",name:"甲基纤维素"},
	{type:"润湿剂与黏合剂",name:"乙基纤维素"},
	{type:"润湿剂与黏合剂",name:"羧甲纤维素钠"},
	{type:"润湿剂与黏合剂",name:"羟丙基纤维素"},
	{type:"润湿剂与黏合剂",name:"羟丙甲基纤维素"},
	{type:"润湿剂与黏合剂",name:"聚维酮"},
	{type:"润湿剂与黏合剂",name:"聚乙二醇"},
	{type:"润湿剂与黏合剂",name:"明胶"},
	
	{type:"崩解剂",name:"干淀粉"},
	{type:"崩解剂",name:"羧甲淀粉钠"},
	{type:"崩解剂",name:"低取代羟丙纤维素"},
	{type:"崩解剂",name:"交联羧甲基纤维素钠"},
	{type:"崩解剂",name:"交联聚维酮"},
	{type:"崩解剂",name:"泡腾崩解剂"},
	
	{type:"润滑剂",name:"硬脂酸镁"},
	{type:"润滑剂",name:"微粉硅胶"},
	{type:"润滑剂",name:"滑石粉"},
	{type:"润滑剂",name:"氢化植物油"},
	{type:"润滑剂",name:"聚乙二醇类"},
	{type:"润滑剂",name:"月桂醇硫酸钠"}
];
var typs=["填充剂","润湿剂与黏合剂","崩解剂","润滑剂"];
var yao;
var myJson;
var jf=0;
$(function(){
	console.log(midi[0].a);
	$.ajaxSettings.async=false;
	myJson=midi;
	
	var baskets="";
	$.each(typs, function(i,e) {
		baskets+="<div class='basket'><div class='jt' onclick=\"chose("+"'"+e+"'"+")\"></div>"
		+"<img src='./img/桶.png'>"
		+"<div class='typename'>"+e+"</div>"
		+"</div>";
	});
	$(".baskets").append(baskets);
	window.setInterval(function(){
		yao=myJson[Math.floor(Math.random()*myJson.length)];
		$(".yaoyaoname").text(yao.name);
	},6000);
});
function chose(x){
	if(yao!=undefined){
		if(x==yao.type){
			jf+=1;
			$(".jfb").text(jf);
			yao=undefined;
		}else{
			jf+=-1;
			$(".jfb").text(jf);
			yao=undefined;
		}
	}
}
