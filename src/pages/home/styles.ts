import styled from "styled-components";

export const Container = styled.div<{ menuState: boolean }>`
width: 100%;
max-width: 1600px;
display: grid;
grid-template-columns: ${({ menuState }) =>menuState? "repeat(4, 1fr);" : "repeat(5, 1fr);"};
column-gap: 20px;
row-gap: 50px;
`;