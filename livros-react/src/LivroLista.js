import React, { useEffect, useState } from "react";
import ControleEditora from "./controle/ControleEditora";
import ControleLivro from "./controle/ControleLivros"

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

function LinhaLivro(props) {
    return <tr>
        <td className="titulo"><p>{props.livro.titulo}</p><br />
            <button className="btn btn-danger" onClick={() => props.excluir(props.livro.codigo)}>Excluir</button>
        </td>
        <td className="resumo">{props.livro.resumo}</td>
        <td>{controleEditora.getNomeEditora(props.livro.codEditora)}</td>
        <td>
            <ul>
                {props.livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
            </ul>
        </td>
    </tr>
}



function LivroLista() {

    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(Boolean);


    useEffect(() => {
        setLivros(controleLivro.obterLivros())
        setCarregado(true)

    }, [carregado]);

    const excluir = (num) => {

        controleLivro.excluir(num);
        setCarregado(false);
    }


    return (
        <main>
            <h1 className="">Controle de Livros</h1>
            <table className="table table-striped">
                <thead className="bg-black">
                    <tr>
                        <th className="text-white">Titulo</th>
                        <th className="text-white" >Resumo</th>
                        <th className="text-white">Editora</th>
                        <th className="text-white">Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro, index) => (
                        <LinhaLivro
                            livro={livro}
                            key={index}
                            excluir={excluir}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    )

}
export default LivroLista;