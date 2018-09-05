function loadRepo() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && 200) {
      results = JSON.parse(this.responseText);
      for (var i = 0; i < results.length; i++) {
        console.log(results[i].name);

        var ul = document.getElementById('repositories');
        var li = document.createElement('li');
        var a = document.createElement('a');

        li.appendChild(document.createTextNode(results[i].name));

        a.appendChild(li);
        a.setAttribute('href', results[i].html_url);
        ul.appendChild(a);
      }
    }
  };
  xhttp.open('GET', 'https://api.github.com/users/cliffmccall1/repos', true);
  xhttp.send();
}
