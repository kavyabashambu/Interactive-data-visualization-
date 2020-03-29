
function drawChart(){
    am4core.useTheme(am4themes_animated);

var chart2 = am4core.create("chartdiv", am4charts.ChordDiagram);


chart2.data = [
    { from: "go_out1", to: "Walc1", value: 15 },
    { from: "go_out1", to: "Walc2", value: 4 },
    { from: "go_out1", to: "Walc3", value: 2 },
    { from: "go_out1", to: "Walc4", value: 2 },
    { from: "go_out1", to: "Walc5", value: 0 },
    { from: "go_out2", to: "Walc1", value: 54 },
    { from: "go_out2", to: "Walc2", value: 29 },
    { from: "go_out2", to: "Walc3", value: 12 },
    { from: "go_out2", to: "Walc4", value: 6 },
    { from: "go_out2", to: "Walc5", value: 2 },
    { from: "go_out3", to: "Walc1", value: 47 },
    { from: "go_out3", to: "Walc2", value: 37 },
    { from: "go_out3", to: "Walc3", value: 35 },
    { from: "go_out3", to: "Walc4", value: 7 },
    { from: "go_out3", to: "Walc5", value: 4 },
    { from: "go_out4", to: "Walc1", value: 26 },
    { from: "go_out4", to: "Walc2", value: 9 },
    { from: "go_out4", to: "Walc3", value: 22 },
    { from: "go_out4", to: "Walc4", value: 23 },
    { from: "go_out4", to: "Walc5", value: 6 },
    { from: "go_out5", to: "Walc1", value: 9 },
    { from: "go_out5", to: "Walc2", value: 6 },
    { from: "go_out5", to: "Walc3", value: 9 },
    { from: "go_out5", to: "Walc4", value: 13 },
    { from: "go_out5", to: "Walc5", value: 16 }
]
chart2.dataFields.fromName = "from";
chart2.dataFields.toName = "to";
chart2.dataFields.value = "value";
chart2.paddingLeft = 35;
chart2.paddingRight = 35;

// make nodes draggable
var nodeTemplate = chart2.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.label.fill = am4core.color("#ffffff");
nodeTemplate.label.value = "[bold]{value}[/b]";

var nodeLink = chart2.links.template;
var bullet = nodeLink.bullets.push(new am4charts.CircleBullet());
bullet.fillOpacity = 1;
bullet.circle.radius = 5;
bullet.locationX = 0.5;

// create animations
chart2.events.on("ready", function() {
    for (var i = 0; i < chart2.links.length; i++) {
        var link = chart2.links.getIndex(i);
        var bullet = link.bullets.getIndex(0);

        animateBullet(bullet);
    }
})

function animateBullet(bullet) {
    var duration = 3000 * Math.random() + 2000;
    var animation = bullet.animate([{ property: "locationX", from: 0, to: 1 }], duration)
    animation.events.on("animationended", function(event) {
        animateBullet(event.target.object);
    })
}

var linkTemplate = chart2.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.15;
linkTemplate.tooltipText = "{value.value}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;


//NEW CODE
var chart = am4core.create("chartdiv2", am4charts.ChordDiagram);

// colors of main characters
chart.colors.saturation = 0.45;
chart.colors.step = 3;
var colors = {
    Rachel:chart.colors.next(),
    Monica:chart.colors.next(),
    Phoebe:chart.colors.next(),
    Ross:chart.colors.next(),
    Joey:chart.colors.next(),
    Chandler:chart.colors.next()
}


chart.data = [
// node property fields take data from data items where they are first mentioned, that's 
// why we add empty data items at the beginning and set colors here


// real data

    { from: "age15", to: "Walc1", value: 46 },
    { from: "age16", to: "Walc1", value: 42 },
    { from: "age17", to: "Walc1", value: 25 },
    { from: "age18", to: "Walc1", value: 27 },
    { from: "age19", to: "Walc1", value: 9 },
    { from: "age20", to: "Walc1", value: 2 },
    { from: "age21", to: "Walc1", value: 0 },
    { from: "age22", to: "Walc1", value: 0 },
    { from: "age15", to: "Walc2", value: 12 },
    { from: "age16", to: "Walc2", value: 23 },
    { from: "age17", to: "Walc2", value: 23 },
    { from: "age18", to: "Walc2", value: 20 },
    { from: "age19", to: "Walc2", value: 7 },
    { from: "age20", to: "Walc2", value: 0 },
    { from: "age21", to: "Walc2", value: 0 },
    { from: "age22", to: "Walc2", value: 0 },
    { from: "age15", to: "Walc3", value: 13 },
    { from: "age16", to: "Walc3", value: 15 },
    { from: "age17", to: "Walc3", value: 27 },
    { from: "age18", to: "Walc3", value: 16 },
    { from: "age19", to: "Walc3", value: 8 },
    { from: "age20", to: "Walc3", value: 0 },
    { from: "age21", to: "Walc3", value: 1 },
    { from: "age22", to: "Walc3", value: 0 },
    { from: "age15", to: "Walc4", value: 8 },
    { from: "age16", to: "Walc4", value: 16 },
    { from: "age17", to: "Walc4", value: 15 },
    { from: "age18", to: "Walc4", value: 12 },
    { from: "age19", to: "Walc4", value: 0 },
    { from: "age20", to: "Walc4", value: 0 },
    { from: "age21", to: "Walc4", value: 0 },
    { from: "age22", to: "Walc4", value: 0 },
    { from: "age15", to: "Walc5", value: 3 },
    { from: "age16", to: "Walc5", value: 8 },
    { from: "age17", to: "Walc5", value: 8 },
    { from: "age18", to: "Walc5", value: 7 },
    { from: "age19", to: "Walc5", value: 0 },
    { from: "age20", to: "Walc5", value: 1 },
    { from: "age21", to: "Walc5", value: 0 },
    { from: "age22", to: "Walc5", value: 1 }
   
]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 0.5;
chart.minNodeSize = 0.01;
chart.startAngle = 80;
chart.endAngle = chart.startAngle + 360;
chart.sortBy = "value";
chart.fontSize = 10;

var nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{age}'s consume: {total}";
nodeTemplate.label.fill = am4core.color("#ffffff");
nodeTemplate.label.value = "[bold]{value}[/b]";

// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function(event) {    
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    }) 

    node.label.isHover = true;   
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function(event) {
    var node = event.target;
    node.outgoingDataItems.each(function(dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function(dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;


label.fillOpacity = 0.4;
let labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;

nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most
nodeTemplate.adapter.add("fill", function(fill, target) {
    let node = target;
    let counters = {};
    let mainChar = false;
    node.incomingDataItems.each(function(dataItem) {
        if(colors[dataItem.toName]){
            mainChar = true;
        }

        if(isNaN(counters[dataItem.fromName])){
            counters[dataItem.fromName] = dataItem.value;
        }
        else{
            counters[dataItem.fromName] += dataItem.value;
        }
    })
    if(mainChar){
        return fill;
    }

    let count = 0;
    let color;
    let biggest = 0;
    let biggestName;

    for(var name in counters){
        if(counters[name] > biggest){
            biggestName = name;
            biggest = counters[name]; 
        }        
    }
    if(colors[biggestName]){
        fill = colors[biggestName];
    }
  
    return fill;
})

// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.15;
linkTemplate.tooltipText = "{value.value}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;

// 3rd diagram
var chart3 = am4core.create("chartdiv3", am4charts.RadarChart);
chart3.scrollbarX = new am4core.Scrollbar();


chart3.data = [
    { category: "h1-W1", value: 20 },
    { category: "h2-W1", value: 15 },
    { category: "h3-W1", value: 41 },
    { category: "h4-W1", value: 28 },
    { category: "h5-W1", value: 47 },
    { category: "h1-W2", value: 11 },
    { category: "h2-W2", value: 8 },
    { category: "h3-W2", value: 20 },
    { category: "h4-W2", value: 13 },
    { category: "h5-W2", value: 33 },
    { category: "h1-W3", value: 9 },
    { category: "h2-W3", value: 14 },
    { category: "h3-W3", value: 18 },
    { category: "h4-W3", value: 12 },
    { category: "h5-W3", value: 27 },
    { category: "h1-W4", value: 5 },
    { category: "h2-W4", value: 6 },
    { category: "h3-W4", value: 7 },
    { category: "h4-W4", value: 5 },
    { category: "h5-W4", value: 28 },
    { category: "h1-W5", value: 2 },
    { category: "h2-W5", value: 2 },
    { category: "h3-W5", value: 5 },
    { category: "h4-W5", value: 8 },
    { category: "h5-W5", value: 11 }
]

chart3.radius = am4core.percent(100);
chart3.innerRadius = am4core.percent(50);


// Create axes
var categoryAxis = chart3.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.tooltip.disabled = true;
categoryAxis.renderer.minHeight = 110;
categoryAxis.renderer.grid.template.disabled = true;
//categoryAxis.renderer.realFill = am4core.color("#ffffff");
//categoryAxis.renderer.labels.template.disabled = true;
let labelTemplate = categoryAxis.renderer.labels.template;
labelTemplate.radius = am4core.percent(-60);
labelTemplate.location = 0.5;
labelTemplate.relativeRotation = 90;

var valueAxis = chart3.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.disabled = true;
valueAxis.renderer.labels.template.disabled = true;
valueAxis.tooltip.disabled = true;

// Create series
var series = chart3.series.push(new am4charts.RadarColumnSeries());
series.sequencedInterpolation = true;
series.dataFields.valueY = "value";
series.dataFields.categoryX = "category";
series.columns.template.strokeWidth = 0;
series.tooltipText = "{valueY}";
series.columns.template.radarColumn.cornerRadius = 10;
series.columns.template.radarColumn.innerCornerRadius = 0;

series.tooltip.pointerOrientation = "vertical";

// on hover, make corner radiuses bigger
let hoverstate2 = series.columns.template.radarColumn.states.create("hover");
hoverstate2.properties.cornerRadius = 0;
hoverstate2.properties.fillOpacity = 1;


series.columns.template.adapter.add("fill", function(fill, target) {
  return chart3.colors.getIndex(target.dataItem.index);
})

// Cursor
chart3.cursor = new am4charts.RadarCursor();
chart3.cursor.innerRadius = am4core.percent(50);
chart3.cursor.lineY.disabled = true;
}



