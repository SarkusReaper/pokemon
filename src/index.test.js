import renderer from 'react-test-renderer';
import Index from './index';

describe ('Pruebas unitarias modulo index', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Index />);
        expect(tree).toBeTruthy();
    }
    );
}
);