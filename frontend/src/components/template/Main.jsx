import "./Main.css"
import React from "react"
import Header from "./Header"

export default props =>
    <React.Fragment>
        <Header />
        <main className="content container-fluid">
            <div className="subHeader p-3 mt-3">
                <div className="icon ub-sub-header"></div>
                <div className="title ub-sub-header">Cadastro Usuário</div>
                <div className="obrigatorio ub-sub-header">*campos obrigatórios</div>
            </div>
            <hr />
            <div className="formContent p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>