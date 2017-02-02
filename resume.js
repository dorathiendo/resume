$(document).ready(function(){
    $.getJSON('experience.json', function(data){
        createExperienceDiv(data);
    });
});

function createExperienceDiv(data){
    var section = $('#experience');
    for(var i = 0; i < data.length; i++){
        var title = $('<h3 class="title">').html(data[i].title);
        var companyName = $('<h4>').html(data[i].companyName);
        var location = $('<h5 class="location">').html(data[i].location);
        var date = $('<h5>').html(data[i].date);
        var work = $('<ul>');
        for(var j = 0; j < data[i].work.length; j++){
            work.append($('<li>').html(data[i].work[j]));
        }
        var div = $('<div>').append(title, companyName, location, date, work);
        section.append(div);
    }
}