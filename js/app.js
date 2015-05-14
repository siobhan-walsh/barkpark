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
                $("#rb").click(
                    function(){
                        $("#rb img").css({"opacity":"1"});
                        $(".imgclick img:not(#rb img)").css({"opacity":"0.6"});
                    }
                );
				$("#wl").click(
                    function(){
                        $("#wl img").css({"opacity":"1"});
                        $(".imgclick img:not(#wl img)").css({"opacity":"0.6"});
                    }
                );
				$("#qe").click(
                    function(){
                        $("#qe img").css({"opacity":"1"});
                        $(".imgclick img:not(#qe img)").css({"opacity":"0.6"});
                    }
                );
				$("#st").click(
                    function(){
                        $("#st img").css({"opacity":"1"});
                        $(".imgclick img:not(#st img)").css({"opacity":"0.6"});
                    }
                );
         
		
		
             
			 
			   
            //for the search funtion
            
                $("#search").blur(function(){
                     
                    $("#webinfo").css("opacity", "1");
                    
                    
                });
                
                
                $(".search").keyup(function(){
                
                        searching();
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
                    
					
	
	var imggal = function(){
		
		$(".gallery img").click(function(){
			
			
			
			
			
		}
		);
		
		
		
	}
    
    var searching = function(){
                    var term = $(".search").val();
                    
                    console.log("ITS PRESSED");
                    
                    if(term.indexOf('m') == 0){
                        
                        $("#webinfo").css("opacity", "0.4");
                        $(".sresults").css("display","block").html(
                            '<a href="mccartney.html"><div class=" thumb large-4 small-6 columns">'+
                                '<img src="img/mccartney-thumb.jpg">'+
                            '</div>'+
                            '<div class="thumbinfo large-6 small-6 left columns">'+
                                '<h5>McCartney Creek Park</h5></a>'+
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
                    } else if(term.indexOf('s') == 0){
                        
                        $("#webinfo").css("opacity", "0.4");
                        $(".sresults").show().html(
                            '<div class=" thumb small-6 large-4 columns">'+
                                '<a href="seylynn.html"><img src="img/seylynn-thumb.jpg"></a>'+
                            '</div>'+
                            '<div class="thumbinfo small-6 left columns">'+
                                '<a href="seylynn.html"><h5>Seylynn Park</h5></a>'+
                                '<h6 class="subheader">Mountain Highway</h6>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="fi-paw"></i>'+
                                '<i class="grey fi-paw"></i><br>'+
                                '<p class="ilabel">4/5 paws</p>'+
                            '</div>'+
                            '<div class=" thumb small-6 large-4 columns">'+
                                '<a href="stanleypark.html"><img src="img/stanley-thumb.jpg"></a>'+
                            '</div>'+
                            '<div class="thumbinfo small-6 left columns">'+
                                '<a href="stanleypark.html"><h5>Stanley Park</h5></a>'+
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
                    } else if(term.indexOf() == -1){
                        console.log("THAT AIN'T NO M");
                        $("#webinfo").css("opacity", "0.4");
                        $(".sresults").css("display","none")
                        console.log(term)
                        console.log(term.indexOf('m'));
                        
                    }
                }
    
        }				
);  