<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href='http://fonts.googleapis.com/css?family=Armata' rel='stylesheet' type='text/css'> 
        <link href="css/gridder-ajax.css" rel="stylesheet">
        <link href="css/demo.css" rel="stylesheet">
    </head>
    <body>

        <div class="container">

            <h1>Gridder Demo</h1>
            <p class="headline">Brought to you by <a href="http://www.oriongunning.com">www.oriongunning.com</a>
                
            <h2>With AJAX Demo</h2>
            <ul class="gridder-list">
                <?php 
                $i = 1;
                $columns = 3;
                while($i < 22){
                ?>
                    <li class="item <?php if($i % $columns == 0 || $i == 0){echo 'last';} ?> item-00<?php echo $i * 1000; ?> do-expand-item">
                        <a href="item-00<?php echo $i * 1000; ?>" title="Item <?php echo $i; ?>" class="link">
                            <img src="http://lorempixel.com/300/200/food/?date=<?php echo rand(0,16); ?>" />
                            <span class="title">Item <?php echo $i?></span>
                            <span class="description">A small Description</span>
                        </a>
                        <span class="selectedBox"></span>
                <?php 
                    $i++;
                }
                ?>
            </ul>
            
        </div>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="js/gridder-ajax.js"></script>
        <script>
            $(function() {
                // Call Gridder Ajax
                $('.gridder-list').GridderAjax();
            });
        </script>
    </body>
</html>
