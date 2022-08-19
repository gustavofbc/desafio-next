import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    min-width: 100%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    
    input {
        max-width: 500px;
        height: 3rem;
        font-size: 1rem;
        border-radius: .5rem;
        padding: .5rem;
    }
`

export const ModalContent = styled.div`
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
            display: block;
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: #363f5f;
            border-radius: 0.25rem;
        }

        tr {
            display: block;
            float: left;
        }
        
        span {
            font-size: 1.2rem;
            font-weight: bold;
            margin-right: 0.5rem;
        }
    }

    @media(max-width: 720px) {
        display: block;
    }
`

export const Content = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
    gap: 1rem;

    text-align: center;
    margin: 1rem;
`

export const Card = styled.div`
    width: 10rem;
    height: 10rem;
    opacity: 0.9;
    background-color:#fff;
    
    border: 2px solid #fff;
    border-radius: 0.5rem;
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: 10px 5px 4px 0px rgba(0, 0, 0, 0.25);

    transition: border-color .3s;
    &:hover {
        border-color: #363f5f;
        opacity: 1;
  }

    p {
        color: #363f5f;
    }

    span {
        font-weight: bold;
    }
`