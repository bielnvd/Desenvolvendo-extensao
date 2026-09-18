console.log("Content Script injetado com sucesso nesta página!"); 

document.body.style.border = "4px solid #007bff"; chrome.runtime.sendMessage({ acao: "ping" }, 
(response) => { 

console.log("Resposta recebida nos bastidores:", response?.resposta); 

});
