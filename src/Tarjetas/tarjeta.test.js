import renderer from 'react-test-renderer';
import Tarjetas from './Tarjetas';

describe ('Pruebas Unitarias modulo Tarjeta', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Tarjeta />);
        expect(tree).toBeTruthy();
    }
    );
});

