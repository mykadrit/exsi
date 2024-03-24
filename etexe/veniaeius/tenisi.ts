
const trello = require("trello");

const t = new trello("YOUR_API_KEY", "YOUR_API_SECRET");

t.modal.open("YOUR_MODAL_ID", "YOUR_BOARD_ID", true).then((data) => {
  console.log(data);
});

