import React, { useState, useRef, useEffect } from "react";
import logoFuria from "./assets/logo-furia.png"; // ajuste o caminho se precisar

function ChatBox() {
    const [mensagem, setMensagem] = useState("");
    const [historico, setHistorico] = useState([]);

    const mensagensRef = useRef(null); // referencia para a caixa de mensagens

    useEffect(() => {
        // Sempre que o histórico mudar, descer automaticamente
        if (mensagensRef.current) {
            mensagensRef.current.scrollTop = mensagensRef.current.scrollHeight;
        }
    }, [historico]);

    function enviarMensagem(e) {
        e.preventDefault();
        if (mensagem.trim() === "") return;

        const novaMensagem = { autor: "você", texto: mensagem };
        const respostaBot = gerarResposta(mensagem);

        setHistorico([...historico, novaMensagem, { autor: "bot", texto: respostaBot }]);
        setMensagem("");
    }

    function gerarResposta(pergunta) {
        const texto = pergunta.toLowerCase();
        if (texto.includes("jogo") || texto.includes("partida") || texto.includes("calendário")) {
            return "Nosso próximo jogo é no sábado às 18h contra a Team Vitality! 🕕🔥";
        } else if (texto.includes("time") || texto.includes("jogador")) {
            return "O nosso elenco conta com KSCERATO, yuurih, arT, chelo e saffee 💪";
        } else if (texto.includes("comprar") || texto.includes("ingresso")) {
            return "Você pode comprar ingressos pelo nosso site oficial: furia.gg";
        } else if (texto.includes("notícias") || texto.includes("novidades") || texto.includes("atualizações")) {
            return "Confira as últimas novidades da FURIA no nosso site: furia.gg/noticias 📢";
        } else if (texto.includes("história") || texto.includes("origem") || texto.includes("como surgiu")) {
            return "A FURIA foi fundada em 2017 e desde então é uma das maiores potências do esports brasileiro! 🇧🇷";
        } else if (texto.includes("redes sociais") || texto.includes("instagram") || texto.includes("twitter")) {
            return "Siga a FURIA no Instagram (@furia) e no Twitter (@FURIA) para ficar por dentro! 🐾";
        } else if (texto.includes("loja") || texto.includes("comprar camisa") || texto.includes("merch")) {
            return "Adquira produtos oficiais na loja: furia.gg/store 👕🔥";
        } else if (texto.includes("motivação") || texto.includes("frase") || texto.includes("animação")) {
            return "Lembre-se: Jogamos com raça, jogamos com FURIA! 🖤🔥";
        } else {
            return "Desculpa, ainda não entendi... 😅 Me pergunte algo sobre jogos, time ou ingressos!";
        }
    }

    function reiniciarConversa() {
        setHistorico([]);
    }

    return (
        <div style={{
            maxWidth: "500px",
            margin: "2rem auto",
            backgroundColor: "#1e1e1e",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(255, 204, 0, 0.5)"
        }}>
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <img src={logoFuria} alt="Logo FURIA" style={{ width: "120px", marginBottom: "1rem" }} />
                <h1 style={{ color: "#ffcc00", marginBottom: "0.5rem" }}>Bot FURIA</h1>
                <p style={{ color: "#cccccc" }}>Olá, torcedora! Em que posso ajudar hoje? 🐺</p>
            </div>

            <div
                ref={mensagensRef} // <-- aqui a referência
                style={{
                    height: "300px",
                    overflowY: "auto",
                    backgroundColor: "#2a2a2a",
                    padding: "1rem",
                    borderRadius: "8px",
                    marginBottom: "1rem"
                }}
            >
                {historico.map((msg, index) => (
                    <div
                        key={index}
                        style={{
                            textAlign: msg.autor === "você" ? "right" : "left",
                            marginBottom: "0.8rem"
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                backgroundColor: msg.autor === "você" ? "#00ffcc" : "#ff66cc",
                                color: "#1e1e1e",
                                padding: "0.5rem 1rem",
                                borderRadius: "20px",
                                maxWidth: "70%",
                                wordBreak: "break-word"
                            }}
                        >
                            <strong>{msg.autor}: </strong>{msg.texto}
                        </span>
                    </div>
                ))}
            </div>

            <form onSubmit={enviarMensagem} style={{ display: "flex" }}>
                <input
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite sua mensagem"
                    style={{
                        flexGrow: 1,
                        padding: "0.5rem",
                        marginRight: "0.5rem",
                        borderRadius: "5px",
                        border: "none"
                    }}
                />
                <button type="submit" style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#ffcc00",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}>
                    Enviar
                </button>
            </form>

            <button
                onClick={reiniciarConversa}
                style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#ffaa00",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "black",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#ffcc33";
                    e.target.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#ffaa00";
                    e.target.style.transform = "scale(1)";
                }}
            >
                🔄 Reiniciar Conversa
            </button>
        </div>
    );
}

export default ChatBox;
