const getUUID = () => {
   const uuid = uuidv4();
   console.log(uuid);
   return uuid;
};

class Column {
   constructor(name) {
      this.id = getUUID();
      this.name = name;
      this.$element = this.createColumn();
   }
   createColumn() {
      const $column = $("<div>").addClass("column");
      const $columnTitle = $("<h2>").addClass("column-title").text(this.name);
      const $columnCardList = $("<ul>").addClass("column-card-list");
      const $columnDelete = $("<button>").addClass("btn-delete").text("x");
      // const $columnAddCard = $("<button>").addClass("add-card").text("Add a card");
      const $columnAddCard = $("<button>").addClass("add-card").text("+");

      $columnDelete.click(() => {
         this.removeColumn();
      });

      $columnAddCard.click(() => {
         this.addCard(new Card(prompt("Enter the name of the card")));
      });

      $column.append($columnTitle)
         .append($columnCardList)
         .append($columnAddCard)
         .append($columnDelete);

      return $column;
   }

   addCard(card) {
      this.$element.children('ul').append(card.$element); //WHY NOT FIND?
   }

   removeColumn() {
      this.$element.remove();
   }
}

// function Column(name) {
//    var self = this;

//    this.id = getUUID();
//    this.name = name;
//    this.$element = createColumn();

//    function createColumn() {
//       var $column = $('<div>').addClass('column');
//       var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
//       var $columnCardList = $('<ul>').addClass('column-card-list');
//       var $columnDelete = $('<button>').addClass('btn-delete').text('x');
//       // var $columnAddCard = $('<button>').addClass('add-card').text('Add a card');
//       var $columnAddCard = $('<button>').addClass('add-card').text('+');

//       $columnDelete.click(function () {
//          self.removeColumn();
//       });

//       $columnAddCard.click(function () {
//          self.addCard(new Card(prompt("Enter the name of the card")));
//       });

//       $column.append($columnTitle)
//          .append($columnCardList)
//          .append($columnAddCard)
//          .append($columnDelete);
//       return $column;
//    }
// }

// Column.prototype = {
//    addCard: function (card) {
//       this.$element.children('ul').append(card.$element);
//    },
//    removeColumn: function () {
//       this.$element.remove();
//    }
// };

class Card {
   constructor(description) {
      this.id = getUUID();
      this.description = description;
      this.$element = this.createCard();
   }

   createCard() {
      console.log('asdfas');
      const $card = $("<li>").addClass("card");
      const $cardDescription = $("<p>").addClass("card-description").text(this.description);
      const $cardDelete = $("<button>").addClass("btn-delete").text("x");

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

// function Card(description) {
//    var self = this;

//    this.id = getUUID();
//    this.description = description;
//    this.$element = createCard(); //

//    function createCard() {
//       var $card = $('<li>').addClass('card');
//       var $cardDescription = $('<p>').addClass('card-description').text(self.description);
//       var $cardDelete = $('<button>').addClass('btn-delete').text('x');

//       $cardDelete.click(function () {
//          self.removeCard();
//       });

//       $card.append($cardDelete)
//          .append($cardDescription);

//       return $card;
//    }

//    Card.prototype = {
//       removeCard: function () {
//          this.$element.remove();
//       }
//    };
// }

const board = {
   name: "Kanban board",
   addColumn: (column) => {
      console.log(this);
      board.$element.append(column.$element);
      initSortable();
   },
   $element: $("#board").find(".column-container")
};

// var board = {
//    name: 'Kanban Board',
//    addColumn: function (column) {
//       this.$element.append(column.$element);
//       initSortable();
//    },
//    $element: $('#board .column-container')
// };

function initSortable() {
   $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: 'card-placeholder'
   }).disableSelection();
}

$('.create-column')
   .click(function () {
      var name = prompt('Enter a column name');
      var column = new Column(name);
      board.addColumn(column);
   });

// TWORZENIE KOLUMN
var todoColumn = new Column('To do');
var doingColumn = new Column('Doing');
var doneColumn = new Column('Done');

// DODAWANIE KOLUMN DO TABLICY
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// TWORZENIE NOWYCH EGZEMPLARZY KART
var card1 = new Card('New task');
var card2 = new Card('Create kanban boards');

// DODAWANIE KART DO KOLUMN
todoColumn.addCard(card1);
doingColumn.addCard(card2);