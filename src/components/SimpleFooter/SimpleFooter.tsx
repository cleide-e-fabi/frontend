import * as svgs from '../../assets/svgs';
import { SimpleFooterStyles } from './SimpleFooterStyles.styles';

export default function SimpleFooter() {
  return (
    <>
      <SimpleFooterStyles>
        <img className="simple-footer-logo" src={svgs.logo} />
      </SimpleFooterStyles>
    </>
  );
}
