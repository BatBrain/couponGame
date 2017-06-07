<?php
/**
* Plugin Name: Gamey Coupons
* Plugin URI: github.com/BatBrain
* Author: Sol Ferguson
* Author URI: github.com/BatBrain
*/
function themeslug_enqueue_style() {
	wp_enqueue_style( 'core', plugin_dir_url(__FILE__) . 'styles.css');
  exit;
}

function themeslug_enqueue_script() {
	wp_enqueue_script( 'my-js', plugin_dir_url(__FILE__) . 'bundle.js');
  exit;
}

add_action( 'wp_enqueue_scripts', 'themeslug_enqueue_style' );
add_action( 'wp_enqueue_scripts', 'themeslug_enqueue_script' );
?>
