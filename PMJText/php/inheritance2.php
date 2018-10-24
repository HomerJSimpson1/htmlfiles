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
	      public function sayHello() {
	      	     echo "I will not tell you my name.";
	      }
	}

	$object1 = new childClass("Baby Benson");
	$object1->sayHello();
?>