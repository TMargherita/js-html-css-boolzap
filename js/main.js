/*1. Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa*/

$(document).ready(function() {

  $(".send-message").click(
    function() {
      sendMessage();
    }
  );

  $("#input-message").keyup(
    function(event) {
      if(event.which == 13) {
        sendMessage();
      }
    }
  );

/*2. cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde*/






/*funzioni*/
/*dichiaro una funzione che riguarda l'invio del messaggio, racchiundendo il css in un template display none, selezionando l'input di testo vado a richiamare il template di messaggio inviato, che clono e richiamo quando viene inserito del testo*/
function sendMessage() {
  var inputText= $("#input-message").val();
    if (inputText != "") {
      var templateMessage = $(".template .message_sent").clone();

      var time = getTime();

      templateMessage.find("message-text").text(".input-message");
      templateMessage.find("message-time").text("time");

      templateMessage.addClass("sent");

      $(".chat.active").append(templateMessage);
      setTimeout(cpuMessage, 1000);
      $("#input-message").val("");
      var heightChatActive = $(".chat.active").prop("scrollHeight");
      $(".chats-wrapper").scrollTop(heightChatActive);
    }
}
