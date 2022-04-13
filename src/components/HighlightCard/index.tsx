import React from "react";
import 
{
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
    IconTotal,
    
} from "./styles";

interface Props {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'income'| 'expense' | 'total';
}

export function HighlightCard({
    title,
    amount,
    lastTransaction,
    type
}: Props) {
    const icons = {
        income: "arrow-up-circule",
        expense: "arrow-down-circule",
        total: "dollar-sign"
    }
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                {
                    type === 'total' ?
                    <IconTotal name={Icons[type]} type={type} /> :
                    <Icon name={Icons[type]} type={type} />
                }
               
            </Header>
            <Footer>
                <Amount type={type}>
                    {amount}
                </Amount>
                <LastTransaction type={type}>
                    {lastTransaction}
                </LastTransaction>
            </Footer>
        </Container>
    );

}