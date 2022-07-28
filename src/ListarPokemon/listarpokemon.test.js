import renderer from 'react-test-renderer';
import ListarPokemon from './ListarPokemon';

describe('ListarPokemon', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<ListarPokemon />);
        expect(tree).toBeTruthy();
    })
});



