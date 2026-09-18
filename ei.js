chrome.runtime.onInstalled.addListener(() => { 

console.log("Service Worker registrado e pronto para eventos."); 

});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => { 
if (request.acao === "ping") { 
    sendResponse({ resposta: "pong do Service Worker" }); 
} 

return true; 
});