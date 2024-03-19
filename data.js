



<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>輸入溫濕度資料</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <!-- 給行動裝置或平板顯示用，根據裝置寬度而定，初始放大比例 1 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 載入 bootstrap 的 css 方便我們快速設計網站-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="shortcut icon" href="images/favicon.ico">
    <style>
        /* 將單一元素置中並更改字體 */
        h1.text-center {
            text-align: center;
            font-family: "標楷體", sans-serif; /* 設置為標楷體字型 */
        }
    </style>

    <style>
        /* 添加版權樣式 */
        .footer {
            background-color: #f4f4f4;
            padding: 10px 0;
            text-align: center;
            position: fixed;
            bottom: 0;
            width: 100%;
        }


        b {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40vh;
            
        }
        #rightColumn {
            flex: 1;
            padding: 100px;
        }#r {
            flex: 1;
            padding: 200px;
        }
        #a {
            flex: 1;
            padding: 80px;
        }
    </style>

    

    
</head>
<body>

    
    <div class="jumbotron">
        <div class="container">
          <!-- 建立第一個 row 空間，裡面準備放格線系統 -->
          <div class="row">
            <!-- 在 xs 尺寸，佔12格，可參考 http://getbootstrap.com/css/#grid 說明-->
            <div class="col-xs-12">
              <!--網站標題-->
                
              <h1 class="text-center">溫溼度感測</h1>
              <h5 class="text-center">
                  <p id="datetime"></p>
                      <script>
                          document.getElementById('datetime').textContent = new Date().toLocaleString();
                      </script>
              </h5>
  
              <!-- 選單 -->
              <ul class="nav nav-pills">
                <li role="presentation"><a href="index.html">首頁</a></li>
                <li role="presentation" class="active"><a href="input.html">輸入資料</a></li>
                <li role="presentation"><a href="form.html">折線圖</a></li>
                <li role="presentation"><a href="about.html">about</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>








 










     
      
        <b>
            <div id="a">
          <form id="dataForm">
              <label for="data"> <h2> 輸入資料：</h2></label><br>
              <textarea id="data" name="data" rows="5" cols="30" required></textarea>
              <br>
              <button type="submit">提交</button>
          </form>
        </div>


          <div id="r">
          <div id="analysisResult">
              <br><hr><h2>格式化：</h2>
              <ul id="resultList"></ul>
          </div>
      </div>




          <script>
            document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 防止表單提交到另一個頁面

    var inputData = document.getElementById("data").value;

    // 使用正則表達式進行匹配
    var matches = inputData.match(/\d+/g);

    var resultList = document.getElementById("resultList");
    resultList.innerHTML = ""; // 清空先前的結果

    if (matches) {
        var output = '';
        for (var i = 0; i < matches.length; i++) {
            // 根據數字的奇偶性決定要輸出的文字
            if (i % 2 === 0) {
                output += 't=' + matches[i] + ' ';
            } else {
                output += 'h=' + matches[i] + ' <br>'; // 加上換行
            }
        }
        // 創建列表項並添加到結果列表中
        var listItem = document.createElement("li");
        listItem.innerHTML = output.trim(); // 使用 innerHTML 而非 textContent
        resultList.appendChild(listItem);
    } else {
        resultList.innerHTML = "<li>無匹配結果</li>";
    }
});

          </script>
      
      

























      <div id="rightColumn">
      <h2>目前系統數據</h2>

      <div id="outputData">
          <!-- 這裡會放置資料輸出 -->
      </div>
  <br><script src="data.js"></script>
      <script>
          // 輸入的資料
          
  
          // 移除所有換行符
          var dataArr = myData.split('\n');
  
          // 按照指定的格式分割資料
          var dataArr = myData.split(' ');
  
          var outputDataDiv = document.getElementById("outputData");
  
          // 將資料按照指定格式輸出到網頁上
          for (var i = 0; i < dataArr.length; i++) {
              if (i % 2 === 0) {
                  var p = document.createElement("p");
                  var line = "";
                  // 每兩個資料為一組，以 't=數字 h=數字' 的格式顯示
                  line += dataArr[i] + ' ' + dataArr[i + 1];
                  p.textContent = line;
                  outputDataDiv.appendChild(p);
              }
          }
      </script>
      





    </div>





</b>
     





    <br><br><br><br><br><br>
      

    <footer class="footer">
        <p>&copy; 2024/3/18初稿 RCcc. orz.</p>
    </footer>


</body>
</html>

