import {shallow, mount} from 'enzyme'
import {render, fireEvent, cleanup} from '@testing-library/react'
import Navbar from '../pages/navbar/navbar.component'
import {UserContext} from '../provider/index'

describe('Navbar page', () => {
  afterEach(cleanup)
  let wrapper
  const userContextValues =
    {
      state:  {currentUser:{displayName: 'test'}},
      dispatch: jest.fn()
    }

  beforeEach(()=>{
    const NavComponent = () =>(
      <UserContext.Provider value={{ ...userContextValues}} >
        <Navbar />
      </UserContext.Provider>
    )
    wrapper = shallow(<NavComponent />)
  })

  it('should match snapshot', ()=> {
    expect(wrapper).toMatchSnapshot()
  })

  it('should define initial state to the context hook',() =>{
    const navWrapper = wrapper.find(Navbar)
    const currentUser = navWrapper.find('span')
    console.log(currentUser)
   // expect(currentUser.text()).toBe('test')
  })
})
