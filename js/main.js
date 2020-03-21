$(document).ready(function() {
    var x = window.matchMedia("(max-width:991px)");
    if (x.matches) {
        $('.dropdown_link li').show();
    } else {
        $('.dropdown_link li').hide();
        $('.dropdown_link').hover(function() {
            $(this).find('li').show(); }, 
            function() {
                $(this).find('li').hide();
        });
    }
});

$(document).ready(function() {
    var getUrl = $(location).attr('pathname');
    if (getUrl.includes('index')) {
        $('.navbar').css('background-image', 'none');
    } else {
        $('.navbar').css("background-image", "url('images/menu-bg.png')");
    };
});

$(document).ready(function() {
    var checkBox = $("#customCheck1");
    var sendBtn = $(".submit");
    
    $("#customCheck1").click(function() {
		if (checkBox.is(":checked")) {
			sendBtn.removeAttr("disabled");
		} else {
			sendBtn.attr("disabled", "disabled");
		};
    });
    
    var checkBox1 = $("#customCheck2");
    var sendBtn1 = $("#submit2");
    
    $("#customCheck2").click(function() {
		if (checkBox1.is(":checked")) {
			sendBtn1.removeAttr("disabled");
		} else {
			sendBtn1.attr("disabled", "disabled");
		};
    });
    
    var checkBox2 = $("#customCheck3");
    var sendBtn2 = $("#submit3");
    
    $("#customCheck3").click(function() {
		if (checkBox2.is(":checked")) {
			sendBtn2.removeAttr("disabled");
		} else {
			sendBtn2.attr("disabled", "disabled");
		};
    });
    
    var checkBox3 = $("#customCheck4");
    var sendBtn3 = $("#submit4");
    
    $("#customCheck4").click(function() {
		if (checkBox3.is(":checked")) {
			sendBtn3.removeAttr("disabled");
		} else {
			sendBtn3.attr("disabled", "disabled");
		};
	});
});

function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
};

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
};

$('.dropdown_item').click( function(){
    document.getElementById("mySidepanel").style.width = "0";
});