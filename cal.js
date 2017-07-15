    function getEBI(id) {
    	return document.getElementById(id);
    };

    function getEBC(className) {
    	return document.getElementsByClassName(className);
    };

    var k;

    var month = getEBI('month');

    var pre = getEBI('pre');

     var next = getEBI('next');

    var last = getEBI('last');

    var today = getEBI('today');

    var display = getEBI('display');

    var todayDate = getEBI('current');
var status = 0;

	months = ["January","February","March","April","May","June","July","August","Septemper","October","November","December"];



	dates=[];

	for(var i =0; i<32; i++)
	{
		

		dates[i] = i+1 ;
	}

	dates[31] = "next 1";

	

	var head = getEBC("head");

	var date = getEBC("date");

	var m;


	 var currentday;

    var currentmonth;

    var currentdate ;

    var currentyear ;

    var year ;



   today.addEventListener('click',current );
    window.addEventListener('pageshow',current );
   
   
function current(event) {
		  currentday = Date().slice(0,3);

     currentmonth = Date().slice(4,7);

     currentdate = Date().slice(8,10);

     currentyear = Date().slice(11,15);

     year = currentyear;

    console.log(currentday,currentmonth,currentdate,currentyear);

    todayDate.innerHTML = Date();

       for(var i=0; i<12; i++)
    {
    	if(months[i].slice(0,3)=="Jul") 
    	{
    		display.innerHTML = months[i].slice(0,3) + " " + "2017";
    		m = i+1;
    	}

    }
         var day = "SAT"


	for(var i=0; i<42; i++)
{
	date[i].innerHTML = "-";
}

	for( i = 0; i < 42; i++)

	{
		if(i<6)
		{
			date[i].innerHTML = "-";

		}



	else
	{
	date[i].innerHTML = dates[i-6];

	if(dates[i-6]==31)
	{   
		status = 31;
		break;
	}
	 
	
		
	}


		
}

	if (status==31)
	{
		date[i+1].innerHTML=dates[31];
	}


};

    

    /*	var begindate = parseInt(currentdate);
    	var beginday = currentday;

    	


        
        var b;

    	for(var i=0; i<33; i++)
    	{
    		if(begindate==1)
    		{ b=i;
    		break;

    	}

    	else
    		begindate--;

    		
    	}

    	//console.log(begindate);




 
	
    beginday=date[b+1].headers


	console.log(beginday);

		for(var i=0; i<42; i++)
{
	date[i].innerHTML = "-";
}

	


	if((months[m-1]=="April" ) || (months[m-1]=="June") || (months[m-1]=="Septemper") || (months[m-1]=="November")){


    	for( i = 0; i < 42; i++)

	{
		if(date[i].headers!= beginday)
		{
			date[i].innerHTML = "-";

		}

		else


	  {date[i].innerHTML = dates[begindate-1];

	begindate++; 

       if(dates[begindate-2]==dates[31])

            {
            	break;
            }



        }

			
	}
}

else
{
   	for( i = 0; i < 42; i++)

	{
		if(i<(6))
		{
			date[i].innerHTML = "-";

		}

		else


	  {date[i].innerHTML = dates[begindate-1];

	begindate++; 

            if(dates[begindate-2]==dates[31])

            {
            	break;
            }
        

         }

			
	}
}*/







	month.addEventListener('click',function(event){

		//console.log(event);

		todayDate.innerHTML = "";
		

		if(m>11)
		{
           m = 0;
           currentyear = parseInt(currentyear) + 1;
		}

		display.innerHTML = months[m].slice(0,3) + " " + currentyear;
		m = m+1;


		var day;


    for(var i=0; i<42; i++)
    {     

     if( date[i].innerHTML == dates[31])


     {
     	//console.log(i);
     	 day = date[i].headers;
     }

 }


          for(var j = 0 ; j < 7 ; j++)
	{
		if (date[j].headers==day) {
			 k = j;
		}
	}

	for(var i=0; i<42; i++)
{
	date[i].innerHTML = "-";
}

	

	for( i = 0; i < 42; i++)

	{
		if(i<k)
		{
			date[i].innerHTML = "-";

		}

		else {
if((months[m-1]=="April" )|| (months[m-1]=="June") || (months[m-1]=="Septemper") || (months[m-1]=="November"))
	{

       if (dates[i-k] <= 29) {
	  date[i].innerHTML = dates[i-k];

    
    }

    else
    { status = 30;
    break;
    }
  }

	if(months[m-1]=="February")
	{
		if (dates[i-k]<=28) {
			date[i].innerHTML = dates[i-k];
		}

		 else
    {
    	status = 28;
    break;
    }

	} 


	

	else
	{
	date[i].innerHTML = dates[i-k];

	if(dates[i-k]==31)
	{   
		status = 31;
		break;
	}
	 
	
		
	}


		} }

		if( status==30)
		{
	
	date[i].innerHTML = dates[29];
    date[i+1].innerHTML = dates[31];
	}

		if( status==28)
		{
	
	date[i].innerHTML = dates[31];
    
	}

	if (status==31)
	{
		date[i+1].innerHTML=dates[31];
	}


	});

	



		pre.addEventListener('click',function(event){

		//console.log(event);

		todayDate.innerHTML = "";
		

		if(m<2)
		{
           m = 13;
           currentyear = parseInt(currentyear) - 1;
		}

		display.innerHTML = months[m-2].slice(0,3) + " " + currentyear;
		



		var day;


    for(var i=0; i<42; i++)
    {     

     if( date[i].innerHTML == "1")


     {
     	console.log(i);
     	 day = date[i].headers;
     }

 }




          for(var j =41 ; j >= 34 ; j--)
	{
		if (date[j].headers == day) {
			 k = j;
			 console.log(k);
		}
	}



for(var i=0; i<42; i++)
{
	date[i].innerHTML = "-";
}

var b = 31;

date[k].innerHTML = dates[31];

for(var i=k-1; i>=0; i--)



{  












	if((months[m-2]=="April" )|| (months[m-2]=="June") || (months[m-2]=="Septemper") || (months[m-2]=="November"))
	{ 
	date[i].innerHTML = dates[b-2];
	b--;

	if(date[i].innerHTML==1)
{
	break;
}

}



else
{
	date[i].innerHTML = dates[b-1];
	b--;

	if(date[i].innerHTML==1)
{
	break;
}

}




if(months[m-2]=="February")
{
		date[i].innerHTML = dates[b-3];
	

	if(date[i].innerHTML==1)
{
	break;
}


}




}



m= m-1;


	});



	next.addEventListener('click',function(event){

		//console.log(event);
         


		year = (parseInt(year) + 1) ;

		display.innerHTML = months[m-1].slice(0,3) + " " + year + " " ;
		
		todayDate.innerHTML = "";
		






	

	for(var i = 41; i >=1; i--)

	{ 
		date[i].innerHTML = date[i-1].innerHTML;

		
		
	}



	})

		last.addEventListener('click',function(event){

		//console.log(event);

		

		 year = (parseInt(year) - 1) ;

		display.innerHTML = months[m-1].slice(0,3) + " " + year + " " ;

		todayDate.innerHTML = "";
		






	

	for(var i = 0; i <42; i++)

	{ var temp;
		temp=date[i+1].innerHTML;
		date[i].innerHTML = temp;

		
		
	}



	});