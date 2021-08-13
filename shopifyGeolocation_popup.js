<script>
jQuery.ajax( { //to detetct the IP address & country of user
  url: '//freegeoip.net/json/', 
  type: 'POST',
  dataType: 'jsonp',
  success: function(location) {
    // If the visitor is browsing from Australia.
    if (location.country_code === 'IN') { // make sure its 3 times =
      // Redirect to minnmininau.com
      jQuery.fancybox.open(jQuery('#message')); // id of box to load content from
    }
  }
} );
</script>

<div style="display:none;">
  <div id="message" style="padding:30px;">
    <h1>Testing Geolocation</h1>
    <p>Redirecting you to <a href="https://minmininau.com">www.minmininau.com</a>.</p>
  </div>
</div>