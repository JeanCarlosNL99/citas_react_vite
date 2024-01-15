//Mi primer componente con React
//Los componentes son Funciones

function Header (props){
    const {titleHeader, subTitleHeader, readFromHeader} = props;

    readFromHeader('Hola desde header');

    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-1/2 mx-auto">{props.titleHeader} 
                <span className="text-indigo-800"> {subTitleHeader}</span>
            </h1>
        </>
    )
}

export default Header