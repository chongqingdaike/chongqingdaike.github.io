var midi = [
    { type: "填充剂", name: "淀粉" },
    { type: "填充剂", name: "糖粉" },
    { type: "填充剂", name: "糊精" },
    { type: "填充剂", name: "乳糖" },
    { type: "填充剂", name: "微晶纤维素" },
    { type: "填充剂", name: "甘露醇" },
    { type: "填充剂", name: "山梨醇" },
    { type: "填充剂", name: "无机盐" },

    { type: "粘合剂", name: "乙醇(一定浓度)" },
    { type: "粘合剂", name: "水(一定浓度)" },
    { type: "粘合剂", name: "淀粉浆(一定浓度)" },
    { type: "粘合剂", name: "聚乙烯吡咯烷酮（PVP）" },
    { type: "粘合剂", name: "羧甲基纤维素钠 (CMC-Na)" },
    { type: "粘合剂", name: "聚乙二醇 (PEG)" },
    { type: "粘合剂", name: "HPC" },
    { type: "粘合剂", name: "HPMC" },
    { type: "粘合剂", name: "MC" },
    { type: "粘合剂", name: "EC" },

    { type: "崩解剂", name: "羧甲基淀粉钠" },
    { type: "崩解剂", name: "低取代羟丙基纤维素" },
    { type: "崩解剂", name: "枸缘酸" },
    { type: "崩解剂", name: "酒石酸" },
    { type: "崩解剂", name: "碳酸钠" },
    { type: "崩解剂", name: "碳酸氢钠" },

];
var typs = ["填充剂", "崩解剂", "粘合剂"];
var yao;
var myJson;
var jf = 0;
$(function () {
    console.log(midi[0].a);
    $.ajaxSettings.async = false;
    myJson = midi;

    var baskets = "";
    $.each(typs, function (i, e) {
        baskets += "<div class='basket'><div class='jt' onclick=\"chose(" + "'" + e + "'" + ")\"></div>"
            + "<img src='./img/桶.png'>"
            + "<div class='typename'>" + e + "</div>"
            + "</div>";
    });
    yao = myJson[Math.floor(Math.random() * myJson.length)];
    $(".yaoyaoname").text(yao.name);
    $(".baskets").append(baskets);
    //window.setInterval(function () {
    //    yao = myJson[Math.floor(Math.random() * myJson.length)];
    //    $(".yaoyaoname").text(yao.name);
    //}, 6000);
});
function chose(x) {
    if (yao != undefined) {
        if (x == yao.type) {
            jf += 1;
            $(".jfb").text(jf);
            yao = undefined;
        } else {
            jf += -1;
            $(".jfb").text(jf);
            yao = undefined;
        }
        yao = myJson[Math.floor(Math.random() * myJson.length)];
        $(".yaoyaoname").text(yao.name);
    }
}
