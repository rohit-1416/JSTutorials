	
	Banners=new Array('images/bg7.png','images/bg2.png','images/bg1.png','images/bg3.png','images/bg4.png');
	count=0;
    

	
	function rotate()
	{ 
		if(document.images)
	{ count++;
			if(count==Banners.length)
	{ count=0;
	}
	document.img1.src=Banners[count];
	setTimeout("rotate()",2000);
	}
	}
		
		 
	
	
	
	
	
	
	