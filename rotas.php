<?php
use App\Controller\{
    DocumentationController,
    WelcomeController,
    GetStartedController
};

$parse_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

switch($parse_uri) {

    
    case "/about":
        WelcomeController::index();
    break;

    case "/getstarted":
        GetStartedController::index();
    break;

    case "/commands":
        GetStartedController::viewCommands();
    break;

    default:
        header("Location: /about");
    break;
}