export function FiveComponent() {
    return (
        <div className="five_container">
            <h1 className="five__text__component">With more <b style={{ background: "var(--primary-color)", color: "var(--secondary-color)" }}>specific tests</b>, we help prevent outbreaks and better allocate public health resources.</h1>
            <h1 className="five__text__component">That’s where Diag<b style={{fontWeight: "700", color: "var(--secondary-color)" }}>Syn</b> comes into play — a solution that combines both specificity and sensitivity into one powerful tool for diagnosing arboviral diseases.</h1>
            <img src="src/public/images/terceiro-gif.gif" alt="molecula" className="terceiro-gif"/>
            <h1 className="five__text__component">The Rio_UFRJ_Brazil team designed three{" "}
                <span className="underline">recombinant proteins</span>  to serve as specific biomarkers for the serological diagnosis of Dengue, Zika, and Chikungunya.</h1>
        </div>
    );
}