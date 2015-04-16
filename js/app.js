// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(

	function(){
		
		
		var clicked = false;
               
            //for the search funtion
                $("#search").keydown(function(e){
                    
                    console.log("ITS PRESSED");
                    
                    if(e.keyCode == 77){
                        
                        $("#webinfo").css("opacity", "0.4");
                        $("#sresults").show().html(
                            '<div class=" thumb small-6 columns">'+
                                '<img src="img/mccartney-thumb.jpg">'+
                            '</div>'+
                            '<div class="thumbinfo small-6 left columns">'+
                                '<h5>McCartney Creek Park</h5>'+
                                '<h6 class="subheader">Larkhall Crescent</h6>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="grey fi-paw"></i>'+
                                '<i class="grey fi-paw"></i><br>'+
                                '<p class="ilabel">4/5 paws</p>'+
                            '</div>'
                       );
                        
                        console.log("ITS AN MM");
                    } else {
                        console.log("THAT AIN'T NO M");
                        $("#webinfo").css("opacity", "0.4");
                        $("#sresults").show().html('Sorry, there are no results');
                    }
                    
                }
                );
            //for the mobile dropdown menu toggley
		$('#men').click( 
		
                    function(){

                        if(clicked == false){
                            
                            $("#webinfo").css("opacity", "0.4");
                            $("#mendrop").slideDown('slow');
                            clicked = true;
                            
                        } else if(clicked == true){

                            $("#mendrop").slideUp("slow", function(){
                            $("#webinfo").css("opacity", "1");
                            
                        });
                            clicked = false;
                        }
                    }
                );
                    
            // for the accordian plus/minus
            $("accordion").click(
                function(){
                    $("#plusmin").toggleClass('fi-plus fi-minus');
                }
            );
        }				
);  