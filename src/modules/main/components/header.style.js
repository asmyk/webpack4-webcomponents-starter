import { css } from '@polymer/lit-element';

export const styles = css`
    :host{
        flex: none;  
        padding: 20px 0;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden; 
      }
      
      li {
        float: left;
      }
      
      li a {
        display: block; 
        color:white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
       
      li a:hover {
        background-color: #111;
      }
`;