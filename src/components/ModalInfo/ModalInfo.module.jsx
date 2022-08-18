import styled from 'styled-components'

export const Modal = styled.div`
    .modal-overlay {
        background: var(--black-dark);
        opacity: 0.95;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`