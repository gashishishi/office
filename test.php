<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<style>
    .bg-black *{
        background-color: black;
    }
    body,body *{
        padding: 0;
        margin: 0;
    }
    .sticky{
        position: sticky;
        top: 0;
        z-index: -1;
    }
    img{
        max-width: 100%;
    }
    .high{
        height: 500px;
    }
    .absolute{
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
<div class=" class="bg-black"">
    <section>
<div class="sticky">
<figure>
    <img src="images/meeting03.png" alt="">
</figure>
</div>
<div class="absolute">
    <h3 class="text-center mb-md-3">Continue. It's a continuation.</h3>
    <p>私たちは日々会議を続けています。会議のための会議もしょっちゅうです。しかし私たちは会議をします。</p>
    <p>なぜなら、私たちには夢があるからです。それは、いつの日か仕事をすることです。
    </p>
</div>
<div class="high">
    testtest
</div>
</section>
</div>
</body>
</html>