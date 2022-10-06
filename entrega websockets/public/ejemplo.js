const socket = io(); // socket server connection

const chat = document.getElementById("chat");

socket.on('messages', (data) => {
     console.log(data);
     const html = data.map((message) => {
      return `
      <span>
         <strong>${message.author}:</strong> ${message.text}
      </span><br>
      `;                                   
     }).join("\n");
     console.log(html);
     chat.innerHTML=html;
   })