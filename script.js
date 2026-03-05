$('#home').show();
$('#description').hide();
$('#controls').hide();
$('#game').hide();

$('#homePage').click(showHome);
$('#descriptionPage').click(showDescription);
$('#controlsPage').click(showControls);
$('#gamePage').click(showGame);

function showHome () {
    $('#home').show();
    $('#description').hide();
    $('#controls').hide();
    $('#game').hide();
}

function showDescription () {
    $('#home').hide();
    $('#description').show();
    $('#controls').hide();
    $('#game').hide();
}

function showControls () {
    $('#home').hide();
    $('#description').hide();
    $('#controls').show();
    $('#game').hide();
}

function showGame () {
    $('#home').hide();
    $('#description').hide();
    $('#controls').hide();
    $('#game').show();
}