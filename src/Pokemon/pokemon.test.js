import renderer from 'react-test-renderer';
import Pokemon from './pokemon';

describe('Pokemon', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Pokemon />);
        expect(tree).toBeTruthy();
    }
    );
}
);

