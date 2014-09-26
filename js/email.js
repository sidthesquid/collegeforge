$("#email").submit(function(event){
	event.preventDefault();

	$.ajax({
	  type: 'post',
	  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
	  data: {
	    'key': 'h0Qiz6rIhLrqahKKtwYKeg',
	    'message': {
	      'from_email': 'anurag.papolu@gmail.com',
	      'to': [
	          {
	            'email': 'xxjavinmpxx@gmail.com',
	            'type': 'to'
	          }
	        ],
	      'autotext': 'true',
	      'subject': $("#email_input").val(),
	      'html': $("#email_input").val()
	    }
	  }
	 }).done(function(response) {
	   $(".control-label").text("Thanks!"); // if you're into that sorta thing
	 });
});