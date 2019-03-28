/* TASK 1*/
console.log('app is alive');

/* TASK 2 */
function switchChannel(channelName) {
   console.log('Tuning into channel ' +  channelName);
   document.getElementById('channel-name').innerHTML = channelName;
   document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank" ><strong>upgrading.never.helps</strong></a>';

    /* TASK 3 change star back to unfilled when clicking on channel*/
    $("#channel-star").attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
}

/* TASK 3 toggle star */
function star() {
    if($("#channel-star").attr("src") === "http://ip.lfe.mw.tum.de/sections/star-o.png") {
        $("#channel-star").attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
    }else{
        $("#channel-star").attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
    }
}

/* TASK 4*/

function selectTab(tab) {
    $('#tab-bar button').removeClass('selected');
    $(tab).addClass('selected');
    console.log('Changing to tab ', tab);
}


/* TASK 5*/
function toggleEmojis() {
    $("#emojis").toggle();
}