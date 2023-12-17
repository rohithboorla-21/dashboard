    function copyLink() {
      var copyText = document.getElementById('referralLink');
      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
      document.execCommand('copy');
      alert('Link copied to clipboard!');
    }