import React from 'react'
import Title from './Title'

export default function StrajaPresentation() {
    return (
        <>
        <section className="presentation-section container-fluid">
            <Title title="Prezentare Video"></Title>
            <div className="row">
                <div className="col-md-3 presentation-item">
                    <h4>Straja</h4>
                    <p>Staţiunea Straja însumează aproximativ 26 km de domeniu schiabil. 
                        20 km sunt acoperiţi cu zăpadă artificială. Cele 11 instalaţii de 
                        transport pe cablu vă asigură accesul facil la toate pârtiile din staţiune.
                        Sunt amenajate 12 pârtii de schi, fiecare fiind echipată cu instalaţie de 
                        transport pe cablu. Cinci dintre acestea beneficiază şi de instalaţie de 
                        nocturnă, făcând astfel posibilă utilizarea pârtiilor până seara târziu. 
                        Sunt întreţinute cu ajutorul utilajelor de bătătorit zăpada, pentru a le
                         menţine în condiţii cât mai bune de schi. Datorită construirii telegondolei
                        şi a telescaunului de pe Vf. Straja, apar pârtii noi, cea mai lungă fiind 
                        Pârtia Straja, cu o lungime de 8,1 km. În sezonul 2016-2017 am inaugurat
                        telescaunul de pe Pârtia Constantinescu, în sezonul 2017-2018 un alt 
                        telescaun, în locul teleschiului 2. Din sezonul 2018-2019 vă aşteptăm 
                        cu un nou telescaun, debraiabil, pe pârtiile Constantinescu şi Mutu.
                    </p>
                </div>
                <div className="col-md-9 presentation-item">
                <iframe className="presentation-video" width="1280" height="720"
                    src="https://www.youtube.com/embed/1LX0QCOna50">
                </iframe>
                </div>
            </div>
        </section>
        </>
    )
}
