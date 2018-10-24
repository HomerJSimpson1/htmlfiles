<?php
	class myClass {
	      public $name = "Benson";
	      public function myClass($n) {
	      	     $this->name = $n;
	      }
	      public function sayHello() {
	      	     echo "HELLO! My name is ".$this->name;
	      }
	}

	class childClass extends myClass {
	      // code goes here
	}

	$object1 = new childClass("Baby Benson");
	$object1->sayHello();
?>