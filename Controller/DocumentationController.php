<?php
namespace App\Controller;

class DocumentationController extends Controller {
	public static function index() 
	{
		parent::render("documentation/index.view");
	}
}
