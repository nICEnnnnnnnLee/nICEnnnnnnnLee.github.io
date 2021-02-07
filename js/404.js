var text = '很抱歉，该页面不存在。';
repeat(text);

function repeat(text) {
  var i = 0,
  repeatable = setInterval(function () {
    var obj = $('#text')
    obj.text(obj.text() + text[i]);
    i++;
    if (i >= text.length) {
      clearInterval(repeatable);
    }
  }, 100);
}