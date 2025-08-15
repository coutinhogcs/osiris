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
         <article className="join2">
                    <div className="texto-sobreposto">
                        <h2 className="tiexto-brasl">In 2025, the number of Arboviroses <br />cases in:</h2>
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
                        <h1 className="textStyle3">Among then ...</h1>
                    <div>
                        <div className="among-row">
                            <div className="among-left">
                                <h2>Dengue</h2>
                                <h3>1.478.752</h3>
                                <h3>probable cases</h3>
                            </div>
                            <div className="vertical-pipe"></div>
                            <div className="among-right">
                                <h3 style={{fontSize: "24px"}}>in wich</h3>
                                <h3 className="among-number">27.218</h3>
                                <h3>Severe cases and alarm signals</h3>
                            </div>
                        </div>
                    </div>
                </article>
    );
}