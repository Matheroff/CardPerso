import './Card.css'
import EtienneRobial from '../assets/EtienneRobial.jpg'


function Card() {
    return (
        <>
        <div className="card-container">
        <div className="img-container">
            <img src={EtienneRobial} className="card-img" alt="Portrait du designer graphique français Etienne Robial"/>
        </div>
        <section>
            <h1>Etienne Robial</h1>
            <h2>Designer graphique français</h2>
            <article>
                <p>
                    Le point commun entre Canal+, Glamour et le PSG ?
                    Si vous pensez 'femmes à fortes poitrines' vous n'y êtes pas du tout.
                    Le point commun s'appelle Robial, Étienne Robial. Cet homme jovial et grisonnant au physique de père Noël qui compte en hippopotames (on vous expliquera plus bas) est le graphiste / peintre de lettre / directeur artistique à l'origine d'une multitude de logos ayant construit le paysage graphique et audiovisuel français. Vous pouvez lui dire merci.
                </p>
            </article>
            <blockquote className="designer-quote">
                "L'habillage n’est pas qu’une histoire d’esthétique et de charte graphique, mais d’identité : quand on arrive sur l’antenne, on doit savoir exactement où l’on est. (...) L’habillage, fondamentalement, c’est de la signalétique. Le but est, encore une fois, avant tout d’identifier et d’informer sur un programme plutôt que de "faire joli".
            </blockquote>
            <div className="button-container">
                <button className="card-button">En savoir plus</button>
            </div>
        </section>
        </div>
        </>
    )
}

export default Card