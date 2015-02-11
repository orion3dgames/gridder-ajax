<?php
include 'key.php';

$id = explode('-', $_POST['id']);
$id = $id[1];
$url = 'https://global.api.pvp.net/api/lol/static-data/oce/v1.2/champion/'.$id.'/?champData=all&api_key='.$key;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);

// Set so curl_exec returns the result instead of outputting it.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// Get the response and close the channel.
$response = curl_exec($ch);
curl_close($ch);

$champion = json_decode($response, true);
?>

<div class="padding">

    <div class="images">
        <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/<?php echo $champion['name']; ?>_0.jpg" />
    </div>
    <div class="content">
		<div class="navigation">
			<a href="#" class="closeModal">X Close</a>
			<a href="#" class="prevModal">Previous Champion</a> | <a href="#" class="nextModal">Next Champion</a>
		</div>

        <h1 class="title"><?php echo $champion['name'] ; ?></h1>
		<h2><?php echo $champion['title'] ; ?></h2>

        <hr />

        <p class="description">
            <?php echo $champion['lore'] ; ?>
        </p>

    </div>
</div>