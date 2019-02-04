import { css } from '@polymer/lit-element';

export const styles = css`
    input{
        box-sizing: border-box;
        width: 100%;
        padding: var(--input-padding);
        margin: var(--input-margin);
    }

    input[type='submit']{
        border: none;
        color: white;
        background-color: #4CAF50;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    }
`;