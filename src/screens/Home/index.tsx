import React from 'react';

import {
    Container,
    Header,
    ContentWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlighCards
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';

export function Home() {
    return (
        <Container>
            <Header>
                <ContentWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://github.com/cristianordon.png' }} />
                        <User>
                            <UserGreeting>Olá, Usuário! </UserGreeting>
                        </User>
                    </UserInfo>

                    <Icon name="logout"/>
                </ContentWrapper>
            </Header>

            <HighlighCards>
                <HighlightCard 
                title='Entrada'
                amount='R$ 400,00'
                lastTransaction='Última entrada dia 13 de abril'
                type='income'
                />
                <HighlightCard 
                title='Saida'
                amount='R$ 539,00'
                lastTransaction='Última saída dia 13 de abril'
                type='expense'
                />
                <HighlightCard 
                title='Total'
                amount='R$ 139,00'
                lastTransaction='01 à 16 de abril'
                type='total'
                />
            </HighlighCards>
            
        </Container >
    );
}