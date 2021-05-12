import { shallow } from 'enzyme'
import HomePage from '../pages/homepage/homepage.component'

describe('Homepage component', () => {
  it('should cmatch snapshot', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot()
  })
})
