
// on click function that attaches to button to print item details

$('prodaddbtn').on('click', function() {
  //Get
  var name = $('#htprodname').val(); 
   //Get
  var desc = $('#htproddesc').val(); 
   //Get
  var price = $('#htprodprice').val(); 

var myCard = $('<div>');
var imageURL = 'https://image.freepik.com/free-vector/gift-box-design_1095-128.jpg';
var cardTemplate = '        <div class="image"> '+
            '<img src="' + 'https://image.freepik.com/free-vector/gift-box-design_1095-128.jpg' + '">'+
        '</div>'+
        '<div class="content">'+
          '<div class="header">'+
          'Item: ' + name + '<br>'+
          'Description: ' + desc + '<br>'+
          'Price: ' + price + '<br>'+
        '</div>'+
        '<div class="ui bottom attached basic buttons">'+
          '<button class="ui button"><i class="pencil icon"></i></button>'+
          '<button class="ui button"><i class="trash icon"></i></button>'+
        '</div>';

myCard.append(cardTemplate);
myCard.attr('class', 'card');
$('.ui_card').append(myCard);


});
