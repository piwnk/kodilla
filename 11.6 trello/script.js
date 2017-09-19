const getUUID = () => {
   const uuid = require("uuid/v4");
   console.log(uuid())
   return uuid();
};

class Column {
   constructor (name) {
      this.id = getUUID();
      this.name = name;
      this.$element = createColumn();
   }
   createColumn() {
      const $column = $("<div>").addClass("column");
      const $columnTitle = $("<h2>").addClass("column-title").text(this.name);
      const $columnCardList = $("<ul>").addClass("column-card-list");
      const $columnDelete = $("<button>").addClass("btn-delete").text("X");
      const $columnAddCard = $("<button>").addClass("add-card").text("Add a card");
      
      $columnDelete.click(() => {
         this.removeColumn();
      });

      $columnAddCard.click(() => {
         this.addCard(new Card(prompt("Enter the name of the card")));
      });

      $column.append($columnTitle)
             .append($columnDelete)
             .append($columnAddCard)
             .append($columnCardList)
      
      return $column;
   }

   addCard(card) {
      this.$element.children('ul').append(card.$element); //WHY NOT FIND?
   }

   removeColumn() {
      this.$element.remove();
   }
}

class Card {
   constructor (description) {
      this.id = getUUID();
      this.description = description;
      this.$element = createCard();
   }

   createCard() {
      const $card = $("<li>").addClass("card");
      const $cardDescription = $("<p>").addClass("card-description");
      const $cardDelete = $("<button>").addClass("btn-delete").text("X");
      
      $cardDelete.click(() => {
         this.removeCard();
      });

      $card.append($cardDelete)
           .append($cardDescription);

      return $card;
   }

   removeCard() {
      this.$element.remove();
   }
}