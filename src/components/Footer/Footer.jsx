import { Container } from 'components/App.styled';
import React from 'react';


export function Footer() {
  

  return (
    <Container>
        <div>
<p>
{'\u00A9'}2023 MLYN Visual Studio.
</p>
<p><b>Office:</b> Ukraine, Kyiv</p>
        </div>
        <ul >
          <li>
            <a  href="callto:+380961111111">+38 096 111 11 11</a>
          </li>
          <li>
            <a  href="mailto:info@devstudio.com">mlyn@studio.com</a>
          </li>
        </ul>
        <ul >
          <li ><a href="https://www.instagram.com/" >Instagram</a></li>
         <li ><a href="https://www.instagram.com/" >Facebook</a></li>
          <li ><a href="https://www.instagram.com/" >LinkedIn</a></li>
        </ul>
    </Container>
  );
}




