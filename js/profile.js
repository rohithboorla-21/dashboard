function enableEdit() {
    var form = document.getElementById('editForm');
    var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].readOnly = false;
    }
    document.querySelector('button[type="submit"]').style.display = 'block';
    document.querySelector('button[type="button"]').style.display = 'none';
  }