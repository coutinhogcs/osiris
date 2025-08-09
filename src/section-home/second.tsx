import { useEffect, useState } from "react";

export default function Second() {
    const [count, setCount] = useState(0);
    const valorFinal = 1658878;

    useEffect(() => {
        const duracao = 5000; // duração total da animação (2 segundos)
        const incremento = Math.ceil(valorFinal / (duracao / 20)); // calcula incremento por passo

        const intervalo = setInterval(() => {
            setCount((prev) => {
                const proximo = prev + incremento;
                if (proximo >= valorFinal) {
                    clearInterval(intervalo);
                    return valorFinal;
                }
                return proximo;
            });
        }, 20);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <section >
            <div className="line">
                {/* <h1>aaaa</h1> */}
            </div>
            <div className="div-bg">
                <h1 className="textStyle">Dengue infects up to 400 million people every year,
                    according to the World Health Organization (WHO)
                </h1>

                <article className="join">
                    <h2 className="textStyle2">
                        Climate change and El Niño phenomenon expand the survival
                        of the Aedes aegypti mosquito, accelerating the epidemic
                    </h2>
                    <img src="src/public/images/gifbrazil.gif" alt="gif brazil" height={400} />
                </article>
                <article className="join2">
                    <div className="texto-sobreposto">
                        <h2 className="texto-brasil">In 2025, the number of Arboviroses <br />cases in:</h2>
                    </div>
                    <img
                        src="src/public/images/segundo-gif.gif"
                        alt="cases"
                        height={700}
                        className="gif-background"
                    />
                    <h2 className="texto-dinamico">
                        {count.toLocaleString("pt-BR")}
                    </h2>
                </article>
            </div>
        </section>

    );
}