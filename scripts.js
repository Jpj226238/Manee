/* Place your JavaScript in this file */
const userLang = navigator.language || navigator.userLanguage;

if (userLang.startsWith("th")) {
  // ภาษาไทย
  window.location.href = "/th/index.html";
} else if (userLang.startsWith("ja")) {
  // ภาษาญี่ปุ่น
  window.location.href = "/ja/index.html";
} else {
  // ค่า default เป็นภาษาอังกฤษ
  window.location.href = "/en/index.html";
}
