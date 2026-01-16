function login() {
  document.getElementById("authBox").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function showRegister() {
  document.getElementById("authTitle").innerText = "Register";
  document.querySelector(".auth-box button").innerText = "Register";
  document.querySelector(".switch").innerHTML =
    'Already have an account? <span onclick="login()">Login</span>';
}

// Chat
function sendMessage() {
  const input = document.getElementById("userInput");
  if (input.value === "") return;

  addMessage(input.value, "user");

  setTimeout(() => {
    addMessage("AI: I will find the best job matches for you!", "bot");
    addMessage("AI: hey iam chatbot ask a anything about job role!","bot");
    
  }, 700);

  input.value = "";
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.className = 'message ${type}';
  msg.innerText = text;
  document.getElementById("messages").appendChild(msg);
}