import renderer from 'react-test-renderer';
import Root from './Root';

describe('Pruebas unitarias modulo Root', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Root />);
        expect(tree).toBeTruthy();
    });

});

