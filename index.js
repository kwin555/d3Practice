// select the svg container first
const svg = d3.select('svg');

d3.json('planets.json').then(data => {
    const circles = svg.selectAll('circle')
        .data(data);
    // add attrs to circles already in DOM
    circles.attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d=> d.fill);
    //appending circles leftover inside data and add their attrs 
    circles.enter()
        .append('circle') 
        .attr('cy', 200)
        .attr('cx', d => d.distance)
        .attr('r', d => d.radius)
        .attr('fill', d=> d.fill);
});