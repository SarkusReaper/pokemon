import Input from './Input';
import renderer from 'react-test-renderer'; 

describe('Pruebas unitarias al componente button', () => {
    it('Should render ', () => {
        const tree = renderer.create(<Input />);
        expect(tree).toBeTruthy();
    }
    )

    it('Should render with props', () => {
        const tree = renderer.create(<Input name="test" />);
        expect(tree).toBeTruthy();
    })

}) 
