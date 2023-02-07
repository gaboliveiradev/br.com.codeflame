<?php

namespace App\Controller;

class GetStartedController extends Controller {
    public static function index() {
        parent::render("getstarted/index.view");
    }
}