import { FirstComponent } from "../components_screens/first-component";
import { FiveComponent } from "../components_screens/five-component";
import { FourthComponent } from "../components_screens/fouth-component";
import { SecondComponent } from "../components_screens/second-component";
import { ThirdComponent } from "../components_screens/third-component";

export default function Second() {
    return (
        <section >
            <div className="line"></div>
            <div className="div-bg">
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
                <FourthComponent />
                <FiveComponent />
            </div>
        </section>

    );
}