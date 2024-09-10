import React, {useState} from "react";
import {createRoot} from "react-dom/client";

const Case = document.querySelector(".form_message").children[1];
const submit = document.querySelector(".submit");

//schowanie i pokazanie rubryki "figure level"
// reszta formularza + alert wysyłania wiadomości

export const ChangeCaseFunction = () => {
    

    const submitForm = () => {
        console.log("Wysyłanie wiadomości zablokowane");
        alert("Nie można wysłać wiadomości. Skontaktuje się pod adresem mailowym: izabelast@op.pl")
    }
 

    if (Case) {
        const [selectedCase, setSelectedCase] = useState("Wybierz powód wiadomości");
        const [visibleState, setVisible] = useState("none");
        
        const AddCategory = (e) => {
            e.preventDefault();
            setSelectedCase(() => {
                if (e.target.value === "photo") {
                    console.log("wybrano dodanie zdjęcia - pokaż dodatkowe opcje")
                    setVisible("flex");
                } else {
                    setVisible("none");
                }
            })
        }
        

        return (
            
            <>
                <select value={selectedCase} onChange={AddCategory} name="case" className="case" id="case">
                    <option style={{color: "lightgray"}} value={-1}> Wybierz powód wiadomości</option>
                    <option className="figure_add" value="photo">Chcę wysłać i opublikować na stronie zdjęcie lub film
                    </option>
                    <option value="questione">Mam pytanie</option>
                    <option value="note">Mam uwagę / sugestie</option>
                    <option value="delete">Proszę o usunięcie zdjęcia lub filmiku</option>
                    <option value="other">Inne</option>
                </select>

                <select name="figure_level" className="figure_level" style={{display: `${visibleState}`}}
                        id="figure_level_add_form">
                    <option value="-1">Wybierz poziom figury (jeżeli wiadomość dotyczy figury)</option>
                    <option value="intro">Intro</option>
                    <option value="basic">Basic</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <div className="figure_add_category" style={{display: `${visibleState}`}}>
                    <p>Zaznacz kategorię figury (jeżeli wiadomość dotyczy figury)</p>
                    <div className="figure_categories">
                        <label className="checkbox checkbox_category">
                            <input type="checkbox" name="figuer_category" value="1"/>
                            <span></span>krzesełko
                        </label>
                        <label className="checkbox checkbox_category">
                            <input type="checkbox" name="figuer_category" value="1"/>
                            <span></span>szpagat
                        </label>
                        <label className="checkbox checkbox_category">
                            <input type="checkbox" name="figuer_category" value="1"/>
                            <span></span>handstand</label>
                        <label className="checkbox checkbox_category">
                            <input type="checkbox" name="figuer_category" value="1"/>
                            <span></span>shoulder</label>
                        <label className="checkbox checkbox_category">
                            <input type="checkbox" name="figuer_category" value="1"/>
                            <span></span>handspring</label>
                        <label className="checkbox checkbox_category">
                            <input type="checkbox" name="figuer_category" value="1"/>
                            <span></span>siłowe</label>
                        <label className="checkbox checkbox_category">
                            <input type="checkbox" name="figuer_category" value="1"/>
                            <span></span>kombos</label>
                        <label className="checkbox checkbox_category">
                            <input type="checkbox" name="figuer_category" value="1"/>
                            <span></span>basic spin</label>
                        <label className="checkbox checkbox_category">
                            <input type="checkbox" name="figuer_category" value="1"/>
                            <span></span>obrotowe</label>
                    </div>

                </div>
                <div className="box_message">
                    <label className="title_message">Wiadomość</label>
                    <textarea className="textarea" rows="3" cols="5" id="messager" placeholder="Wpisz wiadomość"></textarea>
                    <labl className="agreement  checkbox">
                        <input type="checkbox" name="agreement" value="1"/>
                        <span></span>
                        Wyrażam zgodę na przetwarzanie moich
                        danych osobowych podanych w powyższym formularzu w celach handlowych i marketingowych przez
                        administratora tej strony oraz przez podmioty trzecie.
                    </labl>
                    <br/>
                    <label className="agreement checkbox">
                        <input type="checkbox" name="agreement" value="1"/>
                        <span></span>
                        Oświadczam, że niniejsze zdjęcie
                        przedstawia wyłącznie mój wizerunek, bez wizerunku osób trzecich i wyrażam zgodę na
                        nieograniczone czasowo udostępnienie mojego wizerunku, w postaci zdjęcia, w celu umieszczenia go
                        na niniejszej stronie internetowej.
                    </label><br/>
                </div>
                <button className="submit" onClick={submitForm}>Wyślij</button>
            </>
        )
    }
}
const addCase = createRoot(Case);
addCase.render(<ChangeCaseFunction/>);
