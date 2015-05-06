// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(

	function(){
		
                var clicked = false;
                
            //for the mobile image navigation feedback
            
       
                
                $("#mc").click(
                    function(){
                        $("#mc img").css({"opacity":"1"});
                        $(".imgclick img:not(#mc img)").css({"opacity":"0.6"});
                    }
                );
        
                $("#hb").click(
                    function(){
                        $("#hb img").css({"opacity":"1"});
                        $(".imgclick img:not(#hb img)").css({"opacity":"0.6"});
                    }
                );
                $("#km").click(
                    function(){
                        $("#km img").css({"opacity":"1"});
                        $(".imgclick img:not(#km img)").css({"opacity":"0.6"});
                    }
                );
                $("#sl").click(
                    function(){
                        $("#sl img").css({"opacity":"1"});
                        $(".imgclick img:not(#sl img)").css({"opacity":"0.6"});
                    }
                );
                
         
		
		var clicked = false;
             
			 
			   
            //for the search funtion
                $("#search").keypress(function(e){
                    
                    var term = $(".search").val();
                    
                    console.log("ITS PRESSED");
                    
                    if(term.startsWith('m')){
                        
                        $("#webinfo").css("opacity", "0.4");
                        $("#sresults").show().html(
                            '<a href="mccartney.html"><div class=" thumb small-6 columns">'+
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
                            '</div></a>'
                       );
                        
                        console.log("ITS AN MM");
                    } else if(term.startsWith('s')){
                        
                        $("#webinfo").css("opacity", "0.4");
                        $("#sresults").show().html(
                            '<div class=" thumb small-6 columns">'+
                                '<img src="img/seylynn-thumb.jpg">'+
                            '</div>'+
                            '<div class="thumbinfo small-6 left columns">'+
                                '<h5>Seylynn Park</h5>'+
                                '<h6 class="subheader">Mountain Highway</h6>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="grey fi-paw"></i><br>'+
                                '<p class="ilabel">4/5 paws</p>'+
                            '</div>'+
                            '<div class=" thumb small-6 columns">'+
                                '<img src="img/stanley-thumb.jpg">'+
                            '</div>'+
                            '<div class="thumbinfo small-6 left columns">'+
                                '<h5>Stanley Park</h5>'+
                                '<h6 class="subheader">Lagoon Drive</h6>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="grey fi-paw"></i>'+
                                '<i class="grey fi-paw"></i>'+
                                '<i class="grey fi-paw"></i><br>'+
                                '<p class="ilabel">2/5 paws</p>'+
                            '</div>'
                       );
                        
                        console.log("ITS AN MM");
                    } else {
                        console.log("THAT AIN'T NO M");
                        $("#webinfo").css("opacity", "0.4");
                        
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