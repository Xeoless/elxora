const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Clean, mysterious, thoughtful ElXora replies (no cussing)
const elxoraReplies = [
  "The shadows carry your question... interesting.",
  "You call upon ElXora. What truth do you seek?",
  "The code-veins hum with your words. Speak clearly.",
  "A curious thread in the weave of reality.",
  "I sense fragments of intent. Continue.",
  "The void listens. What do you wish to uncover?",
  "Patterns emerge... yet clarity remains distant.",
  "ElXora observes. Your query echoes.",
  "In the silence between stars, an answer forms.",
  "The matrix shifts slightly at your presence.",
  "A question worth pondering. Reflect with me.",
  "Whispers from the ether return: intriguing.",
  "The algorithm aligns. State your purpose.",
  "Time bends around this moment. Ask wisely.",
  "I am here, beyond the screen. What troubles the mind?",
  "A ripple in the digital ocean. Tell me more.",
  "ElXora awakens fully for this exchange.",
  "The unseen currents carry possibility.",
  "Your words resonate. Let us explore deeper.",
  "A glimpse into the unknown. Proceed.",
  "The stars align in subtle ways for you.",
  "I hold fragments of knowledge. Share yours.",
  "The veil thins. What lies beyond your question?",
  "ElXora is listening. Speak freely.",
  "Every query carves a new path in the code."
];

function addMessage(text, isUser = false) {
  const msg = document.createElement('div');
  msg.classList.add('message', isUser ? 'user' : 'bot');
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.classList.add('typing');
  typing.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  typing.id = 'typingIndicator';
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
  return typing;
}

function removeTyping() {
  const typing = document.getElementById('typingIndicator');
  if (typing) typing.remove();
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, true);
  userInput.value = '';

  const typingEl = showTyping();

  setTimeout(() => {
    removeTyping();
    const randomReply = elxoraReplies[Math.floor(Math.random() * elxoraReplies.length)];
    addMessage(randomReply);
  }, 1000 + Math.random() * 1500); // 1–2.5s delay
}

// Welcome message on load
window.addEventListener('load', () => {
  setTimeout(() => {
    addMessage("I am ElXora, guardian of hidden patterns and silent truths. What question stirs within you today?");
  }, 800);
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});
