
//begin varibles
var endr=1,rectr=1;
var rectw=150,recth=150,
    rectx=20,recty=20;
var endw=150,endh=150,
    endx=20,endy=300;
var gather=0;//horn
var movleft=0,the_world=0,endr=1;
var tot=0;
var start = Date.now(),
    frames = 0;
var count_healthy=0;
var count_sick=0;
var count_contacted=0;
var count_dead=0;
var count_quarantine=0;
var death_rate=0.0002;//the possibility of death every frame
var health_rate=0.001;//the possibility of cured every frame
var k_resistence=-0.5*0.1;//people's resistence of contact
var num_init=50;
var radio_dot=8;//the radio of circle
var posb_infection_contacted=35;//the possibility of contacted after contact
var infection_radio=50*2;//the radio of infection
var resistence_radio=50*3;//the radio in which people start to resist to contact
var isolation_rate=0.0002;

//end varibles
function init()
{
    movleft=0;
    tot=0;
    start = Date.now(),
    frames = 0;speedadd=1;
    count_healthy=0;
    count_sick=0;
    count_contacted=0;
    count_dead=0;
    count_quarantine=0;
    death_rate=0.00001;//the possibility of death every frame
    health_rate=0.0001;//the possibility of cured every frame
    k_resistence=-0.5*0.1;//people's resistence of contact
    num_init=50;
    radio_dot=8;//the radio of circle    posb_infection_contacted=35;//the possibility of contacted after contact
    infection_radio=50*2;//the radio of infection
    resistence_radio=50*3;//the radio in which people start to resist to contact
    isolation_rate=0.0002;
//end varibles
}
var w,h,svg,circle,text,rectdata,rectH,rectW,rect,speedadd;
function procced()
{
    w = 960, h = 500;
    svg = d3.select("body").append("svg")
    .attr("width", w+250)
    .attr("height", h+250);
    circle=svg.append("circle")
    .attr("fill","#98FB98")
    .attr("cx",w+40)
    .attr("cy",63)
    .attr("r",8);
    circle=svg.append("circle")
    .attr("fill","#FFFF00")
    .attr("cx",w+40)
    .attr("cy",84)
    .attr("r",8);
    circle=svg.append("circle")
    .attr("fill","#FF0000")
    .attr("cx",w+40)
    .attr("cy",104)
    .attr("r",8);
    circle=svg.append("circle")
    .attr("fill","#666666")
    .attr("cx",w+40)
    .attr("cy",124)
    .attr("r",8);
    circle=svg.append("circle")
    .attr("fill","#66CCFF")
    .attr("cx",w+40)
    .attr("cy",144)
    .attr("r",8); //five dot
//quarantine
    rect=svg.append("rect")
    .attr("x",760)
    .attr("y",20)
    .attr("width",200)
    .attr("height",500)
    .attr("fill","none")
    .attr("stroke","#66CCFF")
    .attr("opacity",0.2)
    .attr("stroke-width",2);
    text=svg.append("text")
    .style("font-size",20)
    .attr("x",830)
    .attr("y",30)
    .data(Array("quarantine"));
//starting point
    rect=svg.append("rect")
    .attr("x",rectx)
    .attr("y",recty)
    .attr("width",rectw)
    .attr("height",recth)
    .attr("fill","none")
    .attr("stroke","#CCCCCC")
    .attr("opacity",0.8)
    .attr("stroke-width",2)
    .attr("id","start");
//end
    rect=svg.append("rect")
    .attr("x",endx)
    .attr("y",endy)
    .attr("width",endw)
    .attr("height",endh)
    .attr("fill","none")
    .attr("stroke","#CCCCCC")
    .attr("opacity",0.8)
    .attr("stroke-width",2)
    .attr("id","endd");
//horn
    var horn=svg.append("rect")
    .attr("x",rectx)
    .attr("y",recty)
    .attr("width",20)
    .attr("height",20)
    .attr("fill","#CCCCCC")
    .attr("id","horn");

 circle = svg.selectAll("circle")
    .data(d3.range(num_init+5).map(function () {
        var angle=Math.random()*Math.PI*2;
        var speed=0.01;
        return {
            x: 0.7*w * Math.random(),          //初试位置随机
            y: h * Math.random(),
            dx: Math.cos(angle)*speed,        //speed是移动速度
            dy: Math.sin(angle)*speed,
            color:"#98FB98",
            ismov: 0,
            wasmov:0,
            isgather:0
        };
    }))
    .enter().append("circle")
    .attr("r", radio_dot);
//begin text
text = svg.append("text")
    .attr("x", w+50)
    .attr("y", 50)
    .style("font-size",20)
    ;

var azhe = svg.append("text")
    .attr("x",w-100)
    .attr("y",50)
    .style("font-size",20)
    .style("fill","#66CCFF")
    .attr("opacity",0.5)
    .text("quarantine");
//end text
//begin rect
 rectdata=[{num:function(){return count_healthy   ;},col:"#98FB98"},
              {num:function(){return count_contacted ;},col:"#FFFF00"},
              {num:function(){return count_sick      ;},col:"#FF0000"},
              {num:function(){return count_dead      ;},col:"#CCCCCC"},
              {num:function(){return count_quarantine;},col:"#66CCff"}
            ];
 rectW = 10;
 rectH=3;
//end rect
}
