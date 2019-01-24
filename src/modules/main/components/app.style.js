import { css } from '@polymer/lit-element';

export const styles = css`
    :host{
        margin-top: var(--space); 
        padding: 50px 10px;
        text-align:center;
        background-color:#111;
    }


    @media (min-width: 768px) {
        :host{
            flex: 1;
            margin: 0;
        }

    }
`;