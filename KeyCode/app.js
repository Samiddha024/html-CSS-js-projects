// const insert = document.getElementById("send");
// /*The window object represents the entire browser window,
//  meaning it captures key events regardless of which specific element has focus. 
//  This is useful for implementing global keyboard*/

// window.addEventListener("keydown", (event) => {
//   // if its ' ' then put out Space or else put out whatever key is
//   insert.innerHTML = `
//   <div class="key">
//   ${event.key === " " ? "Space" : event.key} 
//   <small>event.key</small>
// </div>

//   <div class="key">
//     ${event.keyCode}
//     <small>event.keyCode</small>
//   </div>

//   <div class="key">
//     ${event.code}
//     <small>event.code</small>
//   </div>
//   `;
// });

// // keyCode is deprecated



document.addEventListener("DOMContentLoaded", () => {
  const insert = document.getElementById("insert");
  
  if (!insert) {
    console.error("Element with id 'send' not found!");
    return;
  }

  window.addEventListener("keydown", (event) => {
    insert.innerHTML = `
      <div class="key">
        ${event.key === " " ? "Space" : event.key} 
        <small>event.key</small>
      </div>

      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>
    `;
  });
});
