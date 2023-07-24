import './Rodape.css'

const Rodape = () => {
    return (
        <section className='footer'>
            <div className='fundo'>
            </div>
             <div className='footer--rodape'>
                <div className='social'>
                    <img src='/imagens/fb.png' alt='Facebook'/>
                    <img src='/imagens/tw.png' alt='Twitter'/>
                    <img src='/imagens/ig.png' alt='Instagram'/>
                </div>
                <img src='./imagens/logo.png' alt='Logo'/>
                <p>Desenvolvido por Alan004</p>
            </div> 
        </section>
    )
}

export default Rodape