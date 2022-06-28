import styled from 'styled-components';

const LOGO = "https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
const PERFIL = "https://pbs.twimg.com/media/DmtcXxYUcAYshhQ?format=jpg&name=240x240"

export default function Topo ( {fundoPreto} ) {
    return (
        <Header fundo={fundoPreto}>
            <Logo>
                <Imagem src={LOGO} alt="Netflix"/>
            </Logo>
           <User>
                <Imagem src={PERFIL} alt="Usuário"/>
           </User>
        </Header>
    )
}

const Header = styled.header`
    position: fixed;
    z-index: 3;
    top: 10;
    right: 0;
    left: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 0px 30px;
    background: ${props => props.fundo ? "#141414" : "transparent"};
    transition: all ease 0.5s;
    overflow: hidden;
`;

const Logo = styled.div`
    height: 25px;
`;

const Imagem = styled.img`
    object-fit: cover;
    height: 100%;
`;

const User = styled.div`
    height: 35px;
    border-radius: 4px;
`;