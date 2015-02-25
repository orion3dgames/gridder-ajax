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

            <h1>Gridder V2 Demo</h1>
            <p class="headline">Brought to you by <a href="http://www.oriongunning.com">www.oriongunning.com</a>

			<?php
			include 'api/key.php';

			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, 'https://global.api.pvp.net/api/lol/static-data/oce/v1.2/champion?api_key='.$key);

			// Set so curl_exec returns the result instead of outputting it.
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
			// Get the response and close the channel.
			$response = curl_exec($ch);
			curl_close($ch);

			$json = json_decode($response, true);

			/*
			echo'<pre style="color: #FFF;">';
			print_r($json);
			echo'</pre>
			*/
			?>

			<ul class="gridder-list">
				<?php foreach($json['data'] as $key => $champion): ?>

					<?php
					$str_replace_strings = array(' ',',',"'",'.');
					$url_image = str_replace($str_replace_strings,'', $champion['name']);
					?>

					<li class="item item-<?php echo $champion['id']; ?> do-expand-item">
                        <a href="item-<?php echo $champion['id']; ?>" title="<?php echo $champion['name']; ?> | <?php echo $champion['title']; ?>" class="link">
                            <div class="image"><img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/<?php echo $url_image; ?>_0.jpg" /></div>
                            <span class="title"><?php echo $champion['name']; ?></span>
                            <span class="description"><?php echo $champion['title']; ?></span>
                        </a>
				<?php endforeach; ?>
            </ul>

        </div>

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="js/gridder-ajax.js"></script>
        <script>
            jQuery(document).ready(function ($) {
                // Call Gridder Ajax

                $('.gridder-list').GridderAjax({
					scrollOffset: 200,
					rootUrl: "/gridder-ajax/"
				});
            });
        </script>
    </body>
</html>
