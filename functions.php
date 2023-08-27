<?php 

function validation() {
    if(isset($_POST['disc'])) {
        if(
            isset($_POST['disc']['title'])
            &&
            $_POST['disc']['title'] != ''
            &&
            isset($_POST['disc']['author'])
            &&
            $_POST['disc']['author'] != ''
            &&
            isset($_POST['disc']['year'])
            &&
            $_POST['disc']['year'] != ''
            &&
            isset($_POST['disc']['img'])
            &&
            $_POST['disc']['img'] != ''
        ) {
            return true;
        }
        else {
            return false;
        }
    }   
}