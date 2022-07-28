import Button from './Button';
import renderer from 'react-test-renderer'; 

describe('Pruebas unitarias al componente button', () => {
    it('Should render ', () => {
        const tree = renderer.create(<Button />);
        expect(tree).toBeTruthy();
    }
    )

    it('Should render with props', () => {
        const tree = renderer.create(<Button name="test" />);
        expect(tree).toBeTruthy();
    }

)})





