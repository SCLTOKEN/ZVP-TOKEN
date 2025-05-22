document.getElementById("mintButton").addEventListener("click", async () => {
const status = document.getElementById("status");
status.innerText = "Conectando à carteira...";

try {
const provider = window.phantom?.solana;
if (!provider?.isPhantom) throw new Error("Carteira Phantom não encontrada.");

const connection = await provider.connect();
status.innerText = `Carteira conectada: ${connection.publicKey.toString()}`;

// Simula criação do token ZVP (token real requer Solana CLI ou Script de backend)
setTimeout(() => {
status.innerText += "\nZVP Token mintado com sucesso (simulado)";
}, 2000);

} catch (err) {
status.innerText = `Erro: ${err.message}`;
}
});
