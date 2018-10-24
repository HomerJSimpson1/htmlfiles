<?php
	class myClass {
	      public $name = "Jimbo";
	      public function setName($n) {
	      	     $this->name = $n;
	      }
	      public function sayHello() {
	      	     echo "HELLO! My name is ".$this->name;
	      }
	}

	$object1 = new myClass();
	$object1->setName("Julie");
	$object1->sayHello();
?>