<?php
/**
* Plugin Name: Gamey Coupons
* Plugin URI: github.com/BatBrain
* Author: Sol Ferguson
* Author URI: github.com/BatBrain
*/
//Exit if accessed directly
if (! defined( 'ABSPATH') ) {
	exit;
}
function themeslug_enqueue_style() {
	wp_enqueue_style( 'coup_plug_css', plugin_dir_url(__FILE__) . 'styles.css');
};

function themeslug_enqueue_script() {
	wp_enqueue_script( 'coup_plug_js', plugin_dir_url(__FILE__) . 'bundle.js');
};

add_action( 'wp_enqueue_scripts', 'themeslug_enqueue_style' );
add_action( 'wp_enqueue_scripts', 'themeslug_enqueue_script' );

$dataToBePassed = array(
    'home'            => plugin_dir_url(__FILE__)
);

wp_localize_script( 'coup_plug_js', 'php_vars', $datatoBePassed );
?>
