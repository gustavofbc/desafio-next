import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    /* overflow-x: auto; */
`

export const Content = styled.div`
        table {
            width: 100%;
            border-spacing: 0.5rem;
            overflow-x: auto;

        th {
            color: #363f5f;
            font-weight: 600;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;

            border-bottom: 1px gray solid;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: #363f5f;
            border-radius: 0.25rem;
        }
    }

    @media(max-width: 720px) {
        display: block; 
    }
`