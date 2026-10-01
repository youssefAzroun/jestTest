function toUpperCase(text) {
  return text.toUpperCase();
}

function handleConvert() {
  const input = document.getElementById("textInput");
  const result = toUpperCase(input.value);
  console.log(result);
}

if (typeof document !== "undefined") {
  const button = document.getElementById("convertBtn");
  if (button) {
    button.addEventListener("click", handleConvert);
  }
}

module.exports = { toUpperCase };
