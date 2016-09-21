var currentBlock = "blockHome";

function switchBlockT(newBlock, secondBtn) {
    console.log("switchBlock 2", secondBtn);
    $("#"+currentBlock).hide();
    $("#"+newBlock).show();
    currentBlock = newBlock;

    $(".navSelectable").removeClass("active");
    $(".navSelectable .btn-player-"+secondBtn).parent().addClass("active");
}

function switchBlock(newBlock) {
    console.log("switchBlock 1");
    $("#"+currentBlock).hide();
    $("#"+newBlock).show();
    currentBlock = newBlock;

    $(".navSelectable").removeClass("active");
    $(".navSelectable .btn-"+newBlock).parent().addClass("active");
}

function simulateClickTabT(newBlock, secondBtn) {
    console.log("simulateClickTab 2");
    switchBlockT(newBlock, secondBtn);
}

function simulateClickTab(newBlock) {
    console.log("simulateClickTab 1");
    switchBlock(newBlock);
}


var participationPB;
var winGamePB;
var genderRepPB;
var arbitrePB;

$(document).ready(function() {

    $('.parallax').parallax();
    $('.modal-trigger').leanModal();

    $('#clickUserBoardDesktop').click(function() {
        $("nav").removeClass("blue").addClass("white");
        $("nav a").addClass("blue-text text-darken-4");
    });
    
    
    $('.tab-btn-blockHome').bind('click', function() {
        switchBlock('blockHome');
    });
    $('.tab-btn-blockAllStats').bind('click', function() {
        switchBlock('blockAllStats');
    });
    $('.tab-btn-blockTools').bind('click', function() {
        switchBlock('blockTools');
    });
    $('.tab-btn-blockAllPlayers').bind('click', function() {
        switchBlock('blockAllPlayers');
    });
    
    $('.btn-blockHome').click(function() {
        simulateClickTab('blockHome');
    });
    $('.btn-blockAllStats').click(function() {
        simulateClickTab('blockAllStats');
    });
    $('.btn-blockTools').click(function() {
        simulateClickTab('blockTools');
    });
    $('.btn-blockAllPlayers').click(function() {
        simulateClickTab('blockAllPlayers');
    });
    
    
    console.log("currentblock = ",currentBlock);
   
    //
    participationPB = new ProgressBar.Circle('#participationPB', {
      color: '#0288d1',
      strokeWidth: 3,
      trailWidth: 3,
      duration: 1500,
      text: {
        value: '0%'
      },
      step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0) + "%");
      }
    });
    winGamePB = new ProgressBar.Circle('#winGamePB', {
      color: '#0288d1',
      strokeWidth: 3,
      trailWidth: 3,
      duration: 1500,
      text: {
        value: '0%'
      },
      step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0) + "%");
      }
    });
    genderRepPB = new ProgressBar.Circle('#genderRepPB', {
      color: '#0288d1',
      strokeWidth: 3,
      trailWidth: 3,
      duration: 1500,
      text: {
        value: '0%'
      },
      step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0) + "%");
      }
    });
    arbitrePB = new ProgressBar.Circle('#arbitrePB', {
      color: '#0288d1',
      strokeWidth: 3,
      trailWidth: 3,
      duration: 1500,
      text: {
        value: '0%'
      },
      step: function(state, bar) {
        bar.setText((bar.value() * 100).toFixed(0) + "%");
      }
    });
    
    
});