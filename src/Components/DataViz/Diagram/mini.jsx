import d3 from 'd3';

var node = document.createElement('div');

var data = [{x: 0, y: 20},
            {x: 10, y: 10},
            {x: 20, y: 10}, 
            {x: 30, y: 2}, 
            {x: 40, y: 13}, 
            {x: 50, y: 20}, 
            {x: 60, y: 10}, 
            {x: 70, y: 10}, 
            {x: 80, y: 2}, 
            {x: 90, y: 13}]

// create svg element:
var svg = d3.select(node).append("svg").attr("width", 80).attr("height", 50)


// prepare a helper function
var curveFunc = d3.svg.area().x(function(d) { return d.x })      // Position of both line breaks on the X axis
  .y1(function(d) { return d.y })     // Y position of top line breaks
  .y0(20) 

// Add the path using this helper function
svg.append('path')
  .attr('d', curveFunc(data))
  .attr('stroke', '#1875F0')
  .attr('fill', 'rgba(255,255,255,0.1)')
  .attr('stroke-dasharray', 115)
  .style("stroke-width", 1.5);

export default node;