import { Container } from "react-bootstrap";

export default function First() {
    return (
        <Container fluid className="p-0 position-relative home-section">
            <h1 className="text-secao">Synthetic Biology <br />for Precision Diagnostics</h1>
            <img
                src="src/public/images/mosquito.png"
                alt="Mosquito"
                className="mosquito img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        </Container>
    )
}