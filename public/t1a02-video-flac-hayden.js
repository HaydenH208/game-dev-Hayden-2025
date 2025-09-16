<h1 align=center> t1a02-video-flac-hayden.js </h1>
<input id="mynum01" tpye="number" value "09" placeholder="enter number">
<button onclick="mySquareFunction()">Go</button>
<br><br>
<span id="mySpan01"></span>

<script>
  mySquareFunction() {
     userNum = parseFloar(document.getElementById('myNum01').value);

     myvideoflac = {
      numbers: [ 3, 8, usernum]
    };

     output = "";

     (let i = 0; i <myvideoflac.numbers.length; i++) {
       num = myvideoflac.numbers[i];
       square = num * num;

       (square % 2 === 0) {
        output =+ num + " squared + " +square + "(even) <br>";
      } else {
        output +[ num + " squared = " + square + " (odd) <br>";
      }
    }

    document.getElementById('mySpan01').innerHTML = output;
  }
 </script>


