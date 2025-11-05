/*
// ---------------------
const svg = d3.select('#treeSvg');
const svgWrap = document.getElementById('svgwrap');
const panelTitle = $('#panelTitle');
const panelDesc = $('#panelDesc');
const panelLink = $('#panelLink');
const panelTags = $('#panelTags');
const nodeCountEl = $('#nodeCount');
const searchInput = $('#search');
const themeToggle = $('#themeToggle');
const exportJSON = $('#exportJSON');
const exportPNG = $('#exportPNG');
const expandAllBtn = $('#expandAll');
const collapseAllBtn = $('#collapseAll');


let root, treeLayout, g, zoom;
let duration = 350;


function init(){
setupSvg();
build(DATA);
bindControls();
restoreLastView();
window.addEventListener('resize', () => layout());
}


function setupSvg(){
svg.selectAll('*').remove();
const { width } = svgWrap.getBoundingClientRect();
const height = Math.max(480, window.innerHeight - 200);
svg.attr('width', '100%').attr('height', height);


g = svg.append('g').attr('class','root-group').attr('transform','translate(60,40)');


zoom = d3.zoom().scaleExtent([0.2, 3]).on('zoom', (event) => g.attr('transform', event.transform));
svg.call(zoom).on('dblclick.zoom', null);
}


function build(data){
root = d3.hierarchy(data);
root.x0 = 0; root.y0 = 0;
// collapse all except first level
root.children && root.children.forEach(collapse);
if(root.children) root.children.forEach(expandOne);


treeLayout = d3.tree().nodeSize([CONFIG.nodeHeight + CONFIG.verticalSpacing, CONFIG.nodeWidth + CONFIG.horizontalSpacing]);


update(root);
}


function collapse(d){ if(d.children){ d._children = d.children; d._children.forEach(collapse); d.children = null; }}
function expand(d){ if(d._children){ d.children = d._children; d.children.forEach(expand); d._children = null; }}
function expandOne(d){ if(d._children){ d.children = d._children; d._children = null; }}


function update(source){
const tree = treeLayout(root);
const nodes = tree.descendants();
const links = tree.links();


// compute dimensions
const maxX = d3.max(nodes, d => d.x) + 100;
const maxY = d3.max(nodes, d => d.y) + 400;
svg.attr('height', Math.max(480, maxX + 160));


// NODE SELECTION
const node = g.selectAll('g.node').data(nodes, d => d.id || (d.id = ++i));


const nodeEnter = node.enter().append('g').attr('class','node').attr('transform', d => `translate(${source.y0},${source.x0})`).style('cursor','pointer')
.on('click', (event,d) => { toggle(d); focusNode(d); saveLastView(d); update(d); })
.on('mouseover', function(){ d3.select(this).select('rect').attr('filter',null).attr('opacity',0.98).attr('transform','scale(1.02)'); })
.on('mouseout', function(){ d3.select(this).select('rect').attr('transform',null); });


nodeEnter.append('rect').attr('class','node-card').attr('width', CONFIG.nodeWidth).attr('height', CONFIG.nodeHeight).attr('rx',10).attr('ry',10)
.attr('x', -10).attr('y', -CONFIG.nodeHeight/2);


nodeEnter.append('text').attr('class','node-label').attr('dy',4).attr('dx',8).text(d => d.data.name).each(wra
