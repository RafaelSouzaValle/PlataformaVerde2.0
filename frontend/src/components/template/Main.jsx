import "./Main.css"
import React from "react"
import Header from "./Header"

export default props =>
    <React.Fragment>
        <Header />
        <main className="content container">
            <div className="subHeader">
                <div className="icon"></div>
                <div className="title">Cadastro Usuário</div>
                <div className="obrigatorio">*campos obrigatórios</div>
            </div>
            <hr />
            <div className="mt-4">
                {props.children}
            </div>
        </main>
    </React.Fragment>