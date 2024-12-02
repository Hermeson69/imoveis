import React, {Fragment} from "react";
import { Container, Logo, Menu } from "./styles";

const Naavbar = () => {
    return (
        <Container>
        <Logo>
            <img src="" alt="" />
            <h3>Logo</h3>
        </Logo>
        <Menu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Imoveis</a></li>
                <li><a href="">Serviços</a></li>
                <li><a href="">Avaliação</a></li>
            </ul>
        </Menu>
        </Container>
    )
}
export default Naavbar;