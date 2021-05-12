import { shallow } from 'enzyme'
import AccountPage from '../pages/account/account.component'

describe('AccountPage component', () => {
  it('should match snapshot', () => {
    expect(shallow(<AccountPage />)).toMatchSnapshot()
  })
})
