import { Growl } from './components/Growl'
import renderer from "react-test-renderer";

describe('GrowlRender', () => {
  it('renders', () => {
    const tree = renderer
      .create(<Growl onDismissed={() => setActive(false)} active={active} message="Hello World!" timeout={2000} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});