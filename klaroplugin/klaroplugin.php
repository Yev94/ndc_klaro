<?php
/*
Plugin Name: Banner Cookies NDC Klaro
Plugin URI: https://niveldecalidad.com/
Description: Un plugin  para añadir un banner de consentimiento de cookies
Version: 1.0.0
Author: NDC
Author URI: https://niveldecalidad.com/
*/

function enqueue_klaro_banner_js()
{
    wp_enqueue_script('mi-script-personalizado', plugin_dir_url(__FILE__) . '/ndc_klaro.min.js');
}

add_action('wp_enqueue_scripts', 'enqueue_klaro_banner_js');