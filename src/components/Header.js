import styled from 'styled-components';
import { VscSignOut } from "react-icons/vsc";


export default function Header ({pageTitle, hasIcon, margin}) {
  return (
    <AppHeader
      margin={margin}
    >
      <h1>
        {pageTitle}
      </h1>
      {hasIcon ? 
      <Exit />
      :
      <></>
      }
    </AppHeader>
  );
}

const AppHeader = styled.header`
  margin-bottom: ${(props) => props.margin};
  
  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
`;
const Exit = styled(VscSignOut)`
  
`;