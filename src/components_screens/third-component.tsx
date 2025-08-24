import { useEffect, useState } from "react";

export function ThirdComponent() {
    const [count, setCount] = useState(0);
    const valorFinal = 1658878;

    useEffect(() => {
        const duracao = 10000;
        const incremento = Math.ceil(valorFinal / (duracao / 20));

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
        <article className="third__container">
            <div className="texto-sobreposto">
                <h2 className="texto-brasil">In 2025, the number of Arboviroses <br />cases in</h2>
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
            <h1 className="among__text">Among then ...</h1>
        </article>
    );
}