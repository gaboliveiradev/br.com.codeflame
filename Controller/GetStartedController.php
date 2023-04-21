<?php

namespace App\Controller;

class GetStartedController extends Controller {
    public static function index() {
        parent::render("getstarted/index.view");
    }

    public static function viewCommands() {
        parent::render("getstarted/commands.view");
    }
}