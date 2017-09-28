$(function () {
   function Button(text) {
      this.text = text || "Hello";
   }

   Button.prototype = {
      create: function () {
         var self = this; // FIX THE BINDING PROBLEM
         this.$element = $('<button>');
         this.$element.text(this.text);
         this.$element.click(function () {
            alert(self.text);
         });
         $('body').append(this.$element);
      }
   };

   class Button_cls {
      constructor(text) {
         this.text = text;
      }
      create() {
         this.$element = $('<button>');
         this.$element.text(this.text);
         this.$element.click(() => { // NO PROBLEM USING ARROW FUNCTION
            alert(this.text);
         });
         $('body').append(this.$element);
      }
   }
   var btn1 = new Button("Hello function!");
   var btn2 = new Button_cls("Hello class!");
   btn1.create();
   btn2.create();
});